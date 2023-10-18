import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWAP",
  description:
    "Swapping for Wellness, Affordability, and Planet –Making Every Choice Count!",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <body className={inter.className}>{children}</body>
      <Script src="https://s3.cartwire.co/widget/js/widget_master_v2.js" />
    </html>
  );
}
