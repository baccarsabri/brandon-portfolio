import { Poppins } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";


import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import TopBar from "@/components/topbar";




const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Axelor",
  description: "Event website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} w-full h-full text-primary-text bg-color flex`}
      >
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            
          >
            <Header />
            <TopBar />
          </ThemeProvider>
          {children}
        </main>
      </body>
    </html>
  );
}
