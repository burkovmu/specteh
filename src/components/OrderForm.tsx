"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  equipmentTitle?: string;
}

export default function OrderForm({ isOpen, onClose, equipmentTitle }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    equipment: equipmentTitle || "",
    rentalPeriod: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет отправка данных на сервер
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 rounded-lg p-6 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">Заказать технику</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Ваше имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Иван Иванов"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="+7 (999) 999-99-99"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="example@mail.ru"
            />
          </div>

          <div>
            <label htmlFor="equipment" className="block text-sm font-medium text-gray-300 mb-1">
              Техника *
            </label>
            <input
              type="text"
              id="equipment"
              name="equipment"
              required
              value={formData.equipment}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Название техники"
            />
          </div>

          <div>
            <label htmlFor="rentalPeriod" className="block text-sm font-medium text-gray-300 mb-1">
              Срок аренды *
            </label>
            <select
              id="rentalPeriod"
              name="rentalPeriod"
              required
              value={formData.rentalPeriod}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Выберите срок</option>
              <option value="1-day">1 день</option>
              <option value="week">Неделя</option>
              <option value="month">Месяц</option>
              <option value="long-term">Долгосрочная аренда</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Дополнительная информация
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Укажите детали заказа"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-lg text-lg"
          >
            Отправить заявку
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
} 