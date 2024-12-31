"use client";
 import React, { useState, useEffect } from 'react';
  import localFont from "next/font/local"; 
  import "./globals.css";
   import Header from './components/Header';
    import Left from './components/Left'; 
    const geistSans = localFont({ src: "./fonts/GeistVF.woff",
         variable: "--font-geist-sans",
          weight: "100 900", });
     const geistMono = localFont({
         src: "./fonts/GeistMonoVF.woff",
          variable: "--font-geist-mono",
         weight: "100 900", });
          export default function RootLayout({ children }) {
             const [activeIcon, setActiveIcon] = useState(null);
             const handleIconClick = (icon) => { setActiveIcon(icon);
            
              };
     useEffect(() => { 

      }, []);
     return ( 
     <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <div className="min-h-screen bg-[#333333] flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 gap-6">
     <Left /> 
    <div className="flex-1 lg:ml-10 text-white space-y-8 mt-24 lg:mt-0 px-6 overflow-y-auto lg:overflow-hidden"> 
{children} </div>
 <div className="hidden lg:flex lg:flex-col lg:px-6">
 <Header activeIcon={activeIcon} handleIconClick={handleIconClick} />
 </div>
 </div>
  <div className="block lg:hidden w-full mt-auto">
     <Header activeIcon={activeIcon} handleIconClick={handleIconClick} /> 
    </div>
     </body>
      </html> 
      );
     }