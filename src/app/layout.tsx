import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-inter",
});

// Динамически импортируем Footer на стороне клиента
const Footer = dynamic(() => import("@/components/Footer"), { 
  ssr: true,
  loading: () => <div className="py-8 bg-gray-900 text-center text-gray-500">Загрузка...</div>
});

export const metadata: Metadata = {
  title: "УРАЛСТРОЙТЕХ - Аренда спецтехники в Екатеринбурге",
  description: "Аренда спецтехники в Екатеринбурге. Экскаваторы, погрузчики, автокраны и другая строительная техника. Выгодные условия аренды.",
  keywords: "аренда спецтехники, экскаватор, погрузчик, автокран, строительная техника, Екатеринбург",
  authors: [{ name: "УРАЛСТРОЙТЕХ" }],
  creator: "УРАЛСТРОЙТЕХ",
  openGraph: {
    title: "УРАЛСТРОЙТЕХ - Аренда спецтехники в Екатеринбурге",
    description: "Аренда спецтехники в Екатеринбурге. Экскаваторы, погрузчики, автокраны и другая строительная техника.",
    type: "website",
    locale: "ru_RU",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
  colorScheme: "dark"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap"
          rel="stylesheet"
          as="style"
        />
        {/* Предзагрузка шрифта */}
        <link 
          rel="preload" 
          href="/fonts/BlackOpsOne-Regular_RUS_by_alince.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-yellow-400 text-xl">Загрузка...</div>
          </div>
        }>
          <div id="main-content" className="flex-grow">
            {children}
          </div>
        </Suspense>
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
