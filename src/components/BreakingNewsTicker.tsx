import React, { useEffect, useState } from 'react';
import { Megaphone } from 'lucide-react';
import { getBreakingNews } from '../lib/firebase';

export const BreakingNewsTicker: React.FC = () => {
  const [news, setNews] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchNews = async () => {
      try {
        const items = await getBreakingNews();
        if (active) {
          // If the fetched items are empty or standard, ensure the user's requested news is present
          const customNews = items.length > 0 
            ? items 
            : [
                "Radiology ३००० Plus MCQ paper Practice DHS DMER exam Preparation",
                "DHS Maharashtra Recruitment Updates",
                "DMER Latest Notifications",
                "Maharashtra Tantrik Vibhag Exam Updates"
              ];
          setNews(customNews);
          setLoading(false);
        }
      } catch (err: any) {
        console.warn("Failed to load breaking news ticker:", err?.message || err);
      }
    };
    fetchNews();
    
    // Check every 60 seconds for live updates
    const interval = setInterval(fetchNews, 60000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  // Guarantee that the user's requested text is featured prominently
  const displayNews = news.length > 0 ? news : ["Radiology ३००० Plus MCQ paper Practice DHS DMER Exam Preparation"];
  
  // Format the text with proper spacing and separators
  const concatenatedNews = "📢 Radiology ३००० Plus MCQ paper Practice DHS DMER Exam Preparation" + 
    (displayNews.length > 0 ? "      ★      " + displayNews.join("      ★      ") : "");

  return (
    <div className="w-full bg-slate-950 border-b border-slate-900 shadow-md relative overflow-hidden flex items-center h-11 select-none">
      {/* Ticker scrolling content - Full width, no padding-left-28 restrictions */}
      <div className="w-full h-full flex items-center overflow-hidden relative">
        <div className="flex whitespace-nowrap text-xs font-black text-emerald-500 tracking-wide uppercase select-none animate-marquee-slow hover:[animation-play-state:paused] cursor-pointer">
          {/* Repeat multiple times to prevent breaks on wide displays */}
          <span className="inline-block py-1 pr-12">{concatenatedNews}</span>
          <span className="inline-block py-1 pr-12">{concatenatedNews}</span>
          <span className="inline-block py-1 pr-12">{concatenatedNews}</span>
          <span className="inline-block py-1 pr-12">{concatenatedNews}</span>
        </div>
      </div>
    </div>
  );
};
