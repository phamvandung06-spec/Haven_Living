import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
}) => {
  const [scale, setScale] = React.useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setScale(1);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
      onClick={onClose}
    >
      {/* Top bar controls */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-md truncate">
          <h4 className="text-sm font-semibold tracking-wide text-white">{title}</h4>
          {caption && <p className="text-xs text-stone-300 truncate mt-0.5">{caption}</p>}
        </div>

        <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/60">
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(s + 0.3, 3))}
            className="p-1.5 hover:text-emerald-400 transition-colors"
            title="Phóng to"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(s - 0.3, 0.7))}
            className="p-1.5 hover:text-emerald-400 transition-colors"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale(1)}
            className="p-1.5 hover:text-emerald-400 transition-colors text-xs font-mono"
            title="Đặt lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-stone-700 mx-1"></div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:text-red-400 transition-colors"
            title="Đóng (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center overflow-auto p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          style={{ transform: `scale(${scale})` }}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
        />
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stone-400 text-xs tracking-wider uppercase pointer-events-none">
        Nhấn ESC hoặc nhấp ra ngoài để đóng
      </div>
    </div>
  );
};
