import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/pages/layout";

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
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
