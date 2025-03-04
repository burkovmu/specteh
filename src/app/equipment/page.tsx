"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import EquipmentCard from "@/components/EquipmentCard";

const equipmentData = [
  {
    title: "Автокран Liebherr LTM 1090",
    description: "Мощный автокран грузоподъемностью 90 тонн. Идеально подходит для монтажных работ любой сложности. Оснащен современной системой управления и безопасности.",
    price: "от 18 000 ₽/смена",
    imageUrl: "/images/crane-liebherr.jpg",
    slug: "crane-liebherr-ltm-1090",
    category: "cranes"
  },
  {
    title: "Экскаватор-погрузчик JCB 3CX",
    description: "Универсальный экскаватор-погрузчик для земляных и погрузочных работ. Глубина копания до 5.97 м, объем фронтального ковша 1.1 м³.",
    price: "от 12 500 ₽/смена",
    imageUrl: "/images/excavator-jcb.jpg",
    slug: "excavator-jcb-3cx",
    category: "excavators"
  },
  {
    title: "Бульдозер Komatsu D65",
    description: "Мощный бульдозер для планировки площадок и перемещения грунта. Мощность двигателя 205 л.с., объем отвала 3.89 м³.",
    price: "от 15 000 ₽/смена",
    imageUrl: "/images/bulldozer-komatsu.jpg",
    slug: "bulldozer-komatsu-d65",
    category: "bulldozers"
  },
  {
    title: "Самосвал КАМАЗ 6520",
    description: "Надежный самосвал грузоподъемностью 20 тонн. Идеален для перевозки сыпучих материалов и строительного мусора.",
    price: "от 10 000 ₽/смена",
    imageUrl: "/images/kamaz-6520.jpg",
    slug: "dump-truck-kamaz-6520",
    category: "trucks"
  },
  {
    title: "Автовышка ВИПО-36",
    description: "Телескопическая автовышка с высотой подъема 36 метров. Применяется для высотных монтажных и ремонтных работ.",
    price: "от 14 000 ₽/смена",
    imageUrl: "/images/aerial-platform.jpg",
    slug: "aerial-platform-vipo-36",
    category: "cranes"
  },
  {
    title: "Гусеничный экскаватор Hitachi ZX330",
    description: "Мощный экскаватор для крупных земляных работ. Эксплуатационная масса 33 тонны, объем ковша 1.4 м³.",
    price: "от 16 000 ₽/смена",
    imageUrl: "/images/excavator-hitachi.jpg",
    slug: "excavator-hitachi-zx330",
    category: "excavators"
  },
  {
    title: "Автокран Галичанин КС-55713",
    description: "Надежный автокран грузоподъемностью 25 тонн. Длина стрелы 21.7 м. Идеален для работы в стесненных условиях городской застройки.",
    price: "от 12 000 ₽/смена",
    imageUrl: "/images/crane-galichanin.jpg",
    slug: "crane-galichanin-ks55713",
    category: "cranes"
  },
  {
    title: "Фронтальный погрузчик XCMG LW300FN",
    description: "Универсальный погрузчик с объемом ковша 1.8 м³. Грузоподъемность 3 тонны. Отлично подходит для погрузочно-разгрузочных работ.",
    price: "от 11 000 ₽/смена",
    imageUrl: "/images/loader-xcmg.jpg",
    slug: "loader-xcmg-lw300fn",
    category: "loaders"
  },
  {
    title: "Мини-экскаватор Komatsu PC55MR",
    description: "Компактный экскаватор для работы в ограниченном пространстве. Глубина копания 3.8 м, ширина ковша 0.4 м.",
    price: "от 9 000 ₽/смена",
    imageUrl: "/images/mini-excavator-komatsu.jpg",
    slug: "mini-excavator-komatsu-pc55",
    category: "excavators"
  },
  {
    title: "Каток дорожный HAMM HD 12 VV",
    description: "Двухвальцовый виброкаток массой 3 тонны. Идеален для уплотнения асфальта и других покрытий на небольших площадях.",
    price: "от 8 000 ₽/смена",
    imageUrl: "/images/roller-hamm.jpg",
    slug: "roller-hamm-hd12",
    category: "rollers"
  },
  {
    title: "Автогрейдер ДЗ-98",
    description: "Мощный грейдер для планировки и профилирования дорог. Ширина отвала 3.7 м, мощность двигателя 180 л.с.",
    price: "от 14 000 ₽/смена",
    imageUrl: "/images/grader-dz98.jpg",
    slug: "grader-dz98",
    category: "graders"
  },
  {
    title: "Гидромолот JCB HM033T",
    description: "Мощный гидромолот для разрушения бетона, асфальта и скальных пород. Энергия удара 3000 Дж.",
    price: "от 5 000 ₽/смена",
    imageUrl: "/images/hammer-jcb.jpg",
    slug: "hammer-jcb-hm033t",
    category: "attachments"
  }
];

const categories = [
  { id: "all", name: "Все" },
  { id: "cranes", name: "Краны" },
  { id: "excavators", name: "Экскаваторы" },
  { id: "trucks", name: "Самосвалы" },
  { id: "bulldozers", name: "Бульдозеры" },
  { id: "loaders", name: "Погрузчики" },
  { id: "rollers", name: "Катки" },
  { id: "graders", name: "Грейдеры" },
  { id: "attachments", name: "Навесное оборудование" }
];

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEquipment = equipmentData.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
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
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
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