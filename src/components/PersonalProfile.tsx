import React from 'react';
import {
  Phone,
  MessageCircle,
  Award,
  Target,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface PersonalProfileProps {
  onOpenConsultModal: () => void;
}

export const PersonalProfile: React.FC<PersonalProfileProps> = ({ onOpenConsultModal }) => {
  return (
    <section id="chuyen-gia" className="pt-28 pb-16 bg-gradient-to-b from-stone-900 via-emerald-950 to-stone-900 text-white relative overflow-hidden border-b border-emerald-800/40">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Part 1: Executive Personal Brand Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Portrait Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer decorative halo border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-400 via-emerald-500 to-teal-300 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-stone-900 border-2 border-emerald-500/30 shadow-2xl">
                <img
                  src="/assets/aistudio/XH2F0863_97b3d1f6.jpg"
                  alt="Phạm Văn Dũng - Phó Phòng Kinh Doanh Địa Ốc Á Châu"
                  className="w-full h-auto max-h-[520px] object-cover object-top filter brightness-105 contrast-102 transition-transform duration-700 group-hover:scale-102"
                />

                {/* Bottom glass badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-stone-950/85 backdrop-blur-md rounded-2xl border border-emerald-500/30 flex items-center justify-between shadow-xl">
                  <div>
                    <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Chuyên Gia Tư Vấn Thực Chiến</span>
                    </div>
                    <p className="text-xs text-stone-300 font-medium">Bất động sản Bình Dương & Vùng ven</p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-600/90 text-white flex items-center justify-center shrink-0 shadow-md">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info & Philosophy Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-300 bg-emerald-900/60 px-3.5 py-1.5 rounded-full w-fit border border-emerald-500/40 backdrop-blur-sm shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="uppercase">Hồ Sơ Chuyên Gia Đồng Hành Cùng Bạn</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                PHẠM VĂN DŨNG
              </h1>
              <p className="text-base sm:text-lg text-amber-400 font-semibold mt-2 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-amber-400"></span>
                <span>Phó Phòng Kinh Doanh – Địa ốc Á Châu</span>
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-900/50 via-stone-900/80 to-emerald-950/60 border border-emerald-600/40 shadow-xl backdrop-blur-md">
              <Quote className="w-10 h-10 text-emerald-400/30 absolute top-4 right-4" />
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                Triết Lý Kinh Doanh
              </p>
              <blockquote className="text-base sm:text-lg md:text-xl font-medium text-stone-100 italic leading-relaxed">
                “Thành công trong kinh doanh là sự kết hợp giữa đam mê và sự kiên trì không ngừng nghỉ.”
              </blockquote>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-950/30 transition-all hover:scale-103"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Gọi Trực Tiếp: {PROJECT_DETAILS.hotlineDisplay}</span>
              </a>

              <a
                href={PROJECT_DETAILS.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all hover:scale-103"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Zalo</span>
              </a>

              <button
                type="button"
                onClick={onOpenConsultModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-700/80 hover:bg-emerald-600 text-emerald-100 border border-emerald-500/50 transition-all hover:scale-103 cursor-pointer"
              >
                <span>Nhận Tư Vấn Trực Tiếp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Part 2: LĨNH VỰC CHUYÊN MÔN Section */}
        <div className="pt-10 border-t border-emerald-800/40">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
              <Target className="w-4 h-4" />
              <span>Năng Lực & Giá Trị Cốt Lõi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
              LĨNH VỰC CHUYÊN MÔN
            </h2>
            <p className="mt-2 text-emerald-200/90 text-sm sm:text-base font-medium">
              Chuyên gia tư vấn đầu tư & Marketing bất động sản Bình Dương
            </p>
          </div>

          {/* 3 Clean, Highly Legible Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Chuyên môn */}
            <div className="bg-stone-900/90 rounded-2xl p-6 sm:p-7 border border-emerald-700/50 shadow-lg hover:border-emerald-400 hover:bg-emerald-950/60 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  Chuyên Môn
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Tư vấn đầu tư, an cư; triển khai Marketing thực chiến; quản trị và đào tạo đội ngũ kinh doanh.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Giải pháp toàn diện & chuyên sâu</span>
              </div>
            </div>

            {/* Card 2: Thành tựu */}
            <div className="bg-stone-900/90 rounded-2xl p-6 sm:p-7 border border-amber-600/40 shadow-lg hover:border-amber-400 hover:bg-stone-900/95 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-900/50 border border-amber-500/40 text-amber-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  Thành Tựu
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  5 năm kinh nghiệm, đồng hành cùng hơn 230 khách hàng, phân phối thành công 15 dự án cùng Địa ốc Á Châu.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-800/80 flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>5 năm · 230+ khách hàng · 15 dự án</span>
              </div>
            </div>

            {/* Card 3: Cam kết */}
            <div className="bg-stone-900/90 rounded-2xl p-6 sm:p-7 border border-emerald-700/50 shadow-lg hover:border-emerald-400 hover:bg-emerald-950/60 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  Cam Kết
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Minh bạch thông tin, tối ưu giải pháp tài chính và đồng hành cùng khách hàng trong suốt hành trình sở hữu, đầu tư và gia tăng giá trị bất động sản.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Minh bạch · Tối ưu · Đồng hành trọn đời</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
