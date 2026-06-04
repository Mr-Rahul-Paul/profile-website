import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "../components/Toast";
import Topbar from "../components/Topbar";
import Statusbar from "../components/Statusbar";
import KeyboardManager from "../components/KeyboardManager";
import LightsaberTrail from "../components/LightsaberTrail";
import StarWarsCrawl from "../components/StarWarsCrawl";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rahul Paul",
  description: "CS sophomore at IIIT Vadodara. I build things close to the metal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSans.variable}`}>
      <body className="antialiased font-sans text-body bg-bg flex flex-col min-h-screen">
        <ToastProvider>
          <KeyboardManager />
          <StarWarsCrawl />
          <LightsaberTrail />
          <Topbar />
          <main className="flex-1 pb-16 pt-4">
            {children}
          </main>
          <Statusbar />
        </ToastProvider>
      </body>
    </html>
  );
}
