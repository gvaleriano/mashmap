import type { Metadata } from "next";
import { Noto_Sans, Sora } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets:["latin"]
})

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "MashMap",
  description: "Tag para metadata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
