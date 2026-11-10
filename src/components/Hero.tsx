import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ShieldCheck,
  MapPin,
  Phone,
} from 'lucide-react';
import { PROJECT_DETAILS, GALLERY_ITEMS } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultModal, onOpenImageModal }) => {
  // Use first 5 prominent render images for the hero slider
  const heroSlides = GALLERY_ITEMS.slice(0, 5);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <section id="du-an-ara" className="relative min-h-screen bg-[#002f52] text-white flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Background Image Carousel with Scrim */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <SafeImage
              src={slide.url}
              alt={slide.title}
              fallbackTitle={slide.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-10000"
            />
            {/* Deep ocean teal gradient scrims */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002f52]/90 via-[#054062]/75 to-[#002f52]/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#002f52]/95 via-transparent to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Proposition & Headlines */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f9df7b] bg-[#002f52]/80 px-4 py-1.5 rounded-full w-fit border border-[#d59732]/40 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#d59732] animate-pulse"></span>
              <span>Kiến Tạo Giá Trị Sống</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif text-balance drop-shadow-md">
              KHU ĐÔ THỊ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9df7b] via-[#efa937] to-[#d59732]">
                ARA
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-100 max-w-2xl leading-relaxed text-balance drop-shadow-xs">
              Kiến tạo chuẩn sống xanh bền vững giữa trung tâm kết nối giao thương sầm uất.
              Quy hoạch đồng bộ <strong>19,3 ha</strong> với <strong>1.305 sản phẩm</strong> nhà phố hoàn thiện
              1 trệt 2 lầu, hạ tầng điện âm hiện đại với mức giá chỉ từ <strong>2,3 Tỷ đồng</strong>.
            </p>

            {/* Location highlight */}
            <div className="flex items-center gap-2 text-stone-200 text-sm font-semibold">
              <MapPin className="w-4 h-4 text-[#d59732] shrink-0" />
              <span>TP. Hồ Chí Minh (Liền kề VSIP 2 & Vành Đai 4)</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] text-white shadow-xl shadow-[#d59732]/30 hover:brightness-110 transition-all hover:scale-105 hover:-translate-y-0.5 cursor-pointer"
                title="Gọi Hotline tư vấn dự án trực tiếp"
              >
                <Phone className="w-4 h-4 text-white animate-pulse" />
                <span>Hotline: {PROJECT_DETAILS.hotlineDisplay}</span>
              </a>
            </div>

            {/* Legal trust note */}
            <div className="flex items-center gap-3 text-xs text-stone-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#d59732] shrink-0" />
              <span>Pháp lý: Hoàn thiện minh bạch · Sổ hồng lâu dài</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Slider Controls (No text description beneath) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#04365a] group transition-all duration-300 hover:shadow-[#d59732]/20">
              <SafeImage
                src={currentSlide.url}
                alt={currentSlide.title}
                fallbackTitle={currentSlide.title}
                aspectRatioClass="aspect-4/3"
                className="w-full h-80 sm:h-96 object-cover"
              />

              {/* Zoom full button */}
              <button
                type="button"
                onClick={() => onOpenImageModal(currentSlide.url, currentSlide.title)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#d59732] text-white backdrop-blur-md transition-all shadow-md hover:scale-110"
                title="Phóng to ảnh"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Slider prev/next controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
                  }
                  className="p-2.5 rounded-full bg-black/70 hover:bg-[#d59732] text-white pointer-events-auto backdrop-blur-md transition-all hover:scale-110"
                  aria-label="Ảnh trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-[#d59732] text-white pointer-events-auto backdrop-blur-md transition-all hover:scale-110"
                  aria-label="Ảnh tiếp theo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation Strip with hover glow */}
            <div className="grid grid-cols-5 gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`relative rounded-lg overflow-hidden h-14 border transition-all duration-300 hover:scale-105 ${
                    idx === currentSlideIndex
                      ? 'border-[#d59732] ring-2 ring-[#d59732]/70 shadow-md scale-102'
                      : 'border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Xem ảnh ${idx + 1}`}
                >
                  <SafeImage
                    src={slide.url}
                    alt={slide.title}
                    fallbackTitle={`Góc ${idx + 1}`}
                    aspectRatioClass="h-full"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width KPI Strip below Hero Split - Exact match to user screenshot */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="bg-[#f8f9fa] sm:bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 text-slate-800">
          {/* Column 1: 19,3 ha */}
          <div className="flex flex-col lg:border-r border-slate-200 lg:pr-8 hover:-translate-y-1 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#005944] font-serif tracking-tight">
              19,3 ha
            </span>
            <span className="text-xs font-bold text-[#1f2937] mt-2 uppercase tracking-wider">
              QUY MÔ QUY HOẠCH
            </span>
            <span className="text-xs text-slate-500 mt-1">Tổng diện tích 193.319m²</span>
          </div>

          {/* Column 2: 1.305 */}
          <div className="flex flex-col lg:border-r border-slate-200 lg:px-8 hover:-translate-y-1 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#005944] font-serif tracking-tight">
              1.305
            </span>
            <span className="text-xs font-bold text-[#1f2937] mt-2 uppercase tracking-wider">
              SẢN PHẨM ĐÔ THỊ
            </span>
            <span className="text-xs text-slate-500 mt-1">Nhà phố & Shophouse thương mại</span>
          </div>

          {/* Column 3: Chỉ 2,3 Tỷ */}
          <div className="flex flex-col lg:border-r border-slate-200 lg:px-8 hover:-translate-y-1 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#e67e22] font-serif tracking-tight">
              Chỉ 2,3 Tỷ
            </span>
            <span className="text-xs font-bold text-[#1f2937] mt-2 uppercase tracking-wider">
              GIÁ BÁN DỰ KIẾN
            </span>
            <span className="text-xs text-slate-500 mt-1">Nhà 1 trệt 2 lầu hoàn thiện</span>
          </div>

          {/* Column 4: 310 */}
          <div className="flex flex-col lg:pl-8 hover:-translate-y-1 transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#005944] font-serif tracking-tight">
              310
            </span>
            <span className="text-xs font-bold text-[#1f2937] mt-2 uppercase tracking-wider">
              NHÀ Ở XÃ HỘI
            </span>
            <span className="text-xs text-slate-500 mt-1">Nhà ở xã hội thấp tầng</span>
          </div>
        </div>
      </div>
    </section>
  );
};
