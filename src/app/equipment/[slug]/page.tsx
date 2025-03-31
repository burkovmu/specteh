"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import OrderForm from "@/components/OrderForm";
import ImageViewer from "@/components/ImageViewer";

interface Equipment {
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  imageUrl: string;
  slug: string;
  category: string;
  specifications: Array<{
    name: string;
    value: string;
  }>;
}

const equipmentData: Equipment[] = [
  {
    title: "Автокран Liebherr LTM 1090",
    description: "Мощный автокран грузоподъемностью 90 тонн для выполнения сложных монтажных работ. Оснащен современной системой управления LICCON.",
    fullDescription: `
      Автокран Liebherr LTM 1090 - это современная машина, предназначенная для выполнения сложных монтажных работ.
      
      Технические характеристики:
      • Грузоподъемность: 90 тонн
      • Длина стрелы: 50 метров
      • Максимальный вылет стрелы: 48 метров
      • Высота подъема: до 76 метров
      • Система управления: LICCON
      
      Преимущества:
      • Высокая мобильность и маневренность
      • Современная система безопасности
      • Точное управление всеми операциями
      • Экономичный расход топлива
      • Комфортная кабина оператора
      
      Области применения:
      • Монтаж промышленного оборудования
      • Строительство высотных зданий
      • Установка башенных кранов
      • Погрузочно-разгрузочные работы
    `,
    price: "от 18 000 ₽/смена",
    imageUrl: "/images/crane-liebherr.jpg",
    slug: "crane-liebherr-ltm-1090",
    category: "Краны и автовышки",
    specifications: [
      { name: "Грузоподъемность", value: "90 тонн" },
      { name: "Длина стрелы", value: "50 м" },
      { name: "Высота подъема", value: "76 м" },
      { name: "Колесная формула", value: "8x8" },
      { name: "Мощность двигателя", value: "450 л.с." }
    ]
  },
  {
    title: "Автокран Ивановец КС-45717",
    description: "Надежный автокран грузоподъемностью 25 тонн. Идеален для работы в городских условиях благодаря компактным размерам.",
    fullDescription: `
      Автокран Ивановец КС-45717 - надежная и маневренная машина для выполнения грузоподъемных работ в условиях плотной городской застройки.
      
      Технические характеристики:
      • Грузоподъемность: 25 тонн
      • Длина стрелы: 21.7 метров
      • Максимальный вылет стрелы: 19.7 метров
      • Высота подъема: до 21.9 метров
      • Базовое шасси: КАМАЗ-65115
      
      Преимущества:
      • Компактные габариты
      • Высокая маневренность
      • Простота управления
      • Надежность конструкции
      • Доступное техническое обслуживание
      
      Области применения:
      • Строительно-монтажные работы
      • Погрузка-разгрузка материалов
      • Монтаж оборудования
      • Работа в стесненных условиях
    `,
    price: "от 12 000 ₽/смена",
    imageUrl: "/images/crane-ivanovec.jpg",
    slug: "crane-ivanovec-ks45717",
    category: "Краны и автовышки",
    specifications: [
      { name: "Грузоподъемность", value: "25 тонн" },
      { name: "Длина стрелы", value: "21.7 м" },
      { name: "Высота подъема", value: "21.9 м" },
      { name: "Колесная формула", value: "6x4" },
      { name: "Мощность двигателя", value: "300 л.с." }
    ]
  },
  {
    title: "Экскаватор Volvo EC220D",
    description: "Гусеничный экскаватор с мощным двигателем и высокой производительностью. Отлично подходит для земляных работ любой сложности.",
    fullDescription: `
      Экскаватор Volvo EC220D - современная машина, сочетающая в себе высокую производительность, экономичность и комфорт оператора.
      
      Технические характеристики:
      • Эксплуатационная масса: 22.1-23.2 тонн
      • Объем ковша: 0.9-1.55 м³
      • Глубина копания: до 6.7 метров
      • Радиус копания: до 9.9 метров
      • Двигатель: Volvo D6E
      
      Преимущества:
      • Высокая производительность
      • Экономичный расход топлива
      • Усиленная ходовая часть
      • Комфортная кабина
      • Простое техобслуживание
      
      Области применения:
      • Земляные работы
      • Прокладка коммуникаций
      • Дорожное строительство
      • Карьерные работы
    `,
    price: "от 14 000 ₽/смена",
    imageUrl: "/images/excavator-volvo.jpg",
    slug: "excavator-volvo-ec220d",
    category: "Экскаваторы",
    specifications: [
      { name: "Эксплуатационная масса", value: "22.1-23.2 т" },
      { name: "Объем ковша", value: "0.9-1.55 м³" },
      { name: "Глубина копания", value: "6.7 м" },
      { name: "Мощность двигателя", value: "175 л.с." },
      { name: "Ширина гусениц", value: "600 мм" }
    ]
  },
  {
    title: "Бульдозер Б10М",
    description: "Мощный промышленный бульдозер для планировки площадок, перемещения грунта и строительных материалов.",
    fullDescription: `
      Бульдозер Б10М - надежная машина российского производства для выполнения широкого спектра землеройных работ.
      
      Технические характеристики:
      • Эксплуатационная масса: 21 тонна
      • Ширина отвала: 3.31 метра
      • Высота отвала: 1.31 метра
      • Объем призмы волочения: 4.75 м³
      • Двигатель: ЯМЗ-236
      
      Преимущества:
      • Высокая проходимость
      • Простота конструкции
      • Ремонтопригодность
      • Мощный отвал
      • Надежная трансмиссия
      
      Области применения:
      • Планировка площадок
      • Перемещение грунта
      • Строительство дорог
      • Разработка карьеров
    `,
    price: "от 12 000 ₽/смена",
    imageUrl: "/images/bulldozer-b10m.jpg",
    slug: "bulldozer-b10m",
    category: "Бульдозеры",
    specifications: [
      { name: "Эксплуатационная масса", value: "21 т" },
      { name: "Ширина отвала", value: "3.31 м" },
      { name: "Мощность двигателя", value: "180 л.с." },
      { name: "Объем отвала", value: "4.75 м³" },
      { name: "Тип ходовой части", value: "Гусеничный" }
    ]
  },
  {
    title: "Самосвал МАЗ-5516",
    description: "Надежный самосвал грузоподъемностью 20 тонн для перевозки сыпучих грузов и строительных материалов.",
    fullDescription: `
      Самосвал МАЗ-5516 - проверенный временем грузовой автомобиль для перевозки различных строительных материалов.
      
      Технические характеристики:
      • Грузоподъемность: 20 тонн
      • Объем кузова: 16 м³
      • Колесная формула: 6x4
      • Тип кузова: Самосвальный
      • Двигатель: ЯМЗ-238
      
      Преимущества:
      • Высокая надежность
      • Простота обслуживания
      • Усиленная рама
      • Вместительный кузов
      • Экономичность
      
      Области применения:
      • Перевозка сыпучих материалов
      • Вывоз строительного мусора
      • Доставка щебня и песка
      • Работа в карьерах
    `,
    price: "от 9 000 ₽/смена",
    imageUrl: "/images/maz-5516.jpg",
    slug: "dump-truck-maz5516",
    category: "Самосвалы",
    specifications: [
      { name: "Грузоподъемность", value: "20 т" },
      { name: "Объем кузова", value: "16 м³" },
      { name: "Колесная формула", value: "6x4" },
      { name: "Мощность двигателя", value: "330 л.с." },
      { name: "Тип топлива", value: "Дизель" }
    ]
  },
  {
    title: "Автовышка ПСС-131.17Э",
    description: "Автогидроподъемник с высотой подъема 17 метров для выполнения высотных монтажных и ремонтных работ.",
    fullDescription: `
      Автовышка ПСС-131.17Э - компактная и маневренная машина для проведения высотных работ в городских условиях.
      
      Технические характеристики:
      • Высота подъема: 17 метров
      • Грузоподъемность люльки: 250 кг
      • Вылет стрелы: 8.5 метров
      • Угол поворота: 360°
      • Базовое шасси: ГАЗ-3309
      
      Преимущества:
      • Компактные размеры
      • Легкость управления
      • Надежная гидравлика
      • Устойчивость
      • Безопасность работы
      
      Области применения:
      • Монтаж рекламных конструкций
      • Обслуживание электросетей
      • Фасадные работы
      • Обрезка деревьев
    `,
    price: "от 8 000 ₽/смена",
    imageUrl: "/images/aerial-platform-pss.jpg",
    slug: "aerial-platform-pss131",
    category: "Краны и автовышки",
    specifications: [
      { name: "Высота подъема", value: "17 м" },
      { name: "Грузоподъемность люльки", value: "250 кг" },
      { name: "Вылет стрелы", value: "8.5 м" },
      { name: "Угол поворота", value: "360°" },
      { name: "Размер люльки", value: "0.8x1.4 м" }
    ]
  },
  {
    title: "Фронтальный погрузчик SDLG LG936L",
    description: "Универсальный погрузчик с объемом ковша 1.8 м³ для погрузочно-разгрузочных работ и перемещения сыпучих материалов.",
    fullDescription: `
      Фронтальный погрузчик SDLG LG936L - надежная и производительная машина для выполнения различных погрузочных работ.
      
      Технические характеристики:
      • Грузоподъемность: 3 тонны
      • Объем ковша: 1.8 м³
      • Высота разгрузки: 2.96 метра
      • Время подъема: 5.5 секунд
      • Радиус поворота: 5.3 метра
      
      Преимущества:
      • Высокая маневренность
      • Просторная кабина
      • Надежная трансмиссия
      • Легкость управления
      • Доступное обслуживание
      
      Области применения:
      • Погрузка сыпучих материалов
      • Работа на складах
      • Уборка территории
      • Строительные работы
    `,
    price: "от 10 000 ₽/смена",
    imageUrl: "/images/loader-sdlg.jpg",
    slug: "loader-sdlg-lg936l",
    category: "Погрузчики",
    specifications: [
      { name: "Грузоподъемность", value: "3 т" },
      { name: "Объем ковша", value: "1.8 м³" },
      { name: "Высота разгрузки", value: "2.96 м" },
      { name: "Мощность двигателя", value: "125 л.с." },
      { name: "Эксплуатационная масса", value: "10.7 т" }
    ]
  },
  {
    title: "Каток дорожный BOMAG BW 213",
    description: "Грунтовый виброкаток для уплотнения различных типов грунта и асфальтобетонных смесей.",
    fullDescription: `
      Каток BOMAG BW 213 - современная уплотнительная техника для дорожного строительства и земляных работ.
      
      Технические характеристики:
      • Эксплуатационная масса: 12.5 тонн
      • Ширина уплотнения: 2.13 метра
      • Частота вибрации: 30/40 Гц
      • Амплитуда: 1.9/0.9 мм
      • Линейная нагрузка: 35.5 кг/см
      
      Преимущества:
      • Высокая эффективность уплотнения
      • Система контроля качества
      • Комфортная кабина
      • Экономичный двигатель
      • Простота обслуживания
      
      Области применения:
      • Строительство дорог
      • Уплотнение грунта
      • Ландшафтные работы
      • Строительство площадок
    `,
    price: "от 11 000 ₽/смена",
    imageUrl: "/images/roller-bomag.jpg",
    slug: "roller-bomag-bw213",
    category: "Катки",
    specifications: [
      { name: "Эксплуатационная масса", value: "12.5 т" },
      { name: "Ширина уплотнения", value: "2.13 м" },
      { name: "Частота вибрации", value: "30/40 Гц" },
      { name: "Мощность двигателя", value: "155 л.с." },
      { name: "Скорость движения", value: "0-12 км/ч" }
    ]
  },
  {
    title: "Автогрейдер ГС-14.02",
    description: "Современный автогрейдер для профилирования дорог, планировки площадок и перемещения грунта.",
    fullDescription: `
      Автогрейдер ГС-14.02 - надежная машина для выполнения планировочных и профилировочных работ.
      
      Технические характеристики:
      • Эксплуатационная масса: 14.7 тонн
      • Ширина отвала: 3.74 метра
      • Высота отвала: 0.62 метра
      • Угол поворота отвала: 360°
      • Скорость движения: до 39 км/ч
      
      Преимущества:
      • Точность управления отвалом
      • Высокая маневренность
      • Надежная гидравлика
      • Комфортная кабина
      • Простота обслуживания
      
      Области применения:
      • Строительство дорог
      • Планировка площадок
      • Содержание дорог
      • Снегоуборочные работы
    `,
    price: "от 13 000 ₽/смена",
    imageUrl: "/images/grader-gs14.jpg",
    slug: "grader-gs14",
    category: "Грейдеры",
    specifications: [
      { name: "Эксплуатационная масса", value: "14.7 т" },
      { name: "Ширина отвала", value: "3.74 м" },
      { name: "Мощность двигателя", value: "160 л.с." },
      { name: "Колесная формула", value: "1x2x3" },
      { name: "Максимальная скорость", value: "39 км/ч" }
    ]
  },
  {
    title: "Гидробур Delta RD-15",
    description: "Мощный гидравлический бур для бурения скважин различного диаметра в грунтах разной плотности.",
    fullDescription: `
      Гидробур Delta RD-15 - эффективное навесное оборудование для проведения буровых работ.
      
      Технические характеристики:
      • Крутящий момент: 1500 Нм
      • Диаметр бурения: до 500 мм
      • Глубина бурения: до 3 метров
      • Давление масла: 210 бар
      • Расход масла: 45-75 л/мин
      
      Преимущества:
      • Высокая производительность
      • Надежная конструкция
      • Различные типы шнеков
      • Простота монтажа
      • Минимальное обслуживание
      
      Области применения:
      • Бурение под столбы
      • Установка ограждений
      • Посадка деревьев
      • Геологические изыскания
    `,
    price: "от 7 000 ₽/смена",
    imageUrl: "/images/auger-delta.jpg",
    slug: "auger-delta-rd15",
    category: "Навесное оборудование",
    specifications: [
      { name: "Крутящий момент", value: "1500 Нм" },
      { name: "Диаметр бурения", value: "до 500 мм" },
      { name: "Глубина бурения", value: "до 3 м" },
      { name: "Давление масла", value: "210 бар" },
      { name: "Расход масла", value: "45-75 л/мин" }
    ]
  }
];

export default function EquipmentPage() {
  const params = useParams();
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  
  const equipment = equipmentData.find(item => item.slug === params.slug);
  
  if (!equipment) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Техника не найдена</h1>
          <p className="text-center mb-8">
            <Link href="/equipment" className="text-yellow-400 hover:text-yellow-300">
              Вернуться к каталогу
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/equipment" className="text-yellow-400 hover:text-yellow-300">
            ← Вернуться к каталогу
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden relative group cursor-pointer" onClick={() => setIsImageViewerOpen(true)}>
              <img
                src={equipment.imageUrl}
                alt={equipment.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">{equipment.title}</h1>
            <p className="text-2xl font-semibold text-yellow-400 mb-6">
              {equipment.price}
            </p>
            <p className="text-gray-300 mb-8">{equipment.description}</p>
            
            <button
              onClick={() => setIsOrderFormOpen(true)}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-colors shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
            >
              Заказать
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">Технические характеристики</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/5">
              {equipment.specifications?.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between py-3 border-b border-gray-700/50 last:border-0"
                >
                  <span className="text-gray-300">{spec.name}</span>
                  <span className="font-semibold text-yellow-400">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">Подробное описание</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/5">
              <div className="prose prose-invert">
                {equipment.fullDescription?.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <OrderForm
          isOpen={isOrderFormOpen}
          onClose={() => setIsOrderFormOpen(false)}
          equipmentTitle={equipment.title}
          isSimpleForm={false}
        />

        <ImageViewer 
          isOpen={isImageViewerOpen}
          onClose={() => setIsImageViewerOpen(false)}
          imageUrl={equipment.imageUrl}
          title={equipment.title}
        />
      </div>
    </main>
  );
} 