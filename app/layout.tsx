import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UtilsLoader from "./layouts/UtilsLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay's Portfolio",
  description: "Everything You need to know about Jay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UtilsLoader />
        <div className="orido_tm_all_wrap" data-magic-cursor="show">
          {children}
        </div>
      </body>
    </html>
  );
}
