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
    <section id="chuyen-gia" className="text-white relative overflow-hidden">
      {/* ========================================================
          PHẦN 1: HỒ SƠ CHUYÊN GIA
          Nền ảnh nền 2 (n_n_2_6f97e9f5.jpg) & Chân dung tách nền không khung
      ======================================================== */}
      <div className="relative pt-28 pb-16 overflow-hidden border-b border-[#054062] text-stone-200">
        {/* Background Image: nen_2.jpg */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/aistudio/nen_2.jpg"
            alt="Royal Blue Abstract Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#001730]/40 backdrop-blur-[0.5px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Executive Personal Brand Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Cutout Portrait Column - Bỏ khung hình chữ nhật, người đàn ông tách nền đứng tự nhiên */}
            <div className="lg:col-span-5 flex justify-center items-end relative">
              <div className="relative group max-w-sm sm:max-w-md w-full flex justify-center">
                {/* Subtle warm backlight glow behind cutout figure */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-tr from-[#d59732]/25 via-[#0059b3]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

                {/* Tách nền người đàn ông - Không còn khung chữ nhật */}
                <div className="relative z-10 w-full flex justify-center">
                  <img
                    src="/assets/aistudio/dung_cutout_clean.png"
                    alt="Phạm Văn Dũng - Phó Phòng Kinh Doanh Khu đô thị ARA"
                    className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-102 transition-transform duration-500"
                  />

                  {/* Floating glass credential badge */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:left-2 sm:translate-x-0 bg-[#002847]/95 backdrop-blur-md border border-[#d59732]/50 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 whitespace-nowrap z-20">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#d59732] to-[#efa937] text-white flex items-center justify-center shrink-0 shadow-md">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#f9df7b] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#d59732]" />
                        <span>Chuyên Gia Tư Vấn Thực Chiến</span>
                      </div>
                      <p className="text-[11px] text-stone-200 font-medium">Bất động sản Bình Dương & Vùng ven</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info & Philosophy Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f9df7b] bg-[#002847]/90 px-4 py-1.5 rounded-full w-fit border border-[#d59732]/50 backdrop-blur-sm shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#d59732] animate-pulse"></span>
                <span className="uppercase">Hồ Sơ Chuyên Gia Đồng Hành Cùng Bạn</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                  PHẠM VĂN DŨNG
                </h1>
                <p className="text-base sm:text-lg text-[#f9df7b] font-semibold mt-2 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-[#d59732]"></span>
                  <span>Phó Phòng Kinh Doanh – Khu đô thị ARA</span>
                </p>
              </div>

              {/* Philosophy Card */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-[#002847]/85 border border-[#d59732]/40 shadow-2xl backdrop-blur-md">
                <Quote className="w-10 h-10 text-[#d59732]/30 absolute top-4 right-4" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#d59732] mb-2">
                  Triết Lý Kinh Doanh
                </p>
                <blockquote className="text-base sm:text-lg md:text-xl font-medium text-stone-100 italic leading-relaxed">
                  “Thành công trong kinh doanh là sự kết hợp giữa đam mê và sự kiên trì không ngừng nghỉ.”
                </blockquote>
              </div>

              {/* Credibility Key Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#002847]/70 border border-[#0d558a]/60 rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#f9df7b] font-serif">5+</div>
                  <div className="text-[11px] text-stone-300 font-medium mt-0.5">Năm Kinh Nghiệm</div>
                </div>
                <div className="bg-[#002847]/70 border border-[#0d558a]/60 rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#f9df7b] font-serif">230+</div>
                  <div className="text-[11px] text-stone-300 font-medium mt-0.5">Khách Hàng Đồng Hành</div>
                </div>
                <div className="bg-[#002847]/70 border border-[#0d558a]/60 rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#f9df7b] font-serif">15+</div>
                  <div className="text-[11px] text-stone-300 font-medium mt-0.5">Dự Án Phân Phối</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] text-white shadow-lg shadow-[#d59732]/30 transition-all hover:brightness-110 hover:scale-102"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Gọi Trực Tiếp: {PROJECT_DETAILS.hotlineDisplay}</span>
                </a>

                <a
                  href={PROJECT_DETAILS.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#002847] hover:bg-[#003866] text-white border border-[#d59732]/50 shadow-md transition-all hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4 text-[#f9df7b]" />
                  <span>Chat Zalo</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenConsultModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all hover:scale-102 cursor-pointer shadow-md"
                >
                  <span>Nhận Tư Vấn Trực Tiếp</span>
                  <ArrowRight className="w-4 h-4 text-[#f9df7b]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          PHẦN 2: LĨNH VỰC CHUYÊN MÔN
          Nền ảnh nền 2 (n_n_2_6f97e9f5.jpg)
      ======================================================== */}
      <div id="linh-vuc-chuyen-mon" className="relative py-20 text-stone-200 overflow-hidden border-b border-[#054062]">
        {/* Background Image: nen_2.jpg */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/aistudio/nen_2.jpg"
            alt="Royal Blue Abstract Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#001730]/40 backdrop-blur-[0.5px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f9df7b] bg-[#002847]/80 px-4 py-1.5 rounded-full uppercase mb-3 border border-[#d59732]/40 backdrop-blur-sm shadow-xs">
              <Target className="w-4 h-4 text-[#d59732]" />
              <span>Năng Lực & Giá Trị Cốt Lõi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif tracking-tight">
              LĨNH VỰC CHUYÊN MÔN
            </h2>
            <p className="mt-2 text-stone-200 text-sm sm:text-base font-medium">
              Chuyên gia tư vấn đầu tư & Marketing bất động sản Bình Dương
            </p>
          </div>

          {/* 3 Clean, Highly Legible Cards with Glass Navy Surface */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Chuyên môn */}
            <div className="bg-[#002847]/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#0d558a] shadow-xl hover:border-[#d59732] hover:bg-[#003866]/90 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#001730] border border-[#d59732]/40 text-[#f9df7b] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  <Target className="w-6 h-6 text-[#d59732]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#f9df7b] transition-colors">
                  Chuyên Môn
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Tư vấn đầu tư, an cư; triển khai Marketing thực chiến; quản trị và đào tạo đội ngũ kinh doanh.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-[#f9df7b]">
                <CheckCircle2 className="w-4 h-4 text-[#d59732] shrink-0" />
                <span>Giải pháp toàn diện & chuyên sâu</span>
              </div>
            </div>

            {/* Card 2: Thành tựu */}
            <div className="bg-[#002847]/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#0d558a] shadow-xl hover:border-[#d59732] hover:bg-[#003866]/90 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#001730] border border-[#d59732]/40 text-[#f9df7b] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  <Award className="w-6 h-6 text-[#d59732]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#f9df7b] transition-colors">
                  Thành Tựu
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  5 năm kinh nghiệm, đồng hành cùng hơn 230 khách hàng, phân phối thành công 15 dự án cùng Địa ốc Á Châu.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-[#f9df7b]">
                <CheckCircle2 className="w-4 h-4 text-[#d59732] shrink-0" />
                <span>5 năm · 230+ khách hàng · 15 dự án</span>
              </div>
            </div>

            {/* Card 3: Cam kết */}
            <div className="bg-[#002847]/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#0d558a] shadow-xl hover:border-[#d59732] hover:bg-[#003866]/90 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#001730] border border-[#d59732]/40 text-[#f9df7b] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  <ShieldCheck className="w-6 h-6 text-[#d59732]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#f9df7b] transition-colors">
                  Cam Kết
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Minh bạch thông tin, tối ưu giải pháp tài chính và đồng hành cùng khách hàng trong suốt hành trình sở hữu, đầu tư và gia tăng giá trị bất động sản.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-[#f9df7b]">
                <CheckCircle2 className="w-4 h-4 text-[#d59732] shrink-0" />
                <span>Minh bạch · Tối ưu · Đồng hành trọn đời</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
