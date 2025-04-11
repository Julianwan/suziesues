import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suzie Sues! Law Firm",
  description: "Where your minor inconveniences become major paydays! Suzie Suzalot is a high-energy legal whiz that sues for any personal injury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"><Head><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🍎</text></svg>"></link></Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
