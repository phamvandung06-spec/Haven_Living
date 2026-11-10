import React from 'react';
import {
  Building2,
  MapPin,
  CheckCircle2,
  Compass,
  TrendingUp,
  Home,
  Sparkles,
} from 'lucide-react';
import { PROJECT_DETAILS, CORE_PILLARS, MAP_IMAGES } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface OverviewProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ onOpenConsultModal, onOpenImageModal }) => {
  // Specs without "Mật độ xây dựng"
  const specs = [
    { label: 'Tên thương mại', value: PROJECT_DETAILS.name, highlight: true },
    { label: 'Tên pháp lý quy hoạch', value: PROJECT_DETAILS.legalName },
    { label: 'Chủ đầu tư', value: PROJECT_DETAILS.developer },
    { label: 'Vị trí tọa lạc', value: PROJECT_DETAILS.location },
    { label: 'Tổng quy mô', value: PROJECT_DETAILS.scale },
    { label: 'Số lượng sản phẩm', value: PROJECT_DETAILS.totalProducts },
    { label: 'Loại hình sản phẩm', value: PROJECT_DETAILS.productTypes },
    { label: 'Diện tích phân lô', value: PROJECT_DETAILS.landArea },
    { label: 'Tiêu chuẩn xây dựng', value: PROJECT_DETAILS.houseSpec },
    { label: 'Mức giá dự kiến', value: PROJECT_DETAILS.expectedPrice, highlight: true },
    { label: 'Pháp lý dự án', value: PROJECT_DETAILS.legalStatus },
    { label: 'Hạ tầng kỹ thuật', value: PROJECT_DETAILS.infrastructure },
  ];

  // Tailored icons and colors for 4 Pillars (Kien Hung gold and deep teal style)
  const pillarIcons = [MapPin, Compass, TrendingUp, Home];
  const pillarStyles = [
    {
      iconBg: 'bg-[#fdf6ea] text-[#d59732] group-hover:bg-[#d59732] group-hover:text-white',
      badgeBg: 'text-[#054062]',
      hoverBg: 'hover:border-[#d59732] hover:shadow-[#054062]/10',
    },
    {
      iconBg: 'bg-[#e6f0f5] text-[#054062] group-hover:bg-[#054062] group-hover:text-white',
      badgeBg: 'text-[#054062]',
      hoverBg: 'hover:border-[#054062] hover:shadow-[#054062]/10',
    },
    {
      iconBg: 'bg-[#fdf6ea] text-[#d59732] group-hover:bg-[#d59732] group-hover:text-white',
      badgeBg: 'text-[#d59732]',
      hoverBg: 'hover:border-[#d59732] hover:shadow-[#d59732]/10',
    },
    {
      iconBg: 'bg-[#e6f0f5] text-[#054062] group-hover:bg-[#054062] group-hover:text-white',
      badgeBg: 'text-[#054062]',
      hoverBg: 'hover:border-[#054062] hover:shadow-[#054062]/10',
    },
  ];

  return (
    <section id="tong-quan" className="py-20 text-[#212529] relative overflow-hidden">
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
            <span>Quy Hoạch Đô Thị Xanh & Bền Vững</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#054062] tracking-tight font-serif text-balance">
            Khu Đô Thị ARA – Kiến Tạo Giá Trị Sống
          </h2>
          <p className="mt-4 text-[#595959] text-sm sm:text-base leading-relaxed text-balance">
            Quy hoạch bài bản theo mô hình sinh thái đô thị kiểu mới, mang lại không gian sống trong lành,
            hạ tầng hoàn thiện và cơ hội gia tăng giá trị tài sản vượt trội cho chủ nhân.
          </p>
        </div>

        {/* Narrative & WIDER High-impact Banner (No text below image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-5 flex flex-col gap-4 text-[#595959] leading-relaxed text-sm sm:text-base">
            <p>
              <strong className="text-[#212529]">Khu đô thị ARA</strong> là khu đô thị nhà phố được quy hoạch đồng bộ theo định hướng{' '}
              <span className="text-[#054062] font-bold">đô thị sinh thái, hiện đại và bền vững</span>,
              mang đến không gian sống chất lượng với hạ tầng hoàn thiện, cảnh quan xanh và hệ thống tiện ích đa dạng.
            </p>
            <p>
              Dự án sở hữu vị trí kết nối thuận tiện đến các khu công nghiệp trọng điểm, trung tâm hành chính, trường học, bệnh viện
              và các dịch vụ thiết yếu, đáp ứng trọn vẹn mọi nhu cầu sinh hoạt hàng ngày của cư dân.
            </p>
            <p>
              Các sản phẩm tại <strong className="text-[#212529]">Khu đô thị ARA</strong> được thiết kế hiện đại, tối ưu công năng trên nhiều diện tích khác nhau,
              phù hợp cho cả nhu cầu an cư lâu dài và kinh doanh dịch vụ. Bên cạnh đó, dự án có{' '}
              <strong className="text-[#054062]">pháp lý hoàn thiện minh bạch</strong>, quy hoạch khang trang cùng hệ thống tiện ích nội khu hoàn chỉnh, góp phần xây dựng
              cộng đồng cư dân văn minh và thịnh vượng.
            </p>
          </div>

          {/* Wider Image Container - Completely clean without text bar below */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#054062]/20 group relative transition-all duration-500 hover:shadow-[#054062]/20">
              <SafeImage
                src={MAP_IMAGES.overviewBanner}
                alt="Phối cảnh Khu đô thị ARA"
                fallbackTitle="Phối cảnh Khu Đô Thị ARA"
                aspectRatioClass="aspect-16/9"
                allowZoom={true}
                onZoom={() =>
                  onOpenImageModal(
                    MAP_IMAGES.overviewBanner,
                    'Khu Đô Thị ARA'
                  )
                }
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Project Specifications Table with Interactive Hover & Color Shift (No construction density) */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-16">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e6f0f5] text-[#054062] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#054062]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#054062]">Thông Số Kỹ Thuật Dự Án</h3>
                <p className="text-xs text-[#595959]">Cập nhật theo hồ sơ phê duyệt quy hoạch chính thức</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#054062] bg-[#e6f0f5] border border-[#054062]/20 px-3 py-1 rounded-full">
              Hạ tầng hoàn thiện
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {specs.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#e6f0f5] hover:border-[#054062] cursor-pointer ${
                  index % 2 === 0
                    ? 'bg-[#f8f9fa] border-slate-200/80'
                    : 'bg-white border-slate-200/60'
                }`}
              >
                <span className="text-xs sm:text-sm font-medium text-[#595959]">{item.label}</span>
                <span
                  className={`text-xs sm:text-sm font-semibold text-[#212529] mt-1 sm:mt-0 text-left sm:text-right ${
                    item.highlight ? 'text-[#054062] font-bold' : ''
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Lý do nên đầu tư vào Khu Đô Thị ARA với nền ảnh 2.jpg */}
        <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-slate-200 shadow-xl">
          {/* Background Image: 2_6f19e2e9.jpg (2.jpg) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/assets/aistudio/2.jpg"
              alt="4 Lý Do Vàng Geometric Background"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#054062] font-serif">
                4 Lý Do Vàng Nên Sở Hữu & Đầu Tư Khu Đô Thị ARA
              </h3>
              <p className="text-xs sm:text-sm text-[#595959] mt-2">
                Sự hội tụ trọn vẹn giữa giá trị an cư đích thực và khả năng sinh lời bền vững
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_PILLARS.map((pillar, idx) => {
                const IconComp = pillarIcons[idx] || Sparkles;
                const style = pillarStyles[idx];

                return (
                  <div
                    key={pillar.index}
                    className={`bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 ${style.hoverBg} transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-extrabold text-[#054062] font-serif tabular-nums group-hover:text-[#d59732] group-hover:scale-110 transition-transform">
                          {pillar.index}
                        </span>
                        <div className={`w-10 h-10 rounded-xl ${style.iconBg} flex items-center justify-center shadow-xs transition-all duration-300`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-[#212529] group-hover:text-[#054062] transition-colors mb-2">
                        {pillar.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#054062]">
                      <CheckCircle2 className="w-4 h-4 text-[#d59732] shrink-0" />
                      <span>{pillar.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
