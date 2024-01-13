import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterRow from "@/components/footer-row";
import HeaderRow from "@/components/header-row";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cade Hernandez",
  description: "Online Portfolio & Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen w-full flex flex-col justify-center h-screen">
          <HeaderRow />
          <div className="overflow-hidden grow">{children}</div>
          <FooterRow />
        </div>
      </body>
    </html>
  );
}
