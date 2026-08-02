import React, { useState, useEffect } from 'react';
import { Question, QuizSession, UserAnswer, QuestionBookmark, LanguageMode } from './types';
import { 
  getAllQuestions, 
  getQuizSessions, 
  saveQuizSession, 
  getBookmarks, 
  toggleBookmark as toggleBookmarkStorage, 
  saveCustomQuestion,
  getFlashcardConfidence,
  setFlashcardConfidence as setConfidenceStorage,
  getIsPremiumUnlocked,
  setPremiumUnlocked
} from './lib/storage';
import { 
  auth, 
  onAuthStateChanged, 
  signOut, 
  getDeviceId, 
  getUserProfile, 
  subscribeToDeviceSession, 
  UserProfile, 
  User as FirebaseUser,
  registerUserDeviceAndLogin
} from './lib/firebase';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/HomeView';
import { CategoryView } from './components/CategoryView';
import { MockTestsView } from './components/MockTestsView';
import { PremiumView } from './components/PremiumView';
import { ProfileView } from './components/ProfileView';
import { QuizView } from './components/QuizView';
import { FlashcardView } from './components/FlashcardView';
import { BookmarksView } from './components/BookmarksView';
import { ResultSummary } from './components/ResultSummary';
import { AITutorModal } from './components/AITutorModal';
import { AddQuestionModal } from './components/AddQuestionModal';
import { QuestionBankGenerator } from './components/QuestionBankGenerator';
import { AuthModal } from './components/AuthModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { BreakingNewsTicker } from './components/BreakingNewsTicker';
import { ShieldAlert, Smartphone, Download } from 'lucide-react';

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizSessions, setQuizSessions] = useState<QuizSession[]>([]);
  const [bookmarks, setBookmarks] = useState<QuestionBookmark[]>([]);
  const [confidenceRatings, setConfidenceRatings] = useState<Record<number, 'again' | 'hard' | 'good' | 'easy'>>({});
  const [langMode, setLangMode] = useState<LanguageMode>('dual');
  
  // Navigation active tab: 'home' | 'chapters' | 'mock-tests' | 'premium' | 'profile' | 'bookmarks' | 'flashcards' | 'question-bank'
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  // Firebase Auth & Firestore Profile State
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => getIsPremiumUnlocked());

  // Ensure local storage is kept in sync when premium profile is active
  useEffect(() => {
    if (userProfile?.isPremium) {
      setIsUnlocked(true);
      setPremiumUnlocked(true);
    }
  }, [userProfile]);

  // Periodic 24-hour auto-expiry check for Premium Session
  useEffect(() => {
    const checkExpiry = () => {
      const unlocked = getIsPremiumUnlocked();
      if (!unlocked && isUnlocked && !userProfile?.isPremium) {
        setIsUnlocked(false);
      }
    };
    checkExpiry();
    const timer = setInterval(checkExpiry, 30000);
    return () => clearInterval(timer);
  }, [isUnlocked, userProfile]);

  useEffect(() => {
    if (isUnlocked) {
      setPremiumUnlocked(true);
    }
  }, [isUnlocked]);

  // Modals & Search State
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [deviceMismatchAlert, setDeviceMismatchAlert] = useState<boolean>(false);
  const [authModalInitialPhone, setAuthModalInitialPhone] = useState<string>('');
  const [authModalInitialAccessCode, setAuthModalInitialAccessCode] = useState<string>('');

  const handleSelectCategoryForChapters = (catName: string) => {
    setSelectedCategoryFilter(catName);
    setActiveTab('chapters');
  };
  
  // Active Quiz State
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[] | null>(null);
  const [activeQuizTitle, setActiveQuizTitle] = useState<string>('Practice Quiz');
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [isCentralQuiz, setIsCentralQuiz] = useState<boolean>(false);
  const [initialQuestionIndex, setInitialQuestionIndex] = useState<number>(0);

  // Active Completed Result State
  const [quizResult, setQuizResult] = useState<{
    questions: Question[];
    answers: Record<number, UserAnswer>;
    timeSpentSeconds: number;
    sessionTitle: string;
  } | null>(null);

  // Modal States
  const [aiTutorQuestion, setAiTutorQuestion] = useState<Question | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // Load storage data on mount
  useEffect(() => {
    setQuestions(getAllQuestions());
    setQuizSessions(getQuizSessions());
    setBookmarks(getBookmarks());
    setConfidenceRatings(getFlashcardConfidence());
  }, []);

  // Custom event listener to open Premium Login with initial values from pay screen
  useEffect(() => {
    const handleOpenLogin = (e: Event) => {
      const customEvent = e as CustomEvent<{ phone?: string; code?: string }>;
      if (customEvent.detail) {
        setAuthModalInitialPhone(customEvent.detail.phone || '');
        setAuthModalInitialAccessCode(customEvent.detail.code || '');
      } else {
        setAuthModalInitialPhone('');
        setAuthModalInitialAccessCode('');
      }
      setShowAuthModal(true);
    };
    window.addEventListener('open-premium-login', handleOpenLogin);
    return () => {
      window.removeEventListener('open-premium-login', handleOpenLogin);
    };
  }, []);

  // Firebase Auth Listener & Firestore Device Session Monitor
  useEffect(() => {
    let unsubscribeSnapshot: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
        unsubscribeSnapshot = null;
      }

      setFirebaseUser(user);
      if (user) {
        const currentDeviceId = getDeviceId();
        try {
          const profile = await registerUserDeviceAndLogin(user, currentDeviceId);
          setUserProfile(profile);
          setIsUnlocked(profile.isPremium);
          if (profile.isPremium) {
            setPremiumUnlocked(true);
          }

          unsubscribeSnapshot = subscribeToDeviceSession(
            user.uid,
            currentDeviceId,
            () => {
              setDeviceMismatchAlert(true);
              signOut(auth);
              setFirebaseUser(null);
              setUserProfile(null);
              setIsUnlocked(false);
              setPremiumUnlocked(false);
            },
            (updatedProfile) => {
              setUserProfile(updatedProfile);
              setIsUnlocked(updatedProfile.isPremium);
              if (updatedProfile.isPremium) {
                setPremiumUnlocked(true);
              }
            }
          );
        } catch (err) {
          console.error('Error in auth state change processing:', err);
        }
      } else {
        setUserProfile(null);
        setIsUnlocked(getIsPremiumUnlocked());
      }
    });

    return () => {
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }
      unsubscribeAuth();
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    try {
      localStorage.removeItem('xray_prep_logged_in_uid');
    } catch (e) {}
    setFirebaseUser(null);
    setUserProfile(null);
    setIsUnlocked(getIsPremiumUnlocked());
  };

  // Compute stats
  let totalAttempted = 0;
  let totalCorrect = 0;
  quizSessions.forEach(session => {
    Object.values(session.answers).forEach(ans => {
      const userAnswer = ans as UserAnswer;
      totalAttempted++;
      if (userAnswer.isCorrect) totalCorrect++;
    });
  });

  const accuracyRate = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const bookmarkedIds = bookmarks.map(b => b.questionId);

  // Handlers
  const handleToggleBookmark = (qId: number, notes?: string) => {
    const updated = toggleBookmarkStorage(qId, notes);
    setBookmarks(updated);
  };

  const handleSetConfidence = (qId: number, rating: 'again' | 'hard' | 'good' | 'easy') => {
    const updated = setConfidenceStorage(qId, rating);
    setConfidenceRatings({ ...updated });
  };

  const handleStartQuiz = (options: {
    mode: 'exam' | 'practice' | 'category' | 'core' | 'saved' | 'missed';
    category?: string;
    questionIds?: number[];
    isCentral?: boolean;
  }) => {
    let quizSet: Question[] = [];
    let title = 'Practice Exam';
    let examMode = false;
    let central = options.isCentral || false;

    if (options.mode === 'exam') {
      const techQs = questions.filter(q => q.section === 'technical' || q.category.includes('Technical'));
      const marathiQs = questions.filter(q => q.section === 'marathi' || q.category.includes('Marathi'));
      const englishQs = questions.filter(q => q.section === 'english' || q.category.includes('English'));
      const gkQs = questions.filter(q => q.section === 'gk' || q.category.includes('General Knowledge'));
      const logicalQs = questions.filter(q => q.section === 'logical' || q.category.includes('Logical'));

      const sampledTech = [...techQs].sort(() => Math.random() - 0.5).slice(0, 40);
      const sampledEnglish = [...englishQs].sort(() => Math.random() - 0.5).slice(0, 15);
      const sampledMarathi = [...marathiQs].sort(() => Math.random() - 0.5).slice(0, 15);
      const sampledGk = [...gkQs].sort(() => Math.random() - 0.5).slice(0, 15);
      const sampledLogical = [...logicalQs].sort(() => Math.random() - 0.5).slice(0, 15);

      quizSet = [
        ...sampledTech,
        ...sampledEnglish,
        ...sampledMarathi,
        ...sampledGk,
        ...sampledLogical
      ];

      if (quizSet.length < 100) {
        const remaining = questions.filter(q => !quizSet.some(sq => sq.id === q.id));
        quizSet = [...quizSet, ...remaining.sort(() => Math.random() - 0.5)].slice(0, 100);
      }

      title = 'सार्वजनिक आरोग्य विभाग - १०० प्रश्न भरती परीक्षा (200 Marks)';
      examMode = true;
    } else if (options.mode === 'core') {
      quizSet = questions.filter(q => q.id <= 15 || q.section === 'technical');
      title = 'क्ष-किरण तांत्रिकी मुख्य सराव संच (Technical Core Practice)';
    } else if (options.mode === 'category' && options.category) {
      quizSet = questions.filter(q => q.category === options.category);
      title = `${options.category} - Chapter Practice`;
    } else if (options.mode === 'saved' && options.questionIds) {
      quizSet = questions.filter(q => options.questionIds?.includes(q.id));
      title = 'Saved Questions Practice';
    } else if (options.mode === 'missed' && options.questionIds) {
      quizSet = questions.filter(q => options.questionIds?.includes(q.id));
      title = 'Missed Questions Practice';
    } else {
      quizSet = [...questions].sort(() => Math.random() - 0.5);
      title = 'Radiology Practice Mode';
      examMode = false;
    }

    if (quizSet.length === 0) quizSet = questions.slice(0, 15);

    setActiveQuizQuestions(quizSet);
    setActiveQuizTitle(title);
    setIsExamMode(examMode);
    setIsCentralQuiz(central);
    setInitialQuestionIndex(0);
    setQuizResult(null);
  };

  const handleFinishQuiz = (answers: Record<number, UserAnswer>, timeSpentSeconds: number) => {
    if (!activeQuizQuestions) return;

    let correctCount = 0;
    Object.values(answers).forEach(ans => {
      if (ans.isCorrect) correctCount++;
    });

    const newSession: QuizSession = {
      id: `session_${Date.now()}`,
      title: activeQuizTitle,
      mode: isExamMode ? 'exam' : 'practice',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      answers,
      score: Math.round((correctCount / activeQuizQuestions.length) * 100),
      totalQuestions: activeQuizQuestions.length,
      passed: (correctCount / activeQuizQuestions.length) >= 0.7,
    };

    const updatedSessions = saveQuizSession(newSession);
    setQuizSessions(updatedSessions);

    setQuizResult({
      questions: activeQuizQuestions,
      answers,
      timeSpentSeconds,
      sessionTitle: activeQuizTitle,
    });

    setActiveQuizQuestions(null);
  };

  const handleSelectQuestionDirect = (qId: number) => {
    const targetQuestion = questions.find(q => q.id === qId);
    if (targetQuestion) {
      setActiveQuizQuestions([targetQuestion]);
      setActiveQuizTitle(`Review Question #${qId}`);
      setIsExamMode(false);
      setInitialQuestionIndex(0);
      setQuizResult(null);
    }
  };

  const handleAddQuestion = (newQ: Question) => {
    saveCustomQuestion(newQ);
    setQuestions(getAllQuestions());
  };

  const handleAddMultipleQuestions = (newQs: Question[]) => {
    newQs.forEach(q => saveCustomQuestion(q));
    setQuestions(getAllQuestions());
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'quiz') {
            setActiveQuizQuestions(null);
            setQuizResult(null);
          }
        }}
        langMode={langMode}
        setLangMode={setLangMode}
        userProfile={userProfile}
        isUnlocked={isUnlocked}
        onOpenAuthModal={() => setShowAuthModal(true)}
        onOpenAdminPanel={() => setShowAdminPanel(true)}
        onOpenSearch={() => setShowSearchModal(true)}
        onLogout={handleLogout}
      />

      {/* Auto Scrolling Breaking News Bar */}
      <BreakingNewsTicker />

      {/* Device Mismatch Auto-Signout Notification Banner */}
      {deviceMismatchAlert && (
        <div className="bg-rose-600 text-white px-4 py-3 text-xs sm:text-sm font-bold flex items-center justify-between shadow-md animate-bounce">
          <div className="flex items-center gap-2 max-w-5xl mx-auto">
            <ShieldAlert className="w-5 h-5 text-amber-200 shrink-0" />
            <span>
              तुमचे खाते दुसऱ्या उपकरणावर (Device) लॉगिन झाले आहे! सुरक्षा कारणास्तव या डिव्हाइसवरून आपोआप लॉगआउट करण्यात आले आहे. (Single Device Limit Enforced)
            </span>
          </div>
          <button 
            onClick={() => setDeviceMismatchAlert(false)}
            className="bg-slate-950 text-rose-300 px-3 py-1 rounded-lg text-xs"
          >
            Dismiss
          </button>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-24">
        {/* VIEW ROUTER */}
        {quizResult ? (
          /* RESULT SUMMARY VIEW */
          <ResultSummary
            questions={quizResult.questions}
            answers={quizResult.answers}
            timeSpentSeconds={quizResult.timeSpentSeconds}
            sessionTitle={quizResult.sessionTitle}
            onRetakeQuiz={() => {
              setActiveQuizQuestions(quizResult.questions);
              setQuizResult(null);
            }}
            onRetakeMissedOnly={(missedIds) => handleStartQuiz({ mode: 'missed', questionIds: missedIds })}
            onNavigateHome={() => {
              setQuizResult(null);
              setActiveTab('home');
            }}
            onAskAITutor={(q) => setAiTutorQuestion(q)}
          />
        ) : activeQuizQuestions ? (
          /* ACTIVE QUIZ VIEW */
          <QuizView
            questions={activeQuizQuestions}
            title={activeQuizTitle}
            isExamMode={isExamMode}
            bookmarkedIds={bookmarkedIds}
            langMode={langMode}
            isUnlocked={isUnlocked}
            onToggleBookmark={handleToggleBookmark}
            onFinishQuiz={handleFinishQuiz}
            onAskAITutor={(q) => setAiTutorQuestion(q)}
            onExitQuiz={() => {
              setActiveQuizQuestions(null);
              setActiveTab('home');
            }}
            initialQuestionIndex={initialQuestionIndex}
            isCentral={isCentralQuiz}
          />
        ) : activeTab === 'home' || activeTab === 'dashboard' ? (
          /* HOME VIEW */
          <HomeView
            questions={questions}
            quizSessions={quizSessions}
            bookmarkedIds={bookmarkedIds}
            onStartQuiz={handleStartQuiz}
            onNavigateTab={setActiveTab}
            isUnlocked={isUnlocked}
          />
        ) : activeTab === 'chapters' || activeTab === 'categories' ? (
          /* CHAPTERS VIEW */
          <CategoryView
            questions={questions}
            quizSessions={quizSessions}
            bookmarkedIds={bookmarkedIds}
            selectedCategoryFilter={selectedCategoryFilter}
            onSelectCategoryFilter={setSelectedCategoryFilter}
            onStartQuizCategory={(cat) => handleStartQuiz({ mode: 'category', category: cat })}
            onAskAITutor={(q) => setAiTutorQuestion(q)}
            onGenerateCategoryQuestions={(cat) => setIsAddModalOpen(true)}
            onSelectQuestionDirect={handleSelectQuestionDirect}
            langMode={langMode}
            isUnlocked={isUnlocked}
          />
        ) : activeTab === 'mock-tests' || activeTab === 'quiz' ? (
          /* MOCK TESTS VIEW */
          <MockTestsView
            questions={questions}
            isUnlocked={isUnlocked}
            langMode={langMode}
            onStartQuiz={handleStartQuiz}
            onNavigateTab={setActiveTab}
          />
        ) : activeTab === 'premium' ? (
          /* PREMIUM VIEW */
          <PremiumView
            onSuccessUnlock={() => {
              setIsUnlocked(true);
              setPremiumUnlocked(true);
            }}
            onNavigateTab={setActiveTab}
          />
        ) : activeTab === 'profile' ? (
          /* PROFILE VIEW */
          <ProfileView
            userProfile={userProfile}
            isUnlocked={isUnlocked}
            quizSessions={quizSessions}
            bookmarkedCount={bookmarks.length}
            accuracyRate={accuracyRate}
            onLogout={handleLogout}
            onOpenAuthModal={() => setShowAuthModal(true)}
            onNavigateTab={setActiveTab}
            onOpenAdminPanel={() => setShowAdminPanel(true)}
          />
        ) : activeTab === 'bookmarks' ? (
          /* BOOKMARKS VIEW */
          <BookmarksView
            questions={questions}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onStartQuizSaved={(ids) => handleStartQuiz({ mode: 'saved', questionIds: ids })}
            onSelectQuestionDirect={handleSelectQuestionDirect}
          />
        ) : activeTab === 'flashcards' ? (
          /* FLASHCARDS VIEW */
          <FlashcardView
            questions={questions}
            confidenceRatings={confidenceRatings}
            onSetConfidence={handleSetConfidence}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onAskAITutor={(q) => setAiTutorQuestion(q)}
          />
        ) : activeTab === 'question-bank' ? (
          /* QUESTION BANK VIEW */
          <QuestionBankGenerator
            questions={questions}
            onAddMultipleQuestions={handleAddMultipleQuestions}
            onNavigateTab={setActiveTab}
            onAskAITutor={(q) => setAiTutorQuestion(q)}
            isUnlocked={isUnlocked}
            langMode={langMode}
          />
        ) : null}
      </main>

      {/* Bottom Navigation Bar */}
      {!activeQuizQuestions && !quizResult && (
        <BottomNav
          activeTab={activeTab === 'dashboard' ? 'home' : activeTab === 'categories' ? 'chapters' : activeTab === 'quiz' ? 'mock-tests' : activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setActiveQuizQuestions(null);
            setQuizResult(null);
          }}
          isUnlocked={isUnlocked}
        />
      )}

      {/* Global Search Modal */}
      {showSearchModal && (
        <GlobalSearchModal
          questions={questions}
          onClose={() => setShowSearchModal(false)}
          onSelectQuestion={handleSelectQuestionDirect}
          onSelectChapter={(cat) => handleSelectCategoryForChapters(cat)}
        />
      )}

      {/* AI TUTOR MODAL */}
      {aiTutorQuestion && (
        <AITutorModal
          question={aiTutorQuestion}
          onClose={() => setAiTutorQuestion(null)}
        />
      )}

      {/* ADD / GENERATE QUESTION MODAL */}
      {isAddModalOpen && (
        <AddQuestionModal
          onClose={() => setIsAddModalOpen(false)}
          onAddQuestion={handleAddQuestion}
          onAddMultipleQuestions={handleAddMultipleQuestions}
        />
      )}

      {/* SECURITY KEY / ACCESS CODE AUTH MODAL */}
      {showAuthModal && (
        <AuthModal
          isUnlocked={isUnlocked}
          userProfile={userProfile}
          initialPhoneNumber={authModalInitialPhone}
          initialAccessCode={authModalInitialAccessCode}
          onClose={() => {
            setShowAuthModal(false);
            setAuthModalInitialPhone('');
            setAuthModalInitialAccessCode('');
          }}
          onSuccessLogin={(user) => {
            setShowAuthModal(false);
            setAuthModalInitialPhone('');
            setAuthModalInitialAccessCode('');
            setFirebaseUser(user);
            setIsUnlocked(true);
            // Trigger a dynamic profile sync for the logged-in user
            const currentDeviceId = getDeviceId();
            registerUserDeviceAndLogin(user, currentDeviceId).then((profile) => {
              setUserProfile(profile);
            }).catch((err) => {
              console.warn('Failed to fetch user profile on login:', err);
            });
          }}
          onLogout={handleLogout}
        />
      )}

      {/* ADMIN CONTROL PANEL MODAL */}
      {showAdminPanel && (
        <AdminPanelModal
          onClose={() => setShowAdminPanel(false)}
        />
      )}
    </div>
  );
}
