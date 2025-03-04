import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "СпецТехника - Аренда строительной техники",
  description: "Профессиональная аренда спецтехники для строительства и промышленности",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
