"use client";

import { SCREEN_MOBILE } from "@/utilities/media-query-parameters";
import { useMediaQuery } from "react-responsive";

interface StackingTileProps {
  title: string;
  content: React.ReactNode;
}

interface StackingTilesProps {
  tileList: StackingTileProps[];
}

const StackingTiles: React.FC<StackingTilesProps> = ({ tileList }) => {
  const isMobile = useMediaQuery(SCREEN_MOBILE);
  return (
    <div className="bg-gray-700 grow flex flex-row items-center overflow-x-auto border-2 border-cade-blue-dark scroll-smooth">
      {tileList.map(({ title, content }, index) => (
        <div
          className="sticky relative bg-cade-blue-dark h-[150px] min-w-[150px] md:h-[250px] md:min-w-[250px] flex flex-col justify-center border-[1px] border-cade-blue-med"
          key={title}
          style={{ left: index * (isMobile ? 11 : 30) }}
        >
          <div className="flex flex-row h-full">
            <div
              className="transform rotate-180 text-center p-[3px] font-semibold text-white text-xs md:text-base"
              style={{ writingMode: "vertical-lr" }}
            >
              {title}
            </div>

            <div className="w-full h-full grow">{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackingTiles;

export type { StackingTileProps, StackingTilesProps };
