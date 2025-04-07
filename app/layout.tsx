import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer/Footer";
import ScrollToTopButton from "@/app/components/Buttons/ScrollToTop";
import Banner from "./components/HeroBanner/Banner";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Martin's Movies",
    default: "Martin's Movies",
  },
  description: "Martin's Movies reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <AppRouterCacheProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          <Banner />
          <main className="bg-[#edf5f7]">{children}</main>
          <ScrollToTopButton />
          <Footer />
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
