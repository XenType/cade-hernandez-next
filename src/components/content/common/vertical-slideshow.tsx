"use client";

import { useState } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LastPageIcon from "@mui/icons-material/LastPage";

interface SlideFrameProps {
  position: number;
  children: React.ReactNode;
}

const SlideFrame: React.FC<SlideFrameProps> = ({ position, children }) => {
  return (
    <div
      id={`slide-${position}`}
      className="min-w-[640px] h-[520px] shadow bg-white/80 rounded-md snap-center slide-element flex"
    >
      <div className="w-full p-8">{children}</div>
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
    <div className="flex flex-row justify-center">
      <div className="relative w-[168px]">
        <div className="absolute bottom-6 text-white text-center flex flex-row space-x-[24px]">
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
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-24 overflow-x-auto pb-12 max-w-[1000px] scroll-fade snap-x">
        <div className="min-w-[180px]" />
        {slides.map((slide, index) => (
          <SlideFrame key={index + 1} position={index + 1}>
            {slide}
          </SlideFrame>
        ))}
        <div className="min-w-[180px]" />
      </div>
      <SlideshowNavigation slideCount={slides.length} />
    </div>
  );
};

export default VerticalSlideshow;
