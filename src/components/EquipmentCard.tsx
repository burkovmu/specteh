"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface EquipmentCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  slug: string;
}

export default function EquipmentCard({ title, description, price, imageUrl, slug }: EquipmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
    </motion.div>
  );
} 