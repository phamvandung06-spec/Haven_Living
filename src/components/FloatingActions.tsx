import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
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
          className="group flex items-center gap-2.5 bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] hover:brightness-110 text-white pl-4 pr-3 py-2.5 rounded-full shadow-xl shadow-[#d59732]/35 transition-all hover:scale-105 border border-white/30"
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
          className="flex items-center gap-2.5 bg-[#054062] hover:bg-[#002f52] text-white px-4 py-2.5 rounded-full shadow-xl shadow-slate-900/30 transition-all hover:scale-105 text-xs font-bold border border-[#d59732]/40"
          title="Chat qua Zalo"
        >
          <MessageCircle className="w-4 h-4 text-[#f9df7b]" />
          <span>Chat Zalo</span>
        </a>

        {/* Back To Top */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#054062] text-white hover:bg-[#d59732] flex items-center justify-center shadow-lg transition-all border border-white/20 cursor-pointer"
            title="Cuộn lên đầu"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Sticky Bottom Bar (Complies with 15% Mobile Sticky Cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#002f52]/95 border-t border-[#054062] backdrop-blur-md px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] text-white rounded-full text-xs font-bold shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 animate-pulse" />
          <span>Hotline: {PROJECT_DETAILS.hotlineDisplay}</span>
        </a>

        <a
          href={PROJECT_DETAILS.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#054062] text-white border border-[#d59732]/40 rounded-full text-xs font-bold shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#f9df7b]" />
          <span>Chat Zalo</span>
        </a>
      </div>
    </>
  );
};
