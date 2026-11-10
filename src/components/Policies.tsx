import React, { useState } from 'react';
import {
  Percent,
  Key,
  TrendingDown,
  Coins,
  FileCheck2,
  Calculator,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { SALES_POLICIES, MAP_IMAGES } from '../data/projectData';
import { SafeImage } from './SafeImage';

interface PoliciesProps {
  onOpenConsultModal: () => void;
  onOpenImageModal: (url: string, title: string, caption?: string) => void;
}

export const Policies: React.FC<PoliciesProps> = ({ onOpenConsultModal, onOpenImageModal }) => {
  // Calculator state
  const housePrice = 2300000000; // 2.3 billion VND
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30%
  const [loanYears, setLoanYears] = useState<number>(20); // 20 years
  const interestRate = 0.08; // 8% / year from policy
  const monthlyRentalIncome = 12000000; // 12 million VND rental commitment / month

  // Calculation formulas
  const downPayment = (housePrice * downPaymentPercent) / 100;
  const loanAmount = housePrice - downPayment;
  const numberOfMonths = loanYears * 12;
  const monthlyInterestRate = interestRate / 12;

  // Monthly payment (principal + interest estimated)
  const monthlyPrincipal = loanAmount / numberOfMonths;
  const monthlyInterestFirstMonth = loanAmount * monthlyInterestRate;
  const totalMonthlyPayment = Math.round(monthlyPrincipal + monthlyInterestFirstMonth);

  // Net payment after rental income guarantee
  const netMonthlyPayment = Math.max(0, totalMonthlyPayment - monthlyRentalIncome);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(Math.round(num)) + ' đ';
  };

  const getPolicyIcon = (index: number) => {
    switch (index) {
      case 0:
        return Percent;
      case 1:
        return Key;
      case 2:
        return TrendingDown;
      case 3:
        return Coins;
      default:
        return FileCheck2;
    }
  };

  return (
    <section id="chinh-sach" className="py-20 bg-[#f8f9fa] text-[#212529] relative overflow-hidden">
      {/* Background Image: 2.jpg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/aistudio/2.jpg"
          alt="Chính Sách Bán Hàng Geometric Background"
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#d59732] uppercase mb-3 bg-[#fdf6ea] px-4 py-1.5 rounded-full border border-[#d59732]/30 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#d59732]"></span>
            <span>Giải Pháp Tài Chính Vượt Trội</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#054062] tracking-tight font-serif text-balance">
            Chính Sách Bán Hàng & Ưu Đãi Khu Đô Thị ARA
          </h2>
          <p className="mt-4 text-[#595959] text-sm sm:text-base leading-relaxed text-balance">
            Sở hữu sản phẩm tại Khu Đô Thị ARA hôm nay, khách hàng không chỉ an tâm về pháp lý minh bạch hoàn thiện mà còn được
            tận hưởng chính sách bán hàng hấp dẫn giúp tối ưu dòng tiền và bảo đảm lợi nhuận đầu tư.
          </p>
        </div>

        {/* 5 Core Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SALES_POLICIES.map((policy, idx) => {
            const IconComponent = getPolicyIcon(idx);
            return (
              <div
                key={policy.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-[#fdf6ea]/30 hover:border-[#d59732] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#fdf6ea] text-[#d59732] flex items-center justify-center group-hover:bg-[#054062] group-hover:text-[#f9df7b] group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#054062] bg-[#e6f0f5] px-3 py-1 rounded-full transition-colors">
                      {policy.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#212529] group-hover:text-[#054062] transition-colors mb-2">
                    {policy.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                    {policy.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs text-[#595959]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d59732] mr-1.5" />
                  <span>Áp dụng theo chính sách mới nhất</span>
                </div>
              </div>
            );
          })}

          {/* Policy Banner Visual */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#002f52] flex flex-col justify-between">
            <SafeImage
              src={MAP_IMAGES.policyBanner}
              alt="Chính sách ưu đãi Khu Đô Thị ARA"
              fallbackTitle="Chính Sách Ưu Đãi Khu Đô Thị ARA"
              aspectRatioClass="aspect-video"
              allowZoom={true}
              onZoom={() =>
                onOpenImageModal(
                  MAP_IMAGES.policyBanner,
                  'Chính Sách Ưu Đãi Khu Đô Thị ARA',
                  'Chiết khấu 5-10%, cam kết thuê lại 2 năm, hỗ trợ lãi suất 8%/năm'
                )
              }
              className="w-full h-full object-cover"
            />
            <div className="p-4 bg-[#04365a] text-white flex items-center justify-between border-t border-[#054062]">
              <span className="text-xs font-semibold text-stone-200">
                Cam kết hỗ trợ tài chính tốt nhất khu vực
              </span>
              <button
                type="button"
                onClick={onOpenConsultModal}
                className="text-xs font-bold text-[#f9df7b] hover:text-[#efa937] underline cursor-pointer"
              >
                Nhận tư vấn
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Loan & Cashflow Calculator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-8">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2.5 text-[#d59732] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4 text-[#d59732]" />
              <span>Công Cụ Dự Tính Dòng Tiền & Khoản Vay</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#054062] font-serif">
              Tính Toán Khoản Trả Góp Hàng Tháng
            </h3>
            <p className="text-xs sm:text-sm text-[#595959] mt-1">
              Căn cứ mức giá nhà phố 1 trệt 2 lầu hoàn thiện <strong>2,3 Tỷ đồng</strong> cùng gói hỗ trợ lãi suất{' '}
              <strong>8%/năm</strong> cố định trong 2 năm.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Down payment selection */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#212529]">Tỷ lệ vốn tự có chuẩn bị ban đầu</span>
                  <span className="text-[#054062] font-bold">{downPaymentPercent}% ({formatVND(downPayment)})</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[20, 30, 50, 70].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDownPaymentPercent(pct)}
                      className={`py-2 px-3 text-xs font-bold rounded-full border transition-all ${
                        downPaymentPercent === pct
                          ? 'bg-[#054062] text-white border-[#054062] shadow-sm'
                          : 'bg-stone-50 text-[#595959] border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Term Selection */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#212529]">Thời gian vay vốn ngân hàng</span>
                  <span className="text-[#054062] font-bold">{loanYears} Năm ({numberOfMonths} tháng)</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[5, 10, 15, 20, 25].map((years) => (
                    <button
                      key={years}
                      type="button"
                      onClick={() => setLoanYears(years)}
                      className={`py-2 px-2 text-xs font-bold rounded-full border transition-all ${
                        loanYears === years
                          ? 'bg-[#054062] text-white border-[#054062] shadow-sm'
                          : 'bg-stone-50 text-[#595959] border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {years} Năm
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan parameters reminder */}
              <div className="p-4 rounded-2xl bg-[#e6f0f5] border border-[#054062]/20 text-xs text-[#054062] space-y-1.5">
                <div className="flex justify-between">
                  <span>Số tiền ngân hàng cho vay:</span>
                  <strong className="font-bold">{formatVND(loanAmount)}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Lãi suất hỗ trợ ưu đãi:</span>
                  <strong className="font-bold text-[#d59732]">8.0% / năm (Cố định 2 năm)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Cam kết thuê lại 2 năm:</span>
                  <strong className="font-bold text-[#054062]">~12.000.000 đ / tháng</strong>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#002f52] via-[#04365a] to-[#002f52] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-[#d59732]/40">
              <span className="text-xs uppercase tracking-wider text-[#f9df7b] font-bold block mb-1">
                Kết Quả Dự Tính Tài Chính
              </span>
              <h4 className="text-lg font-bold text-white mb-6">
                Phương Án Sở Hữu Khu Đô Thị ARA
              </h4>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs text-stone-300">Vốn cần chuẩn bị ban đầu</span>
                  <span className="text-sm font-bold text-[#f9df7b] tabular-nums">
                    {formatVND(downPayment)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs text-stone-300">Gốc + lãi ước tính hàng tháng</span>
                  <span className="text-sm font-bold text-white tabular-nums">
                    ~{formatVND(totalMonthlyPayment)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-xs text-stone-300">Dòng tiền thuê bù trừ mỗi tháng</span>
                  <span className="text-sm font-bold text-[#f9df7b] tabular-nums">
                    - {formatVND(monthlyRentalIncome)}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-stone-300 block mb-1 font-semibold">
                    Thực tế trả góp mỗi tháng sau khi bù trừ:
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#f9df7b] font-serif tabular-nums">
                    {formatVND(netMonthlyPayment)}
                  </div>
                  <span className="text-[11px] text-stone-400 block mt-1">
                    *Mức trả thực tế có thể thay đổi tùy gói vay và lịch giải ngân của từng ngân hàng.
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenConsultModal}
                className="w-full py-3.5 bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] hover:brightness-110 text-white font-bold text-xs rounded-full shadow-lg shadow-[#d59732]/30 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Nhận Bảng Lập Lịch Trả Nợ Chi Tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
