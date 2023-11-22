import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MessageBar from "@/components/message-bar";
import HeaderRow from "@/components/header-row";
import FooterRow from "@/components/footer-row";

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
        <div className="triangle-background min-h-screen design-2-body w-full flex flex-row justify-center">
          <MessageBar />
          <HeaderRow />
          <div className="pt-28 pb-20 px-2 w-full max-w-[1200px]">
            {children}
          </div>
          <FooterRow />
        </div>
      </body>
    </html>
  );
}
