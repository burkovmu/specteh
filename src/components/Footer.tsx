"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800/30 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          {/* Компания */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">УРАЛСТРОЙТЕХ</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Аренда спецтехники в Екатеринбурге для строительных и земляных работ
            </p>
            <div className="flex space-x-4">
              <Link href="https://vk.com/" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span className="sr-only">ВКонтакте</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.616c-.607 0-.789-.583-1.879-1.674-1.007-.924-1.419-1.041-1.679-1.041-.344 0-.434.098-.434.564v1.537c0 .398-.114.614-1.069.614-1.576 0-3.349-.967-4.593-2.787-1.89-2.756-2.404-4.813-2.404-5.229 0-.251.096-.483.583-.483h1.612c.445 0 .607.19.783.637.824 2.392 2.197 4.502 2.771 4.502.21 0 .312-.098.312-.638V10.14c-.065-1.144-.672-1.251-.672-1.669 0-.198.158-.392.409-.392h2.557c.357 0 .483.19.483.643v3.437c0 .37.161.495.258.495.21 0 .371-.125.757-.509 1.169-1.327 2.001-3.368 2.001-3.368.112-.247.354-.472.834-.472h1.612c.483 0 .586.251.483.596-.193.886-2.145 3.672-2.145 3.672-.169.286-.231.415 0 .721.158.229.681.696 1.028 1.12.636.725 1.121 1.334 1.263 1.76.126.415-.098.623-.506.623z"/>
                </svg>
              </Link>
              <Link href="https://t.me/" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.318-.663.318l.23-3.35 6.11-5.51c.266-.242-.06-.38-.38-.14l-7.53 4.73-3.3-1.02c-.708-.22-.708-.708.15-.99l12.83-4.92c.59-.22 1.1.146.97.89z" />
                </svg>
              </Link>
              <Link href="https://wa.me/" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.44-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Услуги */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Услуги</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors duration-300">Земляные работы</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors duration-300">Строительные работы</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors duration-300">Аренда техники</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors duration-300">Вывоз грунта</Link></li>
            </ul>
          </div>
          
          {/* Информация */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Информация</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors duration-300">О компании</Link></li>
              <li><Link href="/contacts" className="hover:text-yellow-400 transition-colors duration-300">Контакты</Link></li>
              <li><Link href="/equipment" className="hover:text-yellow-400 transition-colors duration-300">Каталог техники</Link></li>
              <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Контакты</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>г. Екатеринбург, ул. Ткачей 23</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+7 (993) 907-30-77</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>burkovmu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t border-gray-800/30 pt-6 mt-8 text-center text-gray-500 text-sm transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <p>&copy; {new Date().getFullYear()} УРАЛСТРОЙТЕХ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
} 