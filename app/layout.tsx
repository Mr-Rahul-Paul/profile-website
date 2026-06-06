import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "../components/Toast";
import Topbar from "../components/Topbar";
import Statusbar from "../components/Statusbar";
import KeyboardManager from "../components/KeyboardManager";

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

const siteUrl = new URL("https://rahulpaul.me");
const title = "Rahul Paul — Systems & Backend";
const description =
  "Systems-focused engineer building fast Rust backends and open-source tools across OWASP, FreeCAD, Linux, and high-performance APIs.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: "%s | Rahul Paul",
  },
  description,
  applicationName: "Rahul Paul",
  authors: [{ name: "Rahul Paul", url: siteUrl }],
  creator: "Rahul Paul",
  publisher: "Rahul Paul",
  keywords: [
    "Rahul Paul",
    "systems engineer",
    "backend engineer",
    "Rust developer",
    "open source developer",
    "OWASP Nest",
    "FreeCAD",
    "Axum",
    "Tokio",
    "Linux",
    "high-performance APIs",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Rahul Paul",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@_Rahul_Paul",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
    >
      <body className="antialiased font-sans text-body bg-bg flex flex-col min-h-screen">
        <ToastProvider>
          <KeyboardManager />
          <Topbar />
          <main className="flex-1 pb-16 pt-5">{children}</main>
          <Statusbar />
        </ToastProvider>
      </body>
    </html>
  );
}
