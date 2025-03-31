"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import OrderForm from "@/components/OrderForm";
import Image from "next/image";

// Запасное изображение для фона
const FALLBACK_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';

export default function Home() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const bgImageRef = useRef<HTMLImageElement>(null);

  // Индикация завершения маунтинга компонента
  useEffect(() => {
    setIsMounted(true);
    // Устанавливаем таймаут, после которого показываем контент в любом случае
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Обработка события загрузки страницы
  useEffect(() => {
    if (!isMounted) return;
    
    // Для предварительной загрузки фонового изображения
    const bgImage = new window.Image();
    bgImage.src = "/images/hero-bg.jpg";
    bgImage.onload = () => setIsLoaded(true);
    
    // Очистка
    return () => {
      bgImage.onload = null;
    };
  }, [isMounted]);

  // Если компонент еще не загружен, показываем плейсхолдер
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-yellow-400 text-xl">Загрузка...</div>
      </div>
    );
  }

  return (
    <main className={`min-h-screen bg-black text-white ${isLoaded ? 'content-fade-in' : ''}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0">
          {/* Используем div-плейсхолдер для избежания скачков */}
          <div className="absolute inset-0 bg-black"></div>
          
          <Image
            src="/images/hero-bg.jpg"
            alt="УРАЛСТРОЙТЕХ - строительная техника в Екатеринбурге"
            fill
            ref={bgImageRef}
            placeholder="blur"
            blurDataURL={FALLBACK_IMAGE}
            className={`object-cover object-center brightness-[0.3] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            priority={true}
            quality={80}
            sizes="100vw"
            onLoadingComplete={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 mix-blend-multiply"></div>
        </div>

        {/* Контент */}
        <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
          <div className={`text-center ${isLoaded ? 'content-fade-in' : 'opacity-0'}`}>
            <div className="mb-8">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 flex flex-col items-center">
                <div>
                  <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 tracking-tight leading-tight font-black-ops uppercase">
                    Аренда спецтехники
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                    Профессиональная строительная техника для решения любых задач вашего бизнеса
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/equipment"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-10 rounded-full text-lg inline-block shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
                >
                  Заказать технику
                </Link>
                <Link
                  href="/contacts"
                  className="bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-10 rounded-full text-lg inline-block hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Скролл индикатор */}
        <div
          className={`absolute bottom-10 z-10 animate-bounce ${isLoaded ? 'opacity-50' : 'opacity-0'} transition-opacity duration-500`}
        >
          <ChevronDownIcon className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent opacity-50"></div>
        
        {/* Декоративный элемент */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)]"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 pt-10"
          >
            Наша техника
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center mb-20 text-gray-400 max-w-3xl mx-auto"
          >
            Современный парк строительной техники УРАЛСТРОЙТЕХ для выполнения любых строительных и монтажных работ
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {equipmentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300 border-l-2 border-transparent hover:border-l-yellow-400"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-white group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                  <Link 
                    href={`/equipment?category=${encodeURIComponent(item.category)}`}
                    className="inline-flex items-center text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300"
                  >
                    <span>Подробнее</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500"
          >
            Почему выбирают нас
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-16 shadow-[0_0_100px_rgba(251,191,36,0.3)] relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Готовы начать работу?
          </h2>
          <p className="text-black text-xl mb-12 opacity-90">
            Свяжитесь с нами для получения подробной консультации и расчета стоимости
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrderFormOpen(true)}
            className="bg-black text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Заказать технику
          </motion.button>
        </motion.div>
      </section>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        isSimpleForm={false}
      />
    </main>
  );
}

const equipmentItems = [
  {
    id: "cranes",
    title: "Краны и автовышки",
    description: "Автокраны и автовышки различной грузоподъемности для монтажных и высотных работ",
    imageUrl: "/images/crane-liebherr.jpg",
    category: "Краны и автовышки"
  },
  {
    id: "excavators",
    title: "Экскаваторы",
    description: "Гусеничные и колесные экскаваторы для земляных и строительных работ",
    imageUrl: "/images/excavator-volvo.jpg",
    category: "Экскаваторы"
  },
  {
    id: "dump-trucks",
    title: "Самосвалы",
    description: "Самосвалы различной грузоподъемности для перевозки сыпучих материалов",
    imageUrl: "/images/maz-5516.jpg",
    category: "Самосвалы"
  },
  {
    id: "bulldozers",
    title: "Бульдозеры",
    description: "Мощные бульдозеры для планировки площадок и перемещения грунта",
    imageUrl: "/images/bulldozer-b10m.jpg",
    category: "Бульдозеры"
  },
  {
    id: "loaders",
    title: "Погрузчики",
    description: "Фронтальные погрузчики для выполнения погрузочно-разгрузочных работ",
    imageUrl: "/images/loader-sdlg.jpg",
    category: "Погрузчики"
  },
  {
    id: "rollers",
    title: "Катки",
    description: "Дорожные катки для уплотнения грунта и асфальтобетонных смесей",
    imageUrl: "/images/roller-bomag.jpg",
    category: "Катки"
  },
  {
    id: "graders",
    title: "Грейдеры",
    description: "Автогрейдеры для профилирования дорог и планировки площадок",
    imageUrl: "/images/grader-gs14.jpg",
    category: "Грейдеры"
  },
  {
    id: "attachments",
    title: "Навесное оборудование",
    description: "Различное навесное оборудование для строительной техники",
    imageUrl: "/images/auger-delta.jpg",
    category: "Навесное оборудование"
  }
];

const advantages = [
  {
    title: "Опытные операторы",
    description: "Все наши операторы имеют большой опыт работы и необходимые допуски",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Современная техника",
    description: "Регулярное обновление и обслуживание парка строительной техники УРАЛСТРОЙТЕХ",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Гибкие условия",
    description: "Индивидуальный подход к каждому клиенту и система скидок",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Оперативность",
    description: "Быстрое оформление заказа и подача техники на объект",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];
