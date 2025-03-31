"use client";

import { useState } from "react";

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
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
          onClick={onClose}
        ></div>

        <div
          className="relative bg-gray-900 w-full max-w-md rounded-lg p-6 shadow-xl overflow-hidden transition-all duration-300 opacity-100 translate-y-0"
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 border border-yellow-400/20 rounded-lg"></div>
          </div>
          
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Закрыть"
            >
              <svg 
                className="w-5 h-5" 
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

            <h2 className="text-xl font-medium mb-6 text-white text-left">
              {isSimpleForm ? "Заказать звонок" : "Заказать технику"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="relative opacity-100 translate-y-0 transition-all duration-300">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-md bg-gray-800/90 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    required
                  />
                </div>

                <div className="relative opacity-100 translate-y-0 transition-all duration-300">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ваш телефон"
                    className="w-full px-4 py-3 rounded-md bg-gray-800/90 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    required
                  />
                </div>

                {!isSimpleForm && (
                  <>
                    <div className="relative opacity-100 translate-y-0 transition-all duration-300">
                      <select
                        name="equipment"
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-gray-800/90 border border-gray-700 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
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

                    <div className="relative opacity-100 translate-y-0 transition-all duration-300">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Дополнительная информация"
                        rows={3}
                        className="w-full px-4 py-3 rounded-md bg-gray-800/90 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all resize-none"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="opacity-100 translate-y-0 transition-all duration-300">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-medium py-3 px-4 rounded-md text-sm transition-all shadow-md hover:shadow-lg"
                >
                  {isSimpleForm ? "Заказать звонок" : "Отправить заявку"}
                </button>
              </div>
              
              <p className="text-xs text-gray-400 text-center mt-4 opacity-70">
                Отправляя форму, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 