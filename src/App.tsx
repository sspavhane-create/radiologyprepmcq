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
  getIsPremiumUnlocked
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
import { Dashboard } from './components/Dashboard';
import { QuizView } from './components/QuizView';
import { FlashcardView } from './components/FlashcardView';
import { CategoryView } from './components/CategoryView';
import { BookmarksView } from './components/BookmarksView';
import { ResultSummary } from './components/ResultSummary';
import { AITutorModal } from './components/AITutorModal';
import { AddQuestionModal } from './components/AddQuestionModal';
import { QuestionBankGenerator } from './components/QuestionBankGenerator';
import { AuthModal } from './components/AuthModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { ShieldAlert, LogOut, Smartphone, Download } from 'lucide-react';

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizSessions, setQuizSessions] = useState<QuizSession[]>([]);
  const [bookmarks, setBookmarks] = useState<QuestionBookmark[]>([]);
  const [confidenceRatings, setConfidenceRatings] = useState<Record<number, 'again' | 'hard' | 'good' | 'easy'>>({});
  const [langMode, setLangMode] = useState<LanguageMode>('dual');
  
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  // Firebase Auth & Firestore Profile State
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  // Modals & Device Alert State
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);
  const [deviceMismatchAlert, setDeviceMismatchAlert] = useState<boolean>(false);

  const handleSelectCategoryForChapters = (catName: string) => {
    setSelectedCategoryFilter(catName);
    setActiveTab('categories');
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

  // Firebase Auth Listener & Firestore Device Session Monitor
  useEffect(() => {
    let unsubscribeSnapshot: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      // Clear previous snapshot listener if any
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
        unsubscribeSnapshot = null;
      }

      setFirebaseUser(user);
      if (user) {
        const currentDeviceId = getDeviceId();
        
        try {
          // Fetch or create user profile in Firestore
          const profile = await registerUserDeviceAndLogin(user, currentDeviceId);
          setUserProfile(profile);
          setIsUnlocked(profile.isPremium);

          // Listen to Firestore real-time profile changes for single device enforcement
          unsubscribeSnapshot = subscribeToDeviceSession(
            user.uid,
            currentDeviceId,
            () => {
              // Device mismatch detected! Logout user immediately.
              setDeviceMismatchAlert(true);
              signOut(auth);
              setFirebaseUser(null);
              setUserProfile(null);
              setIsUnlocked(false);
            },
            (updatedProfile) => {
              setUserProfile(updatedProfile);
              // Firestore is the sole source of truth for premium status!
              setIsUnlocked(updatedProfile.isPremium);
            }
          );
        } catch (err) {
          console.error('Error in auth state change processing:', err);
        }
      } else {
        setUserProfile(null);
        // Fallback to local storage if not authenticated
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

      // If dataset has fewer than 100 questions, fill with remaining
      if (quizSet.length < 100) {
        const remaining = questions.filter(q => !quizSet.some(sq => sq.id === q.id));
        quizSet = [...quizSet, ...remaining.sort(() => Math.random() - 0.5)].slice(0, 100);
      }

      title = 'सार्वजनिक आरोग्य विभाग - १०० प्रश्न भरती परीक्षा (200 Marks)';
      examMode = true;
    } else if (options.mode === 'core') {
      quizSet = questions.filter(q => q.id <= 6 || q.section === 'technical');
      title = 'क्ष-किरण तांत्रिकी मुख्य सराव संच (Technical Core Set)';
    } else if (options.mode === 'category' && options.category) {
      quizSet = questions.filter(q => q.category === options.category);
      title = `${options.category} - सराव परीक्षा`;
    } else if (options.mode === 'saved' && options.questionIds) {
      quizSet = questions.filter(q => options.questionIds?.includes(q.id));
      title = 'जतन केलेले प्रश्न सराव (Saved Questions Practice)';
    } else if (options.mode === 'missed' && options.questionIds) {
      quizSet = questions.filter(q => options.questionIds?.includes(q.id));
      title = 'चुकलेल्या प्रश्नांचा पुनर्अभ्यास (Missed Questions Review)';
    } else {
      quizSet = [...questions].sort(() => Math.random() - 0.5);
      title = 'सार्वजनिक आरोग्य विभाग - सराव चाचणी (Practice Mode)';
      examMode = false;
    }

    if (quizSet.length === 0) quizSet = questions.slice(0, 10);

    setActiveQuizQuestions(quizSet);
    setActiveQuizTitle(title);
    setIsExamMode(examMode);
    setIsCentralQuiz(central);
    setInitialQuestionIndex(0);
    setQuizResult(null);
    setActiveTab('quiz');
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
      setActiveQuizTitle(`प्रश्न क्र. #${qId} सराव (Review Question #${qId})`);
      setIsExamMode(false);
      setInitialQuestionIndex(0);
      setQuizResult(null);
      setActiveTab('quiz');
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
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
        totalQuestionsCount={questions.length}
        bookmarkedCount={bookmarks.length}
        accuracyRate={accuracyRate}
        streakDays={quizSessions.length > 0 ? Math.min(quizSessions.length, 7) : 1}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        userProfile={userProfile}
        isUnlocked={isUnlocked}
        onOpenAuthModal={() => setShowAuthModal(true)}
        onOpenAdminPanel={() => setShowAdminPanel(true)}
        onLogout={handleLogout}
      />

      {/* Device Mismatch Auto-Signout Notification Banner */}
      {deviceMismatchAlert && (
        <div className="bg-rose-900 border-b border-rose-500 text-rose-100 px-4 py-3 text-xs sm:text-sm font-bold flex items-center justify-between shadow-xl animate-bounce">
          <div className="flex items-center gap-2 max-w-5xl mx-auto">
            <ShieldAlert className="w-5 h-5 text-amber-300 shrink-0" />
            <span>
              तुमचे खाते दुसऱ्या उपकरणावर (Device) लॉगिन झाले आहे! सुरक्षा कारणास्तव या डिव्हाइसवरून आपोआप लॉगआउट करण्यात आले आहे. (Single Device Limit Enforced)
            </span>
          </div>
          <button 
            onClick={() => setDeviceMismatchAlert(false)}
            className="bg-slate-950 hover:bg-slate-900 text-rose-300 px-3 py-1 rounded-lg text-xs"
          >
            समजले (Dismiss)
          </button>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
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
              setActiveTab('dashboard');
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
            onToggleBookmark={handleToggleBookmark}
            onFinishQuiz={handleFinishQuiz}
            onAskAITutor={(q) => setAiTutorQuestion(q)}
            onExitQuiz={() => {
              setActiveQuizQuestions(null);
              setActiveTab('dashboard');
            }}
            initialQuestionIndex={initialQuestionIndex}
            isCentral={isCentralQuiz}
          />
        ) : activeTab === 'dashboard' ? (
          /* DASHBOARD VIEW */
          <Dashboard
            questions={questions}
            quizSessions={quizSessions}
            bookmarkedIds={bookmarkedIds}
            langMode={langMode}
            onStartQuiz={handleStartQuiz}
            onNavigateTab={setActiveTab}
            onSelectQuestionDirect={handleSelectQuestionDirect}
            onSelectCategoryForChapters={handleSelectCategoryForChapters}
          />
        ) : activeTab === 'quiz' ? (
          /* DEFAULT QUIZ LAUNCHER PAGE */
          <div className="max-w-2xl mx-auto text-center py-12 space-y-6">
            <h2 className="text-2xl font-bold text-white">परीक्षा प्रकार निवडा (Select Practice Quiz Mode)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleStartQuiz({ mode: 'core' })}
                className="p-6 bg-slate-900 border border-slate-800 hover:border-teal-400 rounded-2xl text-left space-y-2 transition-all group"
              >
                <div className="text-xs font-bold text-teal-400">तांत्रिक विषय (80 Marks)</div>
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300">क्ष-किरण तांत्रिक प्रश्नसंच</h3>
                <p className="text-xs text-slate-400">ASRT, Radiography Positioning, Contrast Media व Radiation Safety चा सराव.</p>
              </button>

              <button
                onClick={() => handleStartQuiz({ mode: 'exam' })}
                className="p-6 bg-slate-900 border border-slate-800 hover:border-teal-400 rounded-2xl text-left space-y-2 transition-all group"
              >
                <div className="text-xs font-bold text-cyan-400">पूर्ण परीक्षा (200 Marks)</div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300">सार्वजनिक आरोग्य विभाग भरती परीक्षा</h3>
                <p className="text-xs text-slate-400">१०० प्रश्न (तांत्रिक ८0 + बिगर तांत्रिक १२० गुण) २ तास वेळ.</p>
              </button>
            </div>
          </div>
        ) : activeTab === 'categories' ? (
          /* CATEGORIES VIEW */
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
          />
        ) : activeTab === 'question-bank' ? (
          /* QUESTION BANK & GENERATOR ENGINE VIEW */
          <QuestionBankGenerator
            questions={questions}
            onAddMultipleQuestions={handleAddMultipleQuestions}
            onNavigateTab={setActiveTab}
            onAskAITutor={(q) => setAiTutorQuestion(q)}
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
        ) : activeTab === 'bookmarks' ? (
          /* BOOKMARKS VIEW */
          <BookmarksView
            questions={questions}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onStartQuizSaved={(ids) => handleStartQuiz({ mode: 'saved', questionIds: ids })}
            onSelectQuestionDirect={handleSelectQuestionDirect}
          />
        ) : null}
      </main>

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

      {/* MOBILE OTP AUTH MODAL */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccessLogin={() => {
            setShowAuthModal(false);
          }}
        />
      )}

      {/* ADMIN CONTROL PANEL MODAL */}
      {showAdminPanel && (
        <AdminPanelModal
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {/* FLOATING DOWNLOAD APP BUTTON */}
      {!quizResult && !activeQuizQuestions && activeTab === 'dashboard' && (
        <a
          href="https://github.com/sspavhane-create/radiologyprepmcq/releases/latest/download/Radiology_Prep_MCQ.apk"
          download="Radiology_Prep_MCQ.apk"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 z-50 flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full shadow-2xl shadow-blue-500/40 border border-blue-400/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-extrabold whitespace-nowrap group text-sm sm:text-base tracking-wide"
        >
          <Smartphone className="w-5 h-5 text-blue-100 animate-bounce" />
          <span>📱 Download Android App</span>
          <Download className="w-5 h-5 text-blue-100 group-hover:translate-y-0.5 transition-transform" />
        </a>
      )}
    </div>
  );
}

