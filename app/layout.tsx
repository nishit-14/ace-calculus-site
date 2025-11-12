import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"; // ✅ Keep Sonner here

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ACE Tutoring - Aim Challenge Excel",
  description:
    "Professional tutoring services to help you aim high, challenge yourself, and excel in your studies.",
  generator: "v0.app",
};

// ✅ No "use client" here — this stays a server component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="font-sans">
        {children}
        {/* ✅ Sonner Toaster still works fine here */}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
