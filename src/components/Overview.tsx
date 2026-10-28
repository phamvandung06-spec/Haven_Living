import React from 'react';
import {
  Building2,
  MapPin,
  CheckCircle2,
  FileBadge,
  Sparkles,
  Layers,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { PROJECT_DETAILS, CORE_PILLARS, MAP_IMAGES } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface OverviewProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ onOpenConsultModal, onOpenImageModal }) => {
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
    { label: 'Mật độ xây dựng', value: PROJECT_DETAILS.constructionDensity },
    { label: 'Pháp lý dự án', value: PROJECT_DETAILS.legalStatus },
    { label: 'Hạ tầng kỹ thuật', value: PROJECT_DETAILS.infrastructure },
  ];

  return (
    <section id="tong-quan" className="py-20 bg-stone-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 uppercase mb-3">
            <span className="w-8 h-px bg-emerald-600"></span>
            <span>Quy Hoạch Đô Thị Xanh & Bền Vững</span>
            <span className="w-8 h-px bg-emerald-600"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif text-balance">
            Khu Đô Thị Haven Living – Kiến Tạo Giá Trị Sống Hiện Đại
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Quy hoạch bài bản theo mô hình sinh thái đô thị kiểu mới, mang lại không gian sống trong lành,
            hạ tầng hoàn thiện và cơ hội gia tăng giá trị tài sản vượt trội cho chủ nhân.
          </p>
        </div>

        {/* Narrative & High-impact Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 flex flex-col gap-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>Haven Living</strong> là khu đô thị nhà phố được quy hoạch đồng bộ theo định hướng{' '}
              <span className="text-emerald-700 font-semibold">đô thị xanh, hiện đại và bền vững</span>,
              mang đến không gian sống chất lượng với hạ tầng hoàn thiện, cảnh quan xanh và hệ thống tiện ích đa dạng.
            </p>
            <p>
              Dự án sở hữu vị trí kết nối thuận tiện đến các khu công nghiệp trọng điểm, trung tâm hành chính, trường học, bệnh viện
              và các dịch vụ thiết yếu, đáp ứng trọn vẹn mọi nhu cầu sinh hoạt hàng ngày của cư dân.
            </p>
            <p>
              Các sản phẩm tại <strong>Haven Living</strong> được thiết kế hiện đại, tối ưu công năng trên nhiều diện tích khác nhau,
              phù hợp cho cả nhu cầu an cư lâu dài và kinh doanh dịch vụ. Bên cạnh đó, dự án có{' '}
              <strong>pháp lý hoàn thiện minh bạch</strong>, quy hoạch khang trang cùng hệ thống tiện ích nội khu hoàn chỉnh, góp phần xây dựng
              cộng đồng cư dân văn minh và thịnh vượng.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-emerald-900/10 group relative">
              <SafeImage
                src={MAP_IMAGES.overviewBanner}
                alt="Phối cảnh Khu đô thị Haven Living"
                fallbackTitle="Phối cảnh Khu Đô Thị Haven Living"
                aspectRatioClass="aspect-16/9"
                allowZoom={true}
                onZoom={() =>
                  onOpenImageModal(
                    MAP_IMAGES.overviewBanner,
                    'Khu Đô Thị Haven Living',
                    'Kiến tạo giá trị sống hiện đại, chuẩn sinh thái xanh'
                  )
                }
                className="w-full h-full object-cover"
              />
              <div className="p-4 bg-emerald-900 text-white flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-emerald-100">Khu Nhà Ở Bình Minh (Haven Living)</h4>
                  <p className="text-xs text-emerald-300">Quy hoạch 19,3 ha đồng bộ với 1.305 căn nhà phố & shophouse</p>
                </div>
                <span className="text-xs px-2.5 py-1 bg-emerald-700 rounded-md font-semibold text-emerald-100">
                  Hoàn thiện minh bạch
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Specifications Table with Alternating Zebra Colors */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 mb-16">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Thông Số Kỹ Thuật Dự Án</h3>
                <p className="text-xs text-slate-500">Cập nhật theo hồ sơ phê duyệt quy hoạch chính thức</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
              Hạ tầng hoàn thiện
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {specs.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-xl border transition-colors ${
                  index % 2 === 0
                    ? 'bg-emerald-50/60 border-emerald-100/80'
                    : 'bg-stone-50/80 border-stone-200/70'
                }`}
              >
                <span className="text-xs sm:text-sm font-medium text-slate-600">{item.label}</span>
                <span
                  className={`text-xs sm:text-sm font-semibold text-slate-900 mt-1 sm:mt-0 text-left sm:text-right ${
                    item.highlight ? 'text-emerald-800 font-bold' : ''
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Lý do nên đầu tư vào Haven Living (Pillars with interactive hover animation & color shift) */}
        <div>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              4 Lý Do Vàng Nên Sở Hữu & Đầu Tư Haven Living
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Sự hội tụ trọn vẹn giữa giá trị an cư đích thực và khả năng sinh lời bền vững
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-emerald-50 hover:via-teal-50/50 hover:to-emerald-100/50 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-emerald-700 font-serif tabular-nums group-hover:scale-110 transition-transform">
                      {pillar.index}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 group-hover:bg-emerald-100/80 px-2 py-0.5 rounded transition-colors">
                      Ưu thế
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
