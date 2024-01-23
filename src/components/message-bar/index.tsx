"use client";

import { usePathname } from "next/navigation";
import { PagePath } from "../enum";

const MessageBar: React.FC = () => {
  const pathName = usePathname();
  const getMessageForPath = (): String => {
    switch (pathName) {
      case PagePath.RESUME:
        return `I've experienced more than just the tech sector...`;
      case PagePath.SKILLS:
        return `I've picked these skills along the way...`;
      case PagePath.PROJECTS:
        return `I've worked (and am working) on some interesting projects...`;
      case PagePath.CONNECT:
        return `Stay in touch!`;
    }
    return "Thank you for visiting!";
  };

  return (
    <div className="w-full text-center bg-blue-800 text-white h-6 text-sm z-10 flex flex-col justify-center">
      <div>{getMessageForPath()}</div>
    </div>
  );
};

export default MessageBar;
