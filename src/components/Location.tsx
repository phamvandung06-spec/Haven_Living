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
      desc: 'Trục giao thương liên tỉnh kết nối xuyên suốt Bình Dương – Bình Phước – Tây Nguyên và TP. Hồ Chí Minh.',
      status: 'Đang khai thác',
    },
    {
      name: 'Tuyến Đường Vành Đai 4',
      desc: 'Đại dự án liên kết vùng kinh tế trọng điểm phía Nam kết nối 5 tỉnh thành: Đồng Nai – Bình Dương – TP.HCM – Long An – Bà Rịa Vũng Tàu.',
      status: 'Trọng điểm quốc gia',
    },
    {
      name: 'Đường Song Hành Đường Sắt',
      desc: 'Hành lang vận tải logistics công nghiệp kết nối các đại khu công nghiệp đến cụm cảng nước sâu và sân bay quốc tế Long Thành.',
      status: 'Quy hoạch kết nối',
    },
    {
      name: 'Trực Diện KCN VSIP 2 & VSIP 2 Mở Rộng',
      desc: 'Liền kề trung tâm việc làm, cụm công nghệ cao với hàng chục ngàn chuyên gia, kỹ sư và lực lượng lao động chất lượng cao.',
      status: 'Khu công nghiệp kiểu mẫu',
    },
  ];

  return (
    <section id="vi-tri" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle organic background grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3">
            <span className="w-8 h-px bg-emerald-500"></span>
            <span>Tâm Điểm Kết Nối Hạ Tầng</span>
            <span className="w-8 h-px bg-emerald-500"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif text-balance">
            Vị Trí Đắc Địa – Đón Đầu Làn Sóng Hạ Tầng Đột Phá
          </h2>
          <p className="mt-4 text-emerald-200/80 text-sm sm:text-base leading-relaxed text-balance">
            Tọa lạc tại vị trí chiến lược ngay cửa ngõ giao thương năng động của TP. Hồ Chí Minh,
            kết nối thông suốt đến các trung tâm đô thị hiện đại và các đại khu công nghiệp lớn.
          </p>
        </div>

        {/* Map & Key Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          {/* Left Column: Location Map Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/50 bg-stone-900 group">
              <SafeImage
                src={MAP_IMAGES.locationMap}
                alt="Sơ đồ vị trí kết nối giao thông Khu Đô Thị Haven Living"
                fallbackTitle="Sơ đồ vị trí dự án Haven Living"
                aspectRatioClass="aspect-16/10"
                allowZoom={true}
                onZoom={() =>
                  onOpenImageModal(
                    MAP_IMAGES.locationMap,
                    'Sơ đồ vị trí Khu Đô Thị Haven Living',
                    'Vị trí chiến lược kết nối ĐT741 và Vành Đai 4'
                  )
                }
                className="w-full h-full object-cover"
              />

              <div className="p-4 bg-emerald-900/95 backdrop-blur-sm border-t border-emerald-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">TP. Hồ Chí Minh</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenImageModal(
                      MAP_IMAGES.locationMap,
                      'Sơ đồ vị trí Khu Đô Thị Haven Living',
                      'Vị trí chiến lược kết nối ĐT741 và Vành Đai 4'
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-xs font-semibold text-emerald-100 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Xem bản đồ lớn</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Connection Narrative & Travel Time */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-emerald-900/40 border border-emerald-800/60 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <span>Giao Lộ Vàng 3 Tuyến Huyết Mạch</span>
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed mb-4">
                Từ Haven Living, cư dân dễ dàng di chuyển nhanh chóng đến <strong>Thành phố Mới Bình Dương</strong>,{' '}
                <strong>TP. Thủ Dầu Một</strong> và các trung tâm thương mại, dịch vụ, y tế hàng đầu vùng kinh tế phía Nam.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-emerald-800/50">
                <div className="flex flex-col">
                  <span className="text-xs text-emerald-400 font-semibold uppercase">Đến TP Mới</span>
                  <span className="text-lg font-bold text-white tabular-nums">~8 Phút</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-emerald-400 font-semibold uppercase">Đến KCN VSIP 2</span>
                  <span className="text-lg font-bold text-white tabular-nums">~5 Phút</span>
                </div>
              </div>
            </div>

            {/* Strategic Routes Cards */}
            <div className="flex flex-col gap-3">
              {routes.map((route, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-emerald-900/20 border border-emerald-800/40 hover:bg-emerald-900/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-white">{route.name}</h4>
                    <span className="text-xs text-emerald-300 font-medium bg-emerald-800/60 px-2 py-0.5 rounded">
                      {route.status}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">{route.desc}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenConsultModal}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-950/60 cursor-pointer"
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
