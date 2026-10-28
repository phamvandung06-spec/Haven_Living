import React from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import { MAP_IMAGES } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface MasterPlanProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const MasterPlan: React.FC<MasterPlanProps> = ({ onOpenConsultModal, onOpenImageModal }) => {
  return (
    <section id="mat-bang" className="py-20 bg-emerald-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3">
            <span className="w-8 h-px bg-emerald-400"></span>
            <span>Mặt Bằng & Thiết Kế Kiến Trúc</span>
            <span className="w-8 h-px bg-emerald-400"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif text-balance">
            Mặt Bằng Tổng Thể Haven Living
          </h2>
          <p className="mt-4 text-emerald-200/80 text-sm sm:text-base leading-relaxed text-balance">
            Quy hoạch 19,3 ha với 1.305 sản phẩm thông thoáng, hạ tầng giao thông 12m – 22m kết nối bàn cờ.
            Không gian sống cân bằng tuyệt đối giữa mật độ xây dựng và mảng xanh thiên nhiên.
          </p>
        </div>

        {/* Master Plan Map Card */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/60 bg-stone-900 group">
          <div className="relative">
            <SafeImage
              src={MAP_IMAGES.masterPlan}
              alt="Mặt bằng phân lô quy hoạch Khu Đô Thị Haven Living"
              fallbackTitle="Sơ đồ mặt bằng Haven Living"
              aspectRatioClass="aspect-16/10"
              allowZoom={true}
              onZoom={() =>
                onOpenImageModal(
                  MAP_IMAGES.masterPlan,
                  'Sơ đồ phân lô Khu Đô Thị Haven Living (19,3 ha)',
                  'Chi tiết phân khu nhà phố liền kề, shophouse thương mại và tiện ích công viên'
                )
              }
              className="w-full h-auto max-h-[650px] object-contain bg-stone-950"
            />

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  onOpenImageModal(
                    MAP_IMAGES.masterPlan,
                    'Sơ đồ phân lô Khu Đô Thị Haven Living (19,3 ha)',
                    'Chi tiết phân khu nhà phố liền kề, shophouse thương mại và tiện ích công viên'
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-800/90 hover:bg-emerald-700 text-white backdrop-blur-md text-xs font-semibold shadow-lg transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Phóng to sơ đồ</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-emerald-900/95 border-t border-emerald-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Sơ Đồ Phân Lô Haven Living</h4>
              <p className="text-xs text-emerald-200 mt-0.5">
                Quy mô 19,3 ha · 1.305 sản phẩm · Trục đường nội bộ 12m – 22m trải nhựa hoàn thiện điện âm
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenConsultModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
            >
              <span>Liên Hệ Chọn Vị Trí Đẹp Nhất</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
