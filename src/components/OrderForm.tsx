"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  isSimpleForm?: boolean;
  equipmentTitle?: string;
}

export default function OrderForm({ isOpen, onClose, isSimpleForm = false, equipmentTitle }: OrderFormProps) {
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
    setFormData({
      name: "",
      phone: "",
      email: "",
      equipment: "",
      rentalPeriod: "",
      message: "",
    });
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
        <div className="relative bg-gradient-to-b from-gray-900 to-black p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-lg mx-auto">
          <button
            onClick={onClose}
            className="absolute -top-14 right-0 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center group md:top-4 md:right-4"
            aria-label="Закрыть"
          >
            <svg 
              className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
            {isSimpleForm ? "Заказать звонок" : "Заказать технику"}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 transition-colors"
                required
              />
            </div>

            {!isSimpleForm && (
              <>
                <div>
                  <select
                    name="equipment"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-yellow-400/50 transition-colors"
                    required
                  >
                    <option value="">Выберите тип техники</option>
                    <option value="crane">Краны и автовышки</option>
                    <option value="excavator">Экскаваторы</option>
                    <option value="bulldozer">Бульдозеры</option>
                    <option value="loader">Погрузчики</option>
                    <option value="truck">Самосвалы</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Дополнительная информация"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 transition-colors resize-none"
                  ></textarea>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-xl text-lg shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
            >
              {isSimpleForm ? "Заказать звонок" : "Отправить заявку"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
} 