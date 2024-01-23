"use client";

import { useMediaQuery } from "react-responsive";
import { SCREEN_MOBILE } from "@/utilities/media-query-parameters";
import SlideFrame from "./slide-frame";
import SlideshowNavigation from "./slide-navigation";

interface VerticalSlideshowProps {
  slides?: React.ReactNode[];
}

const VerticalSlideshow: React.FC<VerticalSlideshowProps> = ({
  slides = [],
}) => {
  const isMobile = useMediaQuery(SCREEN_MOBILE);
  return (
    <div className="flex flex-col w-full h-full items-center">
      <SlideshowNavigation slideCount={slides.length} />
      <div
        className={`flex flex-row space-x-24 overflow-x-auto pb-12 max-w-[1000px] 
      ${isMobile ? "" : " scroll-fade "}
      snap-x scroll-mandatory scroll-smooth h-full w-full"`}
      >
        <div className="min-w-[280px]" />
        {slides.map((slide, index) => (
          <SlideFrame key={index + 1} position={index + 1}>
            {slide}
          </SlideFrame>
        ))}
        <div className="min-w-[280px]" />
      </div>
    </div>
  );
};

export default VerticalSlideshow;
