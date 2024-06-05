"use client";
import { useRef } from "react";
import MainFooter from "../footer";
import MainHeader from "../header";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-white"
      ref={pageRef}
    >
      <MainHeader pageRef={pageRef} />
      <div className="flex flex-col items-center grow w-full">{children}</div>
      <MainFooter />
    </div>
  );
};

export default PageLayout;
