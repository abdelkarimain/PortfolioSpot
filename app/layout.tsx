import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliospot.vercel.app"),
  authors: [{ name: "Abdelkarim Ain" }],
  applicationName: "Portfolio Spot",
  description:
    "Portfolio Spot is a curated collection of exceptional web development portfolios, showcasing creative and innovative work from talented developers worldwide. Discover inspiring designs, technical excellence, and unique approaches to personal branding in the digital space. An open-source platform for developers to learn, share, and draw inspiration from outstanding portfolio examples.",
  title: {
    default: "Portfolio Spot",
    template: `%s | Portfolio Spot`,
  },
  keywords: [
    "Abdelkarim Ain",
    "Portfolio Spot",
    "Portfolio",
    "Personal Website",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Personal Portfolio",
    "Web Development",
    "Software Development",
    "Developer Showcase",
    "Portfolio Examples",
    "Web Design Inspiration",
    "Developer Community",
    "Portfolio Gallery",
  ],
  openGraph: {
    title: "Portfolio Spot",
    description:
      "Discover exceptional web development portfolios - Your source for creative inspiration and professional showcase examples",
    url: "https://portfoliospot.vercel.app",
    siteName: "Portfolio Spot",
    locale: "en_US",
    images: [
      {
        url: `https://portfoliospot.vercel.app/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Portfolio Spot",
    card: "summary_large_image",
    description:
      "Discover exceptional web development portfolios - Your source for creative inspiration and professional showcase examples",
    images: [`https://portfoliospot.vercel.app/og.png`],
  },
  icons: {
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/icons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/icons/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://portfoliospot.vercel.app",
    types: {
      "application/rss+xml": `https://portfoliospot.vercel.app/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`min-h-screen flex flex-col`}>
            <div className="fixed inset-0 bg-grid-pattern opacity-[3%] pointer-events-none z-0"></div>
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
