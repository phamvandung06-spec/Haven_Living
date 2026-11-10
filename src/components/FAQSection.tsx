import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FAQ_LIST } from '../data/projectData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 text-[#212529] border-t border-slate-200 relative overflow-hidden">
      {/* Background Image: 2.jpg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/aistudio/2.jpg"
          alt="Geometric Background"
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#d59732] uppercase mb-2 bg-[#fdf6ea] px-4 py-1.5 rounded-full border border-[#d59732]/30 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#d59732]" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#054062] font-serif">
            Câu Hỏi Thường Gặp Về Khu Đô Thị ARA
          </h3>
          <p className="text-xs sm:text-sm text-[#595959] mt-2">
            Những thông tin cốt lõi khách hàng thường quan tâm trước khi quyết định đầu tư
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all ${
                  isOpen ? 'border-[#054062] shadow-md' : 'border-slate-200 hover:border-[#d59732]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-[#212529] hover:text-[#054062] transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#d59732]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#595959] leading-relaxed border-t border-slate-100 pt-3">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
