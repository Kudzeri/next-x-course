import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "X - Twitter Clone",
    template: "%s | X",
  },
  description: "Frontend project for X - Twitter clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
