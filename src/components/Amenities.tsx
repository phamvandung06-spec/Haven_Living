import React, { useState } from 'react';
import {
  Trees,
  ShoppingBag,
  GraduationCap,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Clock,
  Maximize2,
  ChevronRight,
  Coffee,
} from 'lucide-react';
import { CONNECTIVITY_MILESTONES, MAP_IMAGES } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface AmenitiesProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenConsultModal, onOpenImageModal }) => {
  const [activeTab, setActiveTab] = useState<'external' | 'internal'>('external');

  const internalAmenities = [
    {
      title: 'Công Viên Sinh Thái Trung Tâm',
      desc: 'Lá phổi xanh điều hòa không khí với thảm cỏ mềm mại, đài phun nước và hàng cây cổ thụ rợp bóng.',
      icon: Trees,
    },
    {
      title: 'Đại Lộ Thương Mại Shophouse',
      desc: 'Tuyến phố mua sắm, cà phê ngoài trời và dịch vụ tiện ích phục vụ mọi nhu cầu thường nhật của cư dân.',
      icon: ShoppingBag,
    },
    {
      title: 'Khu Vui Chơi Trẻ Em Kid Paradise',
      desc: 'Không gian vận động ngoài trời an toàn, sáng tạo, giúp các bé thỏa sức vui đùa và phát triển toàn diện.',
      icon: Sparkles,
    },
    {
      title: 'Sân Thể Thao Đa Năng & Fitness',
      desc: 'Khu rèn luyện thể chất với các dụng cụ tập gym ngoài trời, sân cầu lông và đường dạo bộ ven công viên.',
      icon: HeartPulse,
    },
    {
      title: 'Trường Mầm Non Nội Khu',
      desc: 'Môi trường giáo dục đầu đời chuẩn mực ngay cạnh nhà, phụ huynh hoàn toàn an tâm gửi gắm con em.',
      icon: GraduationCap,
    },
    {
      title: 'Hạ Tầng Điện Âm & An Ninh 24/7',
      desc: '100% hệ thống dây điện ngầm, camera an ninh giám sát toàn khu cùng đội ngũ bảo vệ chuyên nghiệp ngày đêm.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="tien-ich" className="py-20 text-[#212529] relative overflow-hidden">
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
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#d59732] uppercase mb-3 bg-[#fdf6ea] px-4 py-1.5 rounded-full border border-[#d59732]/30 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#d59732]"></span>
            <span>Hệ Thống Tiện Ích Đỉnh Cao</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#054062] tracking-tight font-serif text-balance">
            Tiện Ích Trọn Vẹn – Sống Xanh An Lành Từng Giây Phút
          </h2>
          <p className="mt-4 text-[#595959] text-sm sm:text-base leading-relaxed text-balance">
            Sở hữu vị trí chiến lược với mạng lưới tiện ích hiện hữu chỉ trong vài phút di chuyển,
            kết hợp hoàn mỹ cùng các tiện ích sinh thái nội khu khép kín hiện đại.
          </p>

          {/* Interactive Toggle Tabs - Dia Oc Kien Hung Pill Style */}
          <div className="inline-flex p-1.5 bg-slate-200/70 rounded-full mt-8 border border-slate-300/60">
            <button
              type="button"
              onClick={() => setActiveTab('external')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'external'
                  ? 'bg-[#054062] text-white shadow-md'
                  : 'text-[#595959] hover:text-[#054062]'
              }`}
            >
              Liên Kết Vùng (3 - 8 Phút)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('internal')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'internal'
                  ? 'bg-[#054062] text-white shadow-md'
                  : 'text-[#595959] hover:text-[#054062]'
              }`}
            >
              Tiện Ích Sinh Thái Nội Khu
            </button>
          </div>
        </div>

        {/* Tab 1: External Connectivity (Source Content) */}
        {activeTab === 'external' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Map Diagram */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <SafeImage
                  src={MAP_IMAGES.amenitiesMap}
                  alt="Sơ đồ tiện ích ngoại khu Khu Đô Thị ARA"
                  fallbackTitle="Sơ đồ liên kết tiện ích Khu Đô Thị ARA"
                  aspectRatioClass="aspect-4/3"
                  allowZoom={true}
                  onZoom={() =>
                    onOpenImageModal(
                      MAP_IMAGES.amenitiesMap,
                      'Sơ đồ liên kết tiện ích khu vực',
                      'Kết nối nhanh chóng 3 - 8 phút đến toàn bộ trung tâm tiện ích hàng đầu'
                    )
                  }
                  className="w-full h-full object-contain bg-slate-900/5"
                />

                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#212529]">
                    Bản đồ liên kết tiện ích vệ tinh 3 - 8 phút
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenImageModal(
                        MAP_IMAGES.amenitiesMap,
                        'Sơ đồ liên kết tiện ích khu vực',
                        'Kết nối nhanh chóng 3 - 8 phút đến toàn bộ trung tâm tiện ích hàng đầu'
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#054062] hover:text-[#d59732] transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Xem toàn cảnh</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Step-by-Step Milestones with interactive hover effect */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {CONNECTIVITY_MILESTONES.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-[#d59732] hover:bg-[#fdf6ea]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-3.5 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e6f0f5] text-[#054062] group-hover:bg-[#d59732] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center shrink-0 border border-slate-200 shadow-xs">
                    <Clock className="w-4 h-4 mb-0.5" />
                    <span className="text-[11px] font-extrabold leading-none">{item.time}</span>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#212529] group-hover:text-[#054062] transition-colors leading-snug">
                      {item.place}
                    </h4>
                    <p className="text-xs text-[#595959] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Internal Eco Living Amenities with interactive hover effect */}
        {activeTab === 'internal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internalAmenities.map((amenity, idx) => {
              const IconComp = amenity.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#d59732] hover:shadow-xl hover:-translate-y-2 hover:bg-[#fdf6ea]/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#fdf6ea] text-[#d59732] flex items-center justify-center mb-4 group-hover:bg-[#054062] group-hover:text-[#f9df7b] group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#212529] group-hover:text-[#054062] transition-colors mb-2">
                      {amenity.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#054062]">
                    <span>Chuẩn sinh thái xanh</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
