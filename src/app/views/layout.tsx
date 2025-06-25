// src/app/layout.tsx

import "../globals.css";
import { Nunito } from 'next/font/google'
import ClientLayout from "../components/clientLayout";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})




export default function RootLayoutViews({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      
         <div className={`${nunito.variable} antialiased`}>
          <ClientLayout>{children}</ClientLayout>
        </div>
     
   
  );
}