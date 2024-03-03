import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const cremona = localfont({
  src: [{
    path:"../public/fonts/Cremona.ttf",
    weight: "1000"
  }],
  variable: "--font-cremona",
})
const romie = localfont({
  src: [{
    path:"../public/fonts/Romie.otf",
    weight: "800"
  }],
  variable: "--font-romie",
})

export const metadata: Metadata = {
  title: "Visibility Studios",
  description: "We create adverts that relate with the people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cremona.variable} ${romie.variable} ${inter.className}`}>
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
