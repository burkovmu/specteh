"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            СпецТехника в аренду
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Профессиональная техника для ваших строительных и промышленных проектов
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrderFormOpen(true)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full text-lg"
          >
            Заказать технику
          </motion.button>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDownIcon className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Наша техника
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  <Link href={`/equipment/${item.id}`}>
                    <span className="mt-4 inline-block text-yellow-400 hover:text-yellow-300">
                      Подробнее →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Почему выбирают нас
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Готовы начать работу?
          </h2>
          <p className="text-black text-lg mb-8">
            Свяжитесь с нами для получения подробной консультации и расчета стоимости
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrderFormOpen(true)}
            className="bg-black text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            Заказать технику
          </motion.button>
        </motion.div>
      </section>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
      />
    </main>
  );
}

const equipmentItems = [
  {
    id: "excavator",
    title: "Экскаваторы",
    description: "Мощные экскаваторы различной грузоподъемности для земляных работ",
  },
  {
    id: "crane",
    title: "Автокраны",
    description: "Современные автокраны для подъема и перемещения грузов",
  },
  {
    id: "bulldozer",
    title: "Бульдозеры",
    description: "Надежные бульдозеры для планировки и перемещения грунта",
  },
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
    description: "Регулярное обновление и обслуживание парка спецтехники",
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
