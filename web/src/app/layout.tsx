import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Naskh_Arabic,
  Noto_Sans_Display,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoDisplay = Noto_Sans_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const arabicSerif = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Fjalë të Abdullah ibn al-Mubarak për lotin",
  description:
    "Koleksion thëniesh dhe transmetimesh të Abdullah ibn al-Mubarak mbi lotët dhe frikën ndaj Allahut, me përkthime në shqip dhe burime klasike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoDisplay.variable} ${arabicSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
