"use client";

import { SCREEN_MOBILE } from "@/utilities/media-query-parameters";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const ThumbGoogleAi: React.FC = () => {
  const isMobile = useMediaQuery(SCREEN_MOBILE);
  return (
    <div className="rounded-lg overflow-hidden shadow-md shadow-cade-blue-lite flex">
      <Image
        src="/images/google-ai-platform.png"
        alt="Google AI"
        width={75}
        height={75}
      />
    </div>
  );
};

export default ThumbGoogleAi;
