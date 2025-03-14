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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      equipment: "",
      message: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative bg-gradient-to-b from-gray-900 to-black w-full max-w-md rounded-2xl p-8 shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-orange-500/5 rounded-2xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_110%_-10%,rgba(251,191,36,0.1),transparent_50%)] rounded-2xl"></div>
          
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 p-2 rounded-xl hover:bg-white/5 transition-colors group"
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

            <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 text-center">
              {isSimpleForm ? "Заказать звонок" : "Заказать технику"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.07] transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ваш телефон"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.07] transition-all duration-300"
                    required
                  />
                </div>

                {!isSimpleForm && (
                  <>
                    <div className="relative">
                      <select
                        name="equipment"
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.07] transition-all duration-300"
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

                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Дополнительная информация"
                        rows={3}
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                      />
                    </div>
                  </>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-xl text-lg shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
              >
                {isSimpleForm ? "Заказать звонок" : "Отправить заявку"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 