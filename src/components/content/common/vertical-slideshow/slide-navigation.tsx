"use client";
import { useState } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LastPageIcon from "@mui/icons-material/LastPage";

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

export default SlideshowNavigation;
