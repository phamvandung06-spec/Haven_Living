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
    <section id="tien-do" className="py-20 bg-stone-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 uppercase mb-3">
            <span className="w-8 h-px bg-emerald-600"></span>
            <span>Thực Tế Công Trường & Hạ Tầng Hoàn Thiện</span>
            <span className="w-8 h-px bg-emerald-600"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif text-balance">
            Hình Ảnh Thực Tế Tại Dự Án Haven Living
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
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
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/90 bg-stone-900 aspect-16/10 cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
            >
              <SafeImage
                src={photo.url}
                alt={photo.title}
                fallbackTitle={photo.title}
                aspectRatioClass="aspect-16/10"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Zoom icon on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="p-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-xl backdrop-blur-xs transition-transform transform group-hover:scale-110">
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
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-950/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <Car className="w-4 h-4" />
            <span>Đăng Ký Xe Đưa Đón Tham Quan Thực Tế Miễn Phí</span>
          </button>
        </div>
      </div>
    </section>
  );
};
