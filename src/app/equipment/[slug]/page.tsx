"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import OrderForm from "@/components/OrderForm";

const equipmentDetails = {
  "crane-liebherr-ltm-1090": {
    title: "Автокран Liebherr LTM 1090",
    description: `Мощный автокран Liebherr LTM 1090 грузоподъемностью 90 тонн предназначен для выполнения сложных монтажных работ на строительных площадках.

Технические характеристики:
• Максимальная грузоподъемность: 90 тонн
• Длина стрелы: 50 метров
• Максимальный вылет стрелы: 48 метров
• Высота подъема: до 76 метров с гуськом
• Габариты: 12.9 × 2.75 × 3.9 метров
• Колесная формула: 8×6×8

Преимущества:
• Современная система управления LICCON
• Телескопическая стрела с овоидным профилем
• Полный привод и подруливание всеми колесами
• Экономичный двигатель Mercedes-Benz
• Комфортабельная кабина крановщика`,
    price: "от 18 000 ₽/смена",
    imageUrl: "/images/crane-liebherr.jpg",
    features: [
      "Грузоподъемность 90 тонн",
      "Длина стрелы 50 м",
      "Система LICCON",
      "Полный привод",
      "Экономичный расход топлива",
      "Высокая маневренность"
    ],
    applications: [
      "Монтаж металлоконструкций",
      "Строительство зданий",
      "Установка оборудования",
      "Погрузочно-разгрузочные работы",
      "Монтаж башенных кранов"
    ]
  }
};

export default function EquipmentDetail() {
  const { slug } = useParams();
  const equipment = equipmentDetails[slug as keyof typeof equipmentDetails];
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  if (!equipment) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Техника не найдена</h1>
          <Link href="/equipment" className="text-yellow-400 hover:text-yellow-300">
            Вернуться в каталог
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link 
            href="/equipment"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Назад в каталог
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <Image
                src={equipment.imageUrl}
                alt={equipment.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">{equipment.title}</h1>
            <p className="text-2xl text-yellow-400 font-semibold mb-6">{equipment.price}</p>
            
            <div className="prose prose-invert max-w-none mb-8">
              <p className="whitespace-pre-line">{equipment.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Особенности:</h3>
                <ul className="space-y-2">
                  {equipment.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Применение:</h3>
                <ul className="space-y-2">
                  {equipment.applications.map((app, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOrderFormOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full text-lg"
            >
              Заказать технику
            </motion.button>
          </motion.div>
        </div>
      </div>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        equipmentTitle={equipment.title}
      />
    </main>
  );
} 