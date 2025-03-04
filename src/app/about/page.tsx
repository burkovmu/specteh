"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "лет опыта" },
  { number: "50+", label: "единиц техники" },
  { number: "1000+", label: "довольных клиентов" },
  { number: "24/7", label: "режим работы" }
];

const values = [
  {
    title: "Качество",
    description: "Мы используем только современную технику от ведущих производителей и работаем с опытными операторами."
  },
  {
    title: "Надежность",
    description: "Вся наша техника проходит регулярное обслуживание и всегда готова к работе."
  },
  {
    title: "Ответственность",
    description: "Мы всегда выполняем свои обязательства и ценим время наших клиентов."
  },
  {
    title: "Профессионализм",
    description: "Наши специалисты имеют большой опыт работы и постоянно повышают свою квалификацию."
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            О компании
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы специализируемся на предоставлении услуг аренды спецтехники и выполнении 
            строительных работ любой сложности на территории Екатеринбурга и области.
          </p>
        </motion.div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* История компании */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">История компании</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Наша компания начала свою деятельность более 10 лет назад с небольшого парка 
              строительной техники. За эти годы мы значительно расширили автопарк и спектр 
              предоставляемых услуг.
            </p>
            <p className="text-gray-300 mb-4">
              Сегодня мы являемся одним из лидеров рынка аренды спецтехники в Екатеринбурге 
              и Свердловской области. В нашем распоряжении более 50 единиц современной техники, 
              которая регулярно обновляется и проходит техническое обслуживание.
            </p>
            <p className="text-gray-300">
              Мы гордимся тем, что за годы работы смогли заслужить доверие множества клиентов, 
              от частных застройщиков до крупных строительных компаний.
            </p>
          </div>
        </div>

        {/* Ценности компании */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Сертификаты */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Наши достижения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Сертификаты</h3>
              <p className="text-gray-300">Все необходимые лицензии и сертификаты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Опыт</h3>
              <p className="text-gray-300">Более 1000 успешных проектов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Отзывы</h3>
              <p className="text-gray-300">Высокие оценки от клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 