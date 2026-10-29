import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, MapPin } from 'lucide-react';
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
    <section className="relative min-h-screen bg-stone-950 text-white flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Background Image Carousel with Brighter Natural Scrim */}
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
            {/* Lighter, fresh emerald & ambient lighting scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/50 to-emerald-950/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-black/25"></div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Proposition & Headlines */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-900/50 px-3 py-1 rounded-full w-fit border border-emerald-500/30 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Kiến Tạo Giá Trị Sống Mới</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif text-balance drop-shadow-md">
              KHU ĐÔ THỊ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-100">
                HAVEN LIVING
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-100 max-w-2xl leading-relaxed text-balance drop-shadow-xs">
              Kiến tạo chuẩn sống xanh bền vững giữa trung tâm kết nối giao thương sầm uất.
              Quy hoạch đồng bộ <strong>19,3 ha</strong> với <strong>1.305 sản phẩm</strong> nhà phố hoàn thiện
              1 trệt 2 lầu, hạ tầng điện âm hiện đại với mức giá chỉ từ <strong>2,3 Tỷ đồng</strong>.
            </p>

            {/* Location highlight */}
            <div className="flex items-center gap-2 text-emerald-100 text-sm font-medium">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>TP. Hồ Chí Minh (Liền kề VSIP 2 & Vành Đai 4)</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenConsultModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-xl shadow-emerald-950/40 hover:shadow-emerald-400/50 transition-all hover:scale-105 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Nhận Báo Giá & Ưu Đãi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Legal trust note */}
            <div className="flex items-center gap-3 text-xs text-stone-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pháp lý: Hoàn thiện minh bạch · Sổ hồng lâu dài</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Slider Controls (No text description beneath) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-stone-900 group transition-all duration-300 hover:shadow-emerald-500/20">
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
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-emerald-600 text-white backdrop-blur-md transition-all shadow-md hover:scale-110"
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
                  className="p-2.5 rounded-full bg-black/70 hover:bg-emerald-600 text-white pointer-events-auto backdrop-blur-md transition-all hover:scale-110"
                  aria-label="Ảnh trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-emerald-600 text-white pointer-events-auto backdrop-blur-md transition-all hover:scale-110"
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
                      ? 'border-emerald-400 ring-2 ring-emerald-400/70 shadow-md scale-102'
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

      {/* Full-width KPI Strip below Hero Split - Bright and Luminous Style */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200/80 shadow-2xl text-slate-800">
          <div className="flex flex-col border-r border-slate-200 last:border-0 pr-4 hover:-translate-y-1 transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-serif tabular-nums">
              19,3 ha
            </span>
            <span className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wider">
              Quy Mô Quy Hoạch
            </span>
            <span className="text-xs text-slate-500 mt-0.5">Tổng diện tích 193.319m²</span>
          </div>

          <div className="flex flex-col border-r border-slate-200 last:border-0 sm:pl-4 pr-4 hover:-translate-y-1 transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-serif tabular-nums">
              1.305
            </span>
            <span className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wider">
              Sản Phẩm Đô Thị
            </span>
            <span className="text-xs text-slate-500 mt-0.5">Nhà phố & Shophouse thương mại</span>
          </div>

          <div className="flex flex-col border-r border-slate-200 last:border-0 sm:pl-4 pr-4 hover:-translate-y-1 transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-serif tabular-nums">
              Chỉ 2,3 Tỷ
            </span>
            <span className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wider">
              Giá Bán Dự Kiến
            </span>
            <span className="text-xs text-slate-500 mt-0.5">Nhà 1 trệt 2 lầu hoàn thiện</span>
          </div>

          <div className="flex flex-col sm:pl-4 hover:-translate-y-1 transition-all duration-300">
            <span className="text-2xl sm:text-3xl font-extrabold text-teal-700 font-serif tabular-nums">
              310
            </span>
            <span className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wider">
              Nhà Ở Xã Hội
            </span>
            <span className="text-xs text-slate-500 mt-0.5">Nhà ở xã hội thấp tầng</span>
          </div>
        </div>
      </div>
    </section>
  );
};
