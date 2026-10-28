import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, FileText } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface FloatingActionsProps {
  onOpenConsultModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Action Stack (Right Edge) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3 items-end pointer-events-auto">
        {/* Call Hotline */}
        <a
          href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-3 py-2.5 rounded-full shadow-xl shadow-emerald-950/40 transition-all hover:scale-105"
          title="Gọi Hotline tư vấn"
        >
          <span className="text-xs font-bold tracking-wide">
            Hotline: {PROJECT_DETAILS.hotlineDisplay}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
        </a>

        {/* Zalo Direct Chat */}
        <a
          href={PROJECT_DETAILS.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-full shadow-xl shadow-blue-950/40 transition-all hover:scale-105 text-xs font-bold"
          title="Chat qua Zalo"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat Zalo</span>
        </a>

        {/* Request Brochure Modal */}
        <button
          type="button"
          onClick={onOpenConsultModal}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-full shadow-xl shadow-amber-950/40 transition-all hover:scale-105 text-xs font-bold cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Nhận Báo Giá</span>
        </button>

        {/* Back To Top */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-stone-900/90 text-stone-200 hover:text-white hover:bg-emerald-700 flex items-center justify-center shadow-lg transition-all border border-stone-700 cursor-pointer"
            title="Cuộn lên đầu"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Sticky Bottom Bar (Complies with 15% Mobile Sticky Cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-stone-950/95 border-t border-emerald-900/60 backdrop-blur-md px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Gọi {PROJECT_DETAILS.hotlineDisplay}</span>
        </a>

        <a
          href={PROJECT_DETAILS.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Chat Zalo</span>
        </a>

        <button
          type="button"
          onClick={onOpenConsultModal}
          className="flex-1 flex items-center justify-center gap-1 py-2.5 bg-amber-400 text-slate-950 rounded-xl text-xs font-extrabold shadow-sm"
        >
          <span>Báo Giá</span>
        </button>
      </div>
    </>
  );
};
