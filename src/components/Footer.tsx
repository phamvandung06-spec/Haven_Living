import React from 'react';
import { Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#002f52] text-stone-200 border-t border-[#054062] pt-16 pb-12 overflow-hidden">
      {/* Real estate photography backdrop with soft opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://diaocachau.com.vn/media/photo/o42-714050.jpg"
          alt="Khu Đô Thị ARA Real Estate Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 filter grayscale-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002f52] via-[#002f52]/90 to-[#002f52]/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Project Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Logo_Ara_5db23274.png"
                alt="Logo Khu Đô Thị ARA"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
              />
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-md">
              Khu đô thị sinh thái kiểu mẫu quy mô 19,3 ha tại TP. Hồ Chí Minh,
              kiến tạo môi trường sống trong lành, văn minh cùng hệ sinh thái tiện ích trọn vẹn và tiềm năng tăng trưởng vượt bậc.
            </p>

            <div className="pt-2 text-xs text-stone-300 space-y-2">
              <p>
                <strong className="text-white">Chủ đầu tư:</strong> {PROJECT_DETAILS.developer}
              </p>
              <p>
                <strong className="text-white">Tên quy hoạch:</strong> {PROJECT_DETAILS.legalName}
              </p>
              <p>
                <strong className="text-white">Pháp lý:</strong> Hoàn thiện minh bạch, sổ hồng lâu dài
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f9df7b]">
              Liên Kết Dự Án
            </h4>
            <ul className="text-xs sm:text-sm space-y-2.5 text-stone-300">
              <li>
                <a href="#tong-quan" className="hover:text-[#f9df7b] transition-colors">
                  Tổng quan quy mô 19,3 ha
                </a>
              </li>
              <li>
                <a href="#vi-tri" className="hover:text-[#f9df7b] transition-colors">
                  Vị trí kết nối ĐT741 & Vành Đai 4
                </a>
              </li>
              <li>
                <a href="#tien-ich" className="hover:text-[#f9df7b] transition-colors">
                  Hệ sinh thái tiện ích xanh
                </a>
              </li>
              <li>
                <a href="#mat-bang" className="hover:text-[#f9df7b] transition-colors">
                  Mặt bằng quy hoạch Khu Đô Thị ARA
                </a>
              </li>
              <li>
                <a href="#chinh-sach" className="hover:text-[#f9df7b] transition-colors">
                  Chính sách ưu đãi & gói vay 8%
                </a>
              </li>
              <li>
                <a href="#tien-do" className="hover:text-[#f9df7b] transition-colors">
                  Hình ảnh thực tế hạ tầng điện âm
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f9df7b]">
              Liên Hệ Ban Quản Lý
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d59732] shrink-0 mt-0.5" />
                <span>TP. Hồ Chí Minh (Liền kề VSIP 2 & Vành Đai 4)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d59732] shrink-0" />
                <span>
                  Hotline tư vấn:{' '}
                  <a
                    href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                    className="font-bold text-[#f9df7b] hover:text-[#efa937] hover:underline"
                  >
                    {PROJECT_DETAILS.hotlineDisplay}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#d59732] shrink-0" />
                <span>Tiếp đón tham quan sa bàn & thực tế dự án (8:00 - 18:00)</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#dang-ky"
                className="inline-block py-3 px-6 bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] hover:brightness-110 text-white rounded-full text-xs font-bold transition-all text-center shadow-lg shadow-[#d59732]/30"
              >
                Đăng Ký Nhận Bảng Giá Chính Thức
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Khu Đô Thị ARA. Tất cả các quyền được bảo lưu.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-300 hover:text-[#f9df7b] transition-colors cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d59732]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
