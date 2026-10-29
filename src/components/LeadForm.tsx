import React, { useState } from 'react';
import {
  Send,
  Phone,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  User,
  Mail,
  FileCheck,
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export const LeadForm: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Nhà phố hoàn thiện 1 trệt 2 lầu');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic validation
    if (!fullname.trim()) {
      setErrorMsg('Vui lòng nhập Họ và Tên của bạn.');
      return;
    }

    const cleanPhone = phone.replace(/[\s.-]/g, '');
    if (!cleanPhone || cleanPhone.length < 9 || cleanPhone.length > 11) {
      setErrorMsg('Vui lòng nhập số điện thoại hợp lệ để phòng kinh doanh liên hệ.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        const existingLeads = JSON.parse(localStorage.getItem('haven_living_leads') || '[]');
        existingLeads.push({
          fullname,
          phone,
          email,
          interest,
          note,
          date: new Date().toISOString(),
        });
        localStorage.setItem('haven_living_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  return (
    <section id="dang-ky" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-900/90 to-stone-900/95 border border-emerald-700/60 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif tracking-tight text-balance">
              Nhận Tư Vấn & Bảng Giá Haven Living
            </h2>
            <p className="mt-3 text-stone-300 text-xs sm:text-sm leading-relaxed text-balance">
              Quý khách vui lòng để lại thông tin bên dưới để nhận trọn bộ tài liệu pháp lý minh bạch, bảng giá chi tiết
              và chính sách ưu đãi chiết khấu 5% - 10% từ ban quản lý dự án.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-emerald-200">
              <span>Hoặc liên hệ Hotline trực tiếp:</span>
              <a
                href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                className="font-extrabold text-amber-300 hover:text-amber-200 bg-emerald-800/80 px-2.5 py-0.5 rounded-md inline-flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{PROJECT_DETAILS.hotlineDisplay}</span>
              </a>
            </div>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-emerald-900/60 border border-emerald-600 text-center max-w-lg mx-auto">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-950/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Đăng Ký Thành Công!</h3>
              <p className="text-xs sm:text-sm text-stone-200 mb-6 leading-relaxed">
                Cảm ơn <strong>{fullname}</strong> đã quan tâm đến dự án Khu Đô Thị Haven Living.
                Chuyên viên tư vấn sẽ liên hệ lại qua số <strong>{phone}</strong> trong vòng 15 phút để gửi trọn bộ thông tin và bảng giá.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFullname('');
                    setPhone('');
                    setNote('');
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 rounded-xl hover:bg-emerald-950 transition-colors"
                >
                  Gửi thông tin khác
                </button>
                <a
                  href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                  className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi Hotline Ngay</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/80 border border-red-500 text-red-200 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Họ và Tên <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="w-full bg-stone-900/90 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Số Điện Thoại <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                    <input
                      type="tel"
                      required
                      placeholder="0989 xxx xxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-900/90 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Email nhận tài liệu (Không bắt buộc)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-900/90 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Product Interest */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Sản phẩm quý khách quan tâm
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-stone-900/90 border border-emerald-700/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  >
                    <option value="Nhà phố hoàn thiện 1 trệt 2 lầu">Nhà phố hoàn thiện 1 trệt 2 lầu (Từ 2,3 tỷ)</option>
                    <option value="Shophouse kinh doanh mặt tiền">Shophouse kinh doanh mặt tiền</option>
                    <option value="Đất nền sổ đỏ">Đất nền phân lô</option>
                    <option value="Tư vấn gói vay ngân hàng">Tư vấn gói vay & lịch trả nợ</option>
                    <option value="Đăng ký đi xem thực tế dự án">Đăng ký xe tham quan thực tế miễn phí</option>
                  </select>
                </div>
              </div>

              {/* Note / Message */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Ghi chú tư vấn (Báo giá, câu hỏi thêm...)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-emerald-400" />
                  <textarea
                    rows={3}
                    placeholder="Ví dụ: Tôi muốn nhận bảng giá căn góc, quan tâm gói vay 20 năm..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-stone-900/90 border border-emerald-700/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-xl shadow-emerald-950/70 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <span>GỬI THÔNG TIN ĐĂNG KÝ NGAY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-400 text-center pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bảo mật 100% thông tin khách hàng · Tư vấn trực tiếp từ ban quản lý</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
