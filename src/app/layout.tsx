import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-geist-mono", // Using Urbanist as the secondary/mono font variable for now or just add a new one
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moe Productions | Electric Bike Service NYC",
  description: "Fast turnarounds, honest prices, and battery safe repairs for NYC riders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
