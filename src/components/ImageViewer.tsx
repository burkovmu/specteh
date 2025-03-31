"use client";

import Image from "next/image";

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function ImageViewer({ isOpen, onClose, imageUrl, title }: ImageViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-200"
         onClick={onClose}>
      <button
        className="absolute top-4 right-4 z-[60] text-white/70 hover:text-yellow-400 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div 
        className="w-full max-w-4xl max-h-[85vh] relative shadow-xl rounded-lg overflow-hidden bg-black/70 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 border border-white/10 rounded-lg z-10 pointer-events-none"></div>
        
        <div className="relative w-full h-[80vh]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
            quality={90}
            sizes="100vw"
            priority={true}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/hero-bg.jpg';
            }}
          />
        </div>
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm py-3 px-4 border-t border-white/10">
            <p className="text-white/90 text-sm">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
} 