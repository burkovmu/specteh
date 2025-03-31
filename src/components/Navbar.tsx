"use client";

import { useState, useEffect, useRef } from "react";
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLElement>(null);

  // Индикатор рендеринга на стороне клиента и начальная настройка
  useEffect(() => {
    // Устанавливаем начальное значение скролла сразу
    setIsScrolled(window.scrollY > 20);
    
    // Устанавливаем флаг монтирования
    setMounted(true);
    
    // Принудительный ререндер для исправления проблем с анимацией
    if (navbarRef.current) {
      navbarRef.current.style.opacity = '1';
    }
  }, []);

  // Блокируем прокрутку при открытом меню
  useEffect(() => {
    if (!mounted) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, mounted]);

  // Обработка скролла для изменения фона навбара
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      // Используем requestAnimationFrame для оптимизации производительности
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Закрываем мобильное меню при изменении маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Если компонент не смонтирован (серверный рендеринг), показываем статичную версию
  if (!mounted) {
    return (
      <nav className="fixed w-full z-[60] bg-black/90 backdrop-blur-md border-b border-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="relative">
                <h1 className="text-2xl font-extrabold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500 drop-shadow-sm font-black-ops uppercase">
                    УралСтройТех
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav 
        ref={navbarRef}
        className={`fixed w-full z-[60] transition-colors duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md shadow-md border-b border-gray-800/20" : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="group"
                prefetch={true}
              >
                <div className="relative group-hover:opacity-80 transition-colors duration-300">
                  <h1 className="text-2xl font-extrabold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500 drop-shadow-sm font-black-ops uppercase">
                      УралСтройТех
                    </span>
                  </h1>
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-300 to-orange-500 opacity-0 group-hover:opacity-100 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
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
                    prefetch={true}
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-yellow-400" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => setIsOrderFormOpen(true)}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Связаться с нами
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 text-gray-300 hover:text-white focus:outline-none z-[100] p-2 -mr-2"
                aria-expanded={isOpen}
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
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[150] md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
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
                        prefetch={true}
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