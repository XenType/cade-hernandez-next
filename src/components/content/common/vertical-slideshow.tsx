"use client";

import { useState } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useMediaQuery } from "react-responsive";
import { SCREEN_MOBILE } from "@/utilities/media-query-parameters";

interface SlideFrameProps {
  position: number;
  children: React.ReactNode;
}

const SlideFrame: React.FC<SlideFrameProps> = ({ position, children }) => {
  return (
    <div
      id={`slide-${position}`}
      className="min-w-[275px] md:min-w-[640px] max-h-[620px] md:h-[520px] shadow bg-white/80 rounded-md snap-center snap-always slide-element flex"
    >
      <div className="w-full p-px md:p-8">{children}</div>
    </div>
  );
};

interface SlideshowNavigationProps {
  slideCount: number;
}

const SlideshowNavigation: React.FC<SlideshowNavigationProps> = ({
  slideCount,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToSlide = (slideNumber: number) => {
    if (slideNumber > 0 && slideNumber < slideCount + 1) {
      const slide = document.getElementById(`slide-${slideNumber}`);
      if (slide) {
        slide.scrollIntoView();
        setCurrentSlide(slideNumber);
      }
    }
  };
  return (
    <div className="flex flex-row justify-center z-10">
      <div className="relative w-[168px] hidden md:flex">
        <div className="absolute top-[550px] text-white text-center flex flex-row space-x-[24px]">
          <FirstPageIcon
            className="cursor-pointer"
            onClick={() => goToSlide(1)}
          />
          <NavigateBeforeIcon
            className="cursor-pointer"
            onClick={() => goToSlide(currentSlide - 1)}
          />
          <NavigateNextIcon
            className="cursor-pointer"
            onClick={() => goToSlide(currentSlide + 1)}
          />
          <LastPageIcon
            className="cursor-pointer"
            onClick={() => goToSlide(slideCount)}
          />
        </div>
      </div>
    </div>
  );
};

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
