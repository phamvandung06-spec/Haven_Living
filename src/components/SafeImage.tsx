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
        className={`relative w-full ${aspectRatioClass} bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden rounded-xl border border-emerald-700/30 ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 w-12 h-12 rounded-full bg-emerald-700/50 flex items-center justify-center text-emerald-200 mb-3 backdrop-blur-sm border border-emerald-500/30">
          <Trees className="w-6 h-6 text-emerald-300" />
        </div>
        <p className="relative z-10 text-emerald-100 font-semibold text-sm max-w-xs leading-snug">
          {fallbackTitle || alt}
        </p>
        <span className="relative z-10 text-emerald-400/80 text-xs mt-1">
          Khu Đô Thị ARA
        </span>
      </div>
    );
  }

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-emerald-950/20 backdrop-blur-xs animate-pulse flex items-center justify-center z-10">
          <ImageIcon className="w-6 h-6 text-emerald-600/40" />
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
          className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-emerald-700 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md flex items-center gap-1.5 text-xs font-medium"
        >
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Phóng to</span>
        </button>
      )}
    </div>
  );
};
