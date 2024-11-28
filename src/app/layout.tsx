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
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96' , type: 'image/png' },
      { url: '/favicon/favicon.svg' , type: 'image/svg+xml'}
    ],
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
  manifest: '/favicon/site.webmanifest', 
  appleWebApp: {
    title: 'RetroStation', 
  },
  
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
        <Analytics/>
      </body>
    </html>
  );
}
