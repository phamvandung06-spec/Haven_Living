import React from 'react';
import {
  MapPin,
  Compass,
  Navigation,
  Car,
  Clock,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { MAP_IMAGES } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface LocationProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const Location: React.FC<LocationProps> = ({ onOpenConsultModal, onOpenImageModal }) => {
  const routes = [
    {
      name: 'Tuyến ĐT741 Huyết Mạch',
      desc: 'Trục giao thương liên tỉnh kết nối xuyên suốt các vùng kinh tế trọng điểm và TP. Hồ Chí Minh.',
      status: 'Đang khai thác',
    },
    {
      name: 'Tuyến Đường Vành Đai 4',
      desc: 'Đại dự án liên kết vùng kinh tế trọng điểm phía Nam kết nối 5 tỉnh thành: Đồng Nai – Bình Dương – TP.HCM – Long An – Bà Rịa Vũng Tàu.',
      status: 'Trọng điểm quốc gia',
    },
  ];

  return (
    <section id="vi-tri" className="py-20 bg-gradient-to-br from-[#002f52] via-[#054062] to-[#002f52] text-white relative overflow-hidden">
      {/* Subtle organic background grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d59732_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f9df7b] bg-[#002f52]/90 uppercase mb-3 px-4 py-1.5 rounded-full border border-[#d59732]/40 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#d59732]"></span>
            <span>Tâm Điểm Kết Nối Hạ Tầng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif text-balance">
            Vị Trí Đắc Địa – Đón Đầu Làn Sóng Hạ Tầng Đột Phá
          </h2>
          <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed text-balance">
            Tọa lạc tại vị trí chiến lược ngay cửa ngõ giao thương năng động của TP. Hồ Chí Minh,
            kết nối thông suốt đến các trung tâm đô thị hiện đại và các đại khu công nghiệp lớn.
          </p>
        </div>

        {/* Map & Key Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          {/* Left Column: Location Map Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#d59732]/30 bg-[#04365a] group">
              <SafeImage
                src={MAP_IMAGES.locationMap}
                alt="Sơ đồ vị trí kết nối giao thông Khu Đô Thị ARA"
                fallbackTitle="Sơ đồ vị trí dự án Khu Đô Thị ARA"
                aspectRatioClass="aspect-16/10"
                allowZoom={true}
                onZoom={() =>
                  onOpenImageModal(
                    MAP_IMAGES.locationMap,
                    'Sơ đồ vị trí Khu Đô Thị ARA',
                    'Vị trí chiến lược kết nối ĐT741 và Vành Đai 4'
                  )
                }
                className="w-full h-full object-cover"
              />

              <div className="p-4 bg-[#04365a]/95 backdrop-blur-sm border-t border-[#054062] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                  <MapPin className="w-4 h-4 text-[#d59732] shrink-0" />
                  <span className="font-semibold">TP. Hồ Chí Minh</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenImageModal(
                      MAP_IMAGES.locationMap,
                      'Sơ đồ vị trí Khu Đô Thị ARA',
                      'Vị trí chiến lược kết nối ĐT741 và Vành Đai 4'
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#054062] hover:bg-[#d59732] text-xs font-semibold text-white transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Xem bản đồ lớn</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Connection Narrative & Travel Time */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-[#04365a]/80 border border-[#054062] backdrop-blur-md hover:border-[#d59732]/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#d59732]" />
                <span>Giao Lộ Vàng Kết Nối Huyết Mạch</span>
              </h3>
              <p className="text-sm text-stone-200 leading-relaxed mb-4">
                Từ Khu Đô Thị ARA, cư dân dễ dàng di chuyển nhanh chóng đến <strong>Thành phố Mới</strong> và các trung tâm thương mại, dịch vụ, y tế hàng đầu vùng kinh tế phía Nam.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-xs text-[#f9df7b] font-semibold uppercase">Đến TP Mới</span>
                  <span className="text-lg font-bold text-white tabular-nums">~8 Phút</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#f9df7b] font-semibold uppercase">Đến KCN VSIP 2</span>
                  <span className="text-lg font-bold text-white tabular-nums">~5 Phút</span>
                </div>
              </div>
            </div>

            {/* Strategic Routes Cards with interactive hover */}
            <div className="flex flex-col gap-3">
              {routes.map((route, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#04365a]/60 border border-[#054062] hover:bg-[#04365a] hover:border-[#d59732] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-white">{route.name}</h4>
                    <span className="text-xs text-[#f9df7b] font-medium bg-[#002f52] border border-[#d59732]/40 px-2.5 py-0.5 rounded-full">
                      {route.status}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">{route.desc}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenConsultModal}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full text-sm font-bold bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] text-white hover:brightness-110 transition-all shadow-lg shadow-[#d59732]/30 cursor-pointer"
            >
              <span>Đăng Ký Đón Xe Tham Quan Vị Trí Thực Tế</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
