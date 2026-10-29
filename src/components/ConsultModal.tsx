import React, { useState, useEffect } from 'react';
import { X, Send, Phone, CheckCircle, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose }) => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Nhà phố hoàn thiện 1 trệt 2 lầu');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullname.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    const cleanPhone = phone.replace(/[\s.-]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      setErrorMsg('Vui lòng nhập số điện thoại hợp lệ.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-stone-900 border border-emerald-600/50 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full bg-stone-800/80 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Đăng Ký Thành Công!</h3>
            <p className="text-xs sm:text-sm text-stone-300 mb-6 leading-relaxed">
              Cảm ơn <strong>{fullname}</strong> đã gửi yêu cầu. Bộ phận tư vấn của Khu Đô Thị ARA
              sẽ gọi đến số <strong>{phone}</strong> để cung cấp bảng giá và chính sách ưu đãi trong ít phút.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PROJECT_DETAILS.hotline.replace(/\s+/g, '')}`}
                className="py-3 px-5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi Hotline: {PROJECT_DETAILS.hotlineDisplay}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 text-xs font-bold text-stone-300 bg-stone-800 rounded-xl hover:bg-stone-700 transition-colors"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tài Liệu Khu Đô Thị ARA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Đăng Ký Nhận Báo Giá & Ưu Đãi
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Nhận bảng giá, tài liệu dự án và lịch trình xem sa bàn thực tế.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 mb-4 rounded-lg bg-red-950/80 border border-red-500 text-red-200 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Họ và tên của bạn <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Số điện thoại nhận báo giá <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0989 xxx xxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Nhu cầu quan tâm
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                >
                  <option value="Nhà phố hoàn thiện 1 trệt 2 lầu">Nhà phố hoàn thiện (Từ 2,3 tỷ)</option>
                  <option value="Shophouse kinh doanh">Shophouse thương mại</option>
                  <option value="Đất nền sổ đỏ">Đất nền sổ đỏ</option>
                  <option value="Đăng ký đi xem thực tế">Đón xe tham quan thực tế dự án</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Đang xử lý...</span>
                  ) : (
                    <>
                      <span>GỬI YÊU CẦU BÁO GIÁ</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cam kết bảo mật thông tin tuyệt đối</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
