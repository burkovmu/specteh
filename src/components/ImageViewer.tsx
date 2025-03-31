"use client";

import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        onClick={onClose}
      >
        <motion.button
          className="absolute top-4 right-4 z-[60] bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>

        <div className="w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-lg relative" onClick={(e) => e.stopPropagation()}>
          <motion.div
            layoutId={`image-${imageUrl}`}
            className="relative w-full h-[80vh]"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
              quality={100}
              sizes="100vw"
              priority={true}
              onError={(e) => {
                // Резервное решение в случае ошибки загрузки
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/hero-bg.jpg';
              }}
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 backdrop-blur-sm">
            <h3 className="text-white text-lg font-medium">{title}</h3>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 