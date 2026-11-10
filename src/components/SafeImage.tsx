import React, { useState } from 'react';
import { Trees, Image as ImageIcon, ZoomIn } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  allowZoom?: boolean;
  onZoom?: () => void;
  aspectRatioClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Khu Đô Thị ARA',
  fallbackTitle,
  allowZoom = false,
  onZoom,
  aspectRatioClass = 'aspect-video',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`relative w-full ${aspectRatioClass} bg-gradient-to-br from-[#002f52] via-[#04365a] to-[#002f52] flex flex-col items-center justify-center p-6 text-center overflow-hidden rounded-xl border border-[#d59732]/30 ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d59732_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 w-12 h-12 rounded-full bg-[#054062] flex items-center justify-center text-[#f9df7b] mb-3 backdrop-blur-sm border border-[#d59732]/30">
          <Trees className="w-6 h-6 text-[#d59732]" />
        </div>
        <p className="relative z-10 text-white font-semibold text-sm max-w-xs leading-snug">
          {fallbackTitle || alt}
        </p>
        <span className="relative z-10 text-[#f9df7b] text-xs mt-1 font-medium">
          Khu Đô Thị ARA
        </span>
      </div>
    );
  }

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs animate-pulse flex items-center justify-center z-10">
          <ImageIcon className="w-6 h-6 text-[#d59732]/50" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
          allowZoom ? 'group-hover:scale-105 cursor-pointer' : ''
        }`}
        onClick={allowZoom && onZoom ? onZoom : undefined}
        {...props}
      />
      {allowZoom && onZoom && (
        <button
          type="button"
          onClick={onZoom}
          aria-label="Xem ảnh phóng to"
          className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#d59732] text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md flex items-center gap-1.5 text-xs font-medium"
        >
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Phóng to</span>
        </button>
      )}
    </div>
  );
};
