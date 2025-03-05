"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import EquipmentCard from "@/components/EquipmentCard";

const equipmentData = [
  {
    title: "Автокран Liebherr LTM 1090",
    description: "Мощный автокран грузоподъемностью 90 тонн для выполнения сложных монтажных работ. Оснащен современной системой управления LICCON.",
    price: "от 18 000 ₽/смена",
    imageUrl: "/images/crane-liebherr.jpg",
    slug: "crane-liebherr-ltm-1090",
    category: "Краны и автовышки"
  },
  {
    title: "Автокран Ивановец КС-45717",
    description: "Надежный автокран грузоподъемностью 25 тонн. Идеален для работы в городских условиях благодаря компактным размерам.",
    price: "от 12 000 ₽/смена",
    imageUrl: "/images/crane-ivanovec.jpg",
    slug: "crane-ivanovec-ks45717",
    category: "Краны и автовышки"
  },
  {
    title: "Экскаватор Volvo EC220D",
    description: "Гусеничный экскаватор с мощным двигателем и высокой производительностью. Отлично подходит для земляных работ любой сложности.",
    price: "от 14 000 ₽/смена",
    imageUrl: "/images/excavator-volvo.jpg",
    slug: "excavator-volvo-ec220d",
    category: "Экскаваторы"
  },
  {
    title: "Бульдозер Б10М",
    description: "Мощный промышленный бульдозер для планировки площадок, перемещения грунта и строительных материалов.",
    price: "от 12 000 ₽/смена",
    imageUrl: "/images/bulldozer-b10m.jpg",
    slug: "bulldozer-b10m",
    category: "Бульдозеры"
  },
  {
    title: "Самосвал МАЗ-5516",
    description: "Надежный самосвал грузоподъемностью 20 тонн для перевозки сыпучих грузов и строительных материалов.",
    price: "от 9 000 ₽/смена",
    imageUrl: "/images/maz-5516.jpg",
    slug: "dump-truck-maz5516",
    category: "Самосвалы"
  },
  {
    title: "Автовышка ПСС-131.17Э",
    description: "Автогидроподъемник с высотой подъема 17 метров для выполнения высотных монтажных и ремонтных работ.",
    price: "от 8 000 ₽/смена",
    imageUrl: "/images/aerial-platform-pss.jpg",
    slug: "aerial-platform-pss131",
    category: "Краны и автовышки"
  },
  {
    title: "Фронтальный погрузчик SDLG LG936L",
    description: "Универсальный погрузчик с объемом ковша 1.8 м³ для погрузочно-разгрузочных работ и перемещения сыпучих материалов.",
    price: "от 10 000 ₽/смена",
    imageUrl: "/images/loader-sdlg.jpg",
    slug: "loader-sdlg-lg936l",
    category: "Погрузчики"
  },
  {
    title: "Каток дорожный BOMAG BW 213",
    description: "Грунтовый виброкаток для уплотнения различных типов грунта и асфальтобетонных смесей.",
    price: "от 11 000 ₽/смена",
    imageUrl: "/images/roller-bomag.jpg",
    slug: "roller-bomag-bw213",
    category: "Катки"
  },
  {
    title: "Автогрейдер ГС-14.02",
    description: "Современный автогрейдер для профилирования дорог, планировки площадок и перемещения грунта.",
    price: "от 13 000 ₽/смена",
    imageUrl: "/images/grader-gs14.jpg",
    slug: "grader-gs14",
    category: "Грейдеры"
  },
  {
    title: "Гидробур Delta RD-15",
    description: "Мощный гидравлический бур для бурения скважин различного диаметра в грунтах разной плотности.",
    price: "от 7 000 ₽/смена",
    imageUrl: "/images/auger-delta.jpg",
    slug: "auger-delta-rd15",
    category: "Навесное оборудование"
  }
];

const categories = [
  "Все",
  "Краны и автовышки",
  "Экскаваторы",
  "Самосвалы",
  "Бульдозеры",
  "Погрузчики",
  "Катки",
  "Грейдеры",
  "Навесное оборудование"
];

export default function Equipment() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const filteredEquipment = equipmentData.filter(item => {
    const matchesCategory = activeCategory === "Все" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Каталог спецтехники
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Предлагаем в аренду современную строительную и грузовую технику от ведущих производителей. 
            Вся техника проходит регулярное обслуживание и готова к работе.
          </p>
        </motion.div>

        {/* Поиск */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск техники..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Фильтры */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Каталог */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEquipment.map((item, index) => (
            <EquipmentCard
              key={index}
              {...item}
            />
          ))}
          {filteredEquipment.length === 0 && (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl text-gray-400">
                По вашему запросу ничего не найдено
              </h3>
            </div>
          )}
        </div>

        {/* Информационный блок */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Условия аренды спецтехники</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Что входит в стоимость:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Доставка техники на объект</li>
                <li>• Работа опытного оператора</li>
                <li>• Топливо и расходные материалы</li>
                <li>• Техническое обслуживание</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Преимущества работы с нами:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Техника от ведущих производителей</li>
                <li>• Круглосуточная техподдержка</li>
                <li>• Гибкие условия оплаты</li>
                <li>• Скидки на длительную аренду</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 