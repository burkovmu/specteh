"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ImageViewer from "./ImageViewer";
import Image from "next/image";

interface EquipmentCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  slug: string;
}

export default function EquipmentCard({ title, description, price, imageUrl, slug }: EquipmentCardProps) {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-w-16 aspect-h-9 cursor-pointer group h-[220px]" onClick={() => setIsImageViewerOpen(true)}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={slug === "crane-liebherr-ltm-1090" || slug === "excavator-volvo-ec220d"}
          quality={80}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-yellow-400 font-medium">{price}</span>
          <Link 
            href={`/equipment/${slug}`}
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Подробнее
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <ImageViewer 
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        imageUrl={imageUrl}
        title={title}
      />
    </motion.div>
  );
} 