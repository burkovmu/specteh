"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Аренда спецтехники",
    description: "Предоставляем в аренду широкий спектр строительной и специальной техники для решения любых задач.",
    features: [
      "Автокраны различной грузоподъемности",
      "Экскаваторы и погрузчики",
      "Бульдозеры и грейдеры",
      "Самосвалы и тралы"
    ]
  },
  {
    title: "Строительные работы",
    description: "Выполняем полный комплекс строительных работ с использованием современной техники.",
    features: [
      "Земляные работы",
      "Демонтажные работы",
      "Планировка участков",
      "Вывоз строительного мусора"
    ]
  },
  {
    title: "Грузоперевозки",
    description: "Осуществляем грузоперевозки любой сложности по городу и области.",
    features: [
      "Перевозка негабаритных грузов",
      "Доставка строительных материалов",
      "Перевозка спецтехники",
      "Логистические решения"
    ]
  }
];

const advantages = [
  {
    title: "Опытные операторы",
    description: "Все наши операторы имеют большой опыт работы и необходимые допуски.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Современная техника",
    description: "Регулярное обновление и обслуживание парка спецтехники.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Гибкие условия",
    description: "Индивидуальный подход к каждому клиенту и гибкая система скидок.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Оперативность",
    description: "Быстрое оформление заказа и подача техники на объект.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function Services() {
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
            Наши услуги
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы предоставляем полный спектр услуг в сфере аренды спецтехники и выполнения 
            строительных работ любой сложности
          </p>
        </motion.div>

        {/* Основные услуги */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">{service.title}</h2>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Готовы начать работу?
          </h2>
          <p className="text-black mb-6 text-lg">
            Свяжитесь с нами для получения подробной консультации и расчета стоимости
          </p>
          <a
            href="/contacts"
            className="inline-block bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300"
          >
            Связаться с нами
          </a>
        </motion.div>
      </div>
    </main>
  );
} 