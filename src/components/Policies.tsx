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
    <section id="chinh-sach" className="py-20 bg-stone-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 uppercase mb-3">
            <span className="w-8 h-px bg-emerald-600"></span>
            <span>Giải Pháp Tài Chính Vượt Trội</span>
            <span className="w-8 h-px bg-emerald-600"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif text-balance">
            Chính Sách Bán Hàng & Ưu Đãi Haven Living
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Sở hữu Haven Living hôm nay, khách hàng không chỉ an tâm về pháp lý minh bạch 1/500 mà còn được
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
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-emerald-50 hover:via-teal-50/50 hover:to-emerald-100/50 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 group-hover:bg-emerald-100/80 px-2.5 py-1 rounded-md transition-colors">
                      {policy.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {policy.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {policy.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                  <span>Áp dụng cho giỏ hàng đợt 1</span>
                </div>
              </div>
            );
          })}

          {/* Policy Banner Visual */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-stone-900 flex flex-col justify-between">
            <SafeImage
              src={MAP_IMAGES.policyBanner}
              alt="Chính sách ưu đãi Haven Living"
              fallbackTitle="Chính Sách Ưu Đãi Haven Living"
              aspectRatioClass="aspect-video"
              allowZoom={true}
              onZoom={() =>
                onOpenImageModal(
                  MAP_IMAGES.policyBanner,
                  'Chính Sách Ưu Đãi Haven Living',
                  'Chiết khấu 5-10%, cam kết thuê lại 2 năm, hỗ trợ lãi suất 8%/năm'
                )
              }
              className="w-full h-full object-cover"
            />
            <div className="p-4 bg-emerald-900 text-white flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-200">
                Cam kết hỗ trợ tài chính tốt nhất khu vực
              </span>
              <button
                type="button"
                onClick={onOpenConsultModal}
                className="text-xs font-bold text-emerald-300 hover:text-white underline cursor-pointer"
              >
                Nhận tư vấn
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Loan & Cashflow Calculator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-xl mb-8">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2.5 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Công Cụ Dự Tính Dòng Tiền & Khoản Vay</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              Tính Toán Khoản Trả Góp Hàng Tháng
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
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
                  <span className="text-slate-700">Tỷ lệ vốn tự có chuẩn bị ban đầu</span>
                  <span className="text-emerald-700 font-bold">{downPaymentPercent}% ({formatVND(downPayment)})</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[20, 30, 50, 70].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDownPaymentPercent(pct)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                        downPaymentPercent === pct
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                          : 'bg-stone-50 text-slate-700 border-slate-200 hover:bg-slate-100'
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
                  <span className="text-slate-700">Thời gian vay vốn ngân hàng</span>
                  <span className="text-emerald-700 font-bold">{loanYears} Năm ({numberOfMonths} tháng)</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[5, 10, 15, 20, 25].map((years) => (
                    <button
                      key={years}
                      type="button"
                      onClick={() => setLoanYears(years)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all ${
                        loanYears === years
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                          : 'bg-stone-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {years} Năm
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan parameters reminder */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 space-y-1">
                <div className="flex justify-between">
                  <span>Số tiền ngân hàng cho vay:</span>
                  <strong className="font-bold">{formatVND(loanAmount)}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Lãi suất hỗ trợ ưu đãi:</span>
                  <strong className="font-bold text-emerald-700">8.0% / năm (Cố định 2 năm)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Cam kết thuê lại 2 năm:</span>
                  <strong className="font-bold text-emerald-700">~12.000.000 đ / tháng</strong>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-emerald-700/40">
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">
                Kết Quả Dự Tính Tài Chính
              </span>
              <h4 className="text-lg font-bold text-white mb-6">
                Phương Án Sở Hữu Haven Living
              </h4>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-emerald-800/80">
                  <span className="text-xs text-stone-300">Vốn cần chuẩn bị ban đầu</span>
                  <span className="text-sm font-bold text-emerald-300 tabular-nums">
                    {formatVND(downPayment)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-emerald-800/80">
                  <span className="text-xs text-stone-300">Gốc + lãi ước tính hàng tháng</span>
                  <span className="text-sm font-bold text-white tabular-nums">
                    ~{formatVND(totalMonthlyPayment)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-emerald-800/80">
                  <span className="text-xs text-stone-300">Dòng tiền thuê bù trừ mỗi tháng</span>
                  <span className="text-sm font-bold text-emerald-400 tabular-nums">
                    - {formatVND(monthlyRentalIncome)}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-emerald-300 block mb-1 font-semibold">
                    Thực tế trả góp mỗi tháng sau khi bù trừ:
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif tabular-nums">
                    {formatVND(netMonthlyPayment)}
                  </div>
                  <span className="text-[11px] text-stone-300 block mt-1">
                    *Mức trả thực tế có thể thay đổi tùy gói vay và lịch giải ngân của từng ngân hàng.
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenConsultModal}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
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
