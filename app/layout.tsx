import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "emlak-bazasi",
  description: "emlak bazasi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
<div className="w-[2000px]">         <Header/>
</div>
       <main className="flex max-h-screen w-[2000px]">
          {children}
        </main>

        
        <div className=" w-[2000px] ">        <Footer/>
</div>
      </body>
    </html>
  );
}
