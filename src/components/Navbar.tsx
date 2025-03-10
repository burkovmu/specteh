"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import OrderForm from "./OrderForm";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Главная" },
  { href: "/equipment", label: "Техника" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Блокируем прокрутку при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Обработка скролла для изменения фона навбара
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Закрываем мобильное меню при изменении маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="group flex items-center space-x-4"
              >
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl transform group-hover:scale-105 transition-all duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.4),transparent)]"></div>
                  </div>
                  <div className="absolute inset-[1.5px] bg-black rounded-xl flex items-center justify-center overflow-hidden">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-500 font-bold text-xl">
                      УС
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-lg font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 whitespace-nowrap">
                    УралСтройТех
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-yellow-400" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOrderFormOpen(true)}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300"
                >
                  Связаться с нами
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 text-gray-300 hover:text-white focus:outline-none z-[100] p-2 -mr-2"
              >
                <span className="sr-only">Открыть меню</span>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu portal */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="fixed inset-0 z-[150] md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-gray-900 to-black border-l border-white/10 p-6 overflow-y-auto shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Кнопка закрытия */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center group"
                  aria-label="Закрыть меню"
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

                <div className="flex-1 py-8">
                  <div className="flex flex-col space-y-1">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                          pathname === link.href
                            ? "bg-yellow-400/10 text-yellow-400"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 pb-8">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsOrderFormOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-3 rounded-xl text-lg font-medium shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
                  >
                    Связаться с нами
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        isSimpleForm={true}
      />
    </>
  );
} 