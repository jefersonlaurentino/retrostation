import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/providers/providers";
import Notificacao from "@/components/Notificacao";
import PopUpInteractive from "@/components/PopUpInteractive";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RetroStation",
  description: "Loja de Jogos para PlayStation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primaria dark:text-white dark:bg-dark duration-300`}
      >
        <Providers>
          {children}
          <Notificacao/>
          <PopUpInteractive/>
        </Providers>
        {/* <Analytics/> */}
      </body>
    </html>
  );
}
