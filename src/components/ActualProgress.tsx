import React from 'react';
import { Maximize2, Car } from 'lucide-react';
import { ACTUAL_PROGRESS_PHOTOS } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface ActualProgressProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const ActualProgress: React.FC<ActualProgressProps> = ({
  onOpenConsultModal,
  onOpenImageModal,
}) => {
  return (
    <section id="tien-do" className="py-20 text-[#212529] relative overflow-hidden">
      {/* Background Image: 2.jpg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/aistudio/2.jpg"
          alt="Geometric Background"
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#d59732] uppercase mb-3 bg-[#fdf6ea] px-4 py-1.5 rounded-full border border-[#d59732]/30 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#d59732]"></span>
            <span>Thực Tế Công Trường & Hạ Tầng Hoàn Thiện</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#054062] tracking-tight font-serif text-balance">
            Hình Ảnh Thực Tế Tại Khu Đô Thị ARA
          </h2>
          <p className="mt-4 text-[#595959] text-sm sm:text-base leading-relaxed text-balance">
            Hạ tầng kỹ thuật điện âm, đường nhựa nội bộ 12m – 22m, vỉa hè lát đá và hệ thống chiếu sáng đô thị
            đã hiện hữu 100%, sẵn sàng bàn giao và đưa vào sử dụng.
          </p>
        </div>

        {/* Real photo grid - only images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ACTUAL_PROGRESS_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onOpenImageModal(photo.url, photo.title, photo.desc)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 bg-stone-900 aspect-16/10 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d59732]"
            >
              <SafeImage
                src={photo.url}
                alt={photo.title}
                fallbackTitle={photo.title}
                aspectRatioClass="aspect-16/10"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Zoom icon on hover */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="p-3.5 rounded-full bg-[#d59732] hover:bg-[#efa937] text-white shadow-xl backdrop-blur-xs transition-transform transform group-hover:scale-110">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Free Tour CTA */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onOpenConsultModal}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] hover:brightness-110 text-white rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#d59732]/30 hover:-translate-y-0.5 cursor-pointer"
          >
            <Car className="w-4 h-4" />
            <span>Đăng Ký Xe Đưa Đón Tham Quan Thực Tế Miễn Phí</span>
          </button>
        </div>
      </div>
    </section>
  );
};
