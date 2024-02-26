import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Do I Need To Tap Off In";
const description = "Find your city!";
export const metadata: Metadata = {
  metadataBase: new URL("https://doineedtotapoff.in"),
  title,
  description,
  keywords: ["Public Transport", "Tap Off", "Touch Off", "Tag Off", "Card"],
  authors: [{ name: "Zach Huxford" }],
  creator: "Zach Huxford",
  publisher: "Zach Huxford",
  openGraph: {
    title,
    description,
    siteName: "Do I Need To Tap Off In?",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-orange-500 ${inter.className}`}>
        <main className="min-h-[100dvh] flex w-full p-2 pt-8 md:p-8 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
