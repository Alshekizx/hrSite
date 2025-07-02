// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google'
import { AuthProvider } from "./context/authContext";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "MployUs HR",
  description: "MployUs HR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
         <head>
          <link rel="icon" href="/logos/logo-icon.png" type="image/png" />
        </head>
         <body className={`${nunito.variable} antialiased`}>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}