"use client";

import { usePathname } from "next/navigation";
import { PagePath } from "../enum";

const MessageBar: React.FC = () => {
  const pathName = usePathname();
  const getMessageForPath = (): String => {
    switch (pathName) {
      case PagePath.EXPERIENCE:
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
    <div className="fixed w-full text-center bg-amber-600 text-white h-8 text-sm z-10">
      {getMessageForPath()}
    </div>
  );
};

export default MessageBar;
