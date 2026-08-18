import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fahim Hosssain | SHOPIFY DEVELOPER",
  description: "Shopify Developer & Front-End Developer specializing in custom Shopify solutions, Liquid, JavaScript, theme development, and high-performance eCommerce websites.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#030303] text-white">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
