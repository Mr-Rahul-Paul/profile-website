import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Paul | Backend Engineer & CS Undergraduate",
  description: "Portfolio of Rahul Paul, a Computer Science undergraduate at IIIT Vadodara specializing in Backend Engineering, Rust, and TypeScript.",
  keywords: ["Rahul Paul", "Backend Engineer", "Rust", "TypeScript", "Web Developer", "IIIT Vadodara"],
  authors: [{ name: "Rahul Paul", url: "https://github.com/Mr-Rahul-Paul" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
