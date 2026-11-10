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
        const existingLeads = JSON.parse(localStorage.getItem('ara_leads') || '[]');
        existingLeads.push({
          fullname,
          phone,
          email,
          interest,
          note,
          date: new Date().toISOString(),
        });
        localStorage.setItem('ara_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  return (
    <section id="dang-ky" className="py-20 bg-gradient-to-br from-[#011425] via-[#042d4a] via-[#054062] to-[#011627] text-white relative overflow-hidden">
      {/* Background decorations & ambient navy glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d59732_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0c5a8a]/30 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#054062]/40 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d59732]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#03233c]/95 via-[#04365a]/90 to-[#02182b]/95 border border-[#d59732]/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-[#011425]/80 backdrop-blur-xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif tracking-tight text-balance">
              Nhận Tư Vấn & Bảng Giá Khu Đô Thị ARA
            </h2>
            <p className="mt-3 text-stone-200 text-xs sm:text-sm leading-relaxed text-balance">
              Quý khách vui lòng để lại thông tin bên dưới để nhận trọn bộ tài liệu pháp lý minh bạch, bảng giá chi tiết
              và chính sách ưu đãi chiết khấu 5% - 10% từ ban quản lý dự án.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-300">
              <span>Hoặc liên hệ Hotline trực tiếp:</span>
              <a
                href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                className="font-extrabold text-[#f9df7b] hover:text-[#efa937] bg-[#021d33] border border-[#d59732]/40 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#d59732]" />
                <span>{PROJECT_DETAILS.hotlineDisplay}</span>
              </a>
            </div>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#021d33] to-[#011425] border border-[#d59732] text-center max-w-lg mx-auto shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-r from-[#d59732] to-[#efa937] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#d59732]/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Đăng Ký Thành Công!</h3>
              <p className="text-xs sm:text-sm text-stone-200 mb-6 leading-relaxed">
                Cảm ơn <strong>{fullname}</strong> đã quan tâm đến dự án Khu Đô Thị ARA.
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
                  className="px-5 py-2.5 text-xs font-bold text-[#f9df7b] bg-[#054062] border border-[#d59732]/40 rounded-full hover:bg-[#04365a] transition-colors"
                >
                  Gửi thông tin khác
                </button>
                <a
                  href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] rounded-full transition-colors inline-flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi Hotline Ngay</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-500 text-red-200 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Họ và Tên <span className="text-[#f9df7b]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d59732]" />
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="w-full bg-[#002f52] border border-[#054062] rounded-full pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#d59732] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Số Điện Thoại <span className="text-[#f9df7b]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d59732]" />
                    <input
                      type="tel"
                      required
                      placeholder="0989 xxx xxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#002f52] border border-[#054062] rounded-full pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#d59732] focus:border-transparent transition-all"
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
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d59732]" />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#002f52] border border-[#054062] rounded-full pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#d59732] focus:border-transparent transition-all"
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
                    className="w-full bg-[#002f52] border border-[#054062] rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d59732] focus:border-transparent transition-all"
                  >
                    <option value="Nhà phố hoàn thiện 1 trệt 2 lầu">Nhà phố hoàn thiện 1 trệt 2 lầu (Từ 2,3 tỷ)</option>
                    <option value="Shophouse kinh doanh mặt tiền">Shophouse kinh doanh mặt tiền</option>
                    <option value="Đất nền phân lô">Đất nền phân lô</option>
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
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#d59732]" />
                  <textarea
                    rows={3}
                    placeholder="Ví dụ: Tôi muốn nhận bảng giá căn góc, quan tâm gói vay 20 năm..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-[#002f52] border border-[#054062] rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#d59732] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full font-bold text-sm bg-gradient-to-r from-[#d59732] via-[#efa937] to-[#d59732] hover:brightness-110 text-white shadow-xl shadow-[#d59732]/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

              <div className="flex items-center justify-center gap-2 text-xs text-stone-300 text-center pt-2">
                <ShieldCheck className="w-4 h-4 text-[#d59732] shrink-0" />
                <span>Bảo mật 100% thông tin khách hàng · Tư vấn trực tiếp từ ban quản lý</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
