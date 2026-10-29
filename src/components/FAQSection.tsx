import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FAQ_LIST } from '../data/projectData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-stone-50 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
            Câu Hỏi Thường Gặp Về Khu Đô Thị ARA
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Những thông tin cốt lõi khách hàng thường quan tâm trước khi quyết định đầu tư
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
