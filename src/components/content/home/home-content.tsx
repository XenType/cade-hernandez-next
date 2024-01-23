"use client";

import { useState } from "react";
import ActionButton from "../common/action-button";
import CollaborateContent from "./collaborate-content";
import ExploreContent from "./explore-content";
import { Anybody } from "next/font/google";
import Headline from "../common/headline";

enum PageState {
  NONE,
  COLLABORATE,
  EXPLORE,
}

const anybody = Anybody({ subsets: ["latin"] });

const HomeContent: React.FC = () => {
  const [pageState, setPageState] = useState<PageState>(PageState.NONE);

  const handleCollaborateClick = () => {
    if (pageState === PageState.COLLABORATE) {
      setPageState(PageState.NONE);
    } else {
      setPageState(PageState.COLLABORATE);
    }
  };

  const handleExploreClick = () => {
    if (pageState === PageState.EXPLORE) {
      setPageState(PageState.NONE);
    } else {
      setPageState(PageState.EXPLORE);
    }
  };

  return (
    <div className="m-auto mt-20 md:mt-40 xl:mt-48 flex flex-col w-full max-w-[1000px] space-y-10">
      <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start">
        <div className="flex flex-col h-full space-y-16 pt-8 items-center">
          <Headline className="text-4xl md:text-7xl text-cade-blue-dark font-semibold grow">
            Welcome to my
            <br />
            <span className="underline decoration-cade-blue-med">
              portfolio
            </span>
            .
          </Headline>
          <div className="flex flex-row w-full justify-around space-x-4 md:space-x-0">
            <ActionButton onClick={handleCollaborateClick} outlineOnly>
              Collaborate
            </ActionButton>
            <ActionButton onClick={handleExploreClick}>Explore</ActionButton>
          </div>
          {pageState === PageState.COLLABORATE ? <CollaborateContent /> : null}
          {pageState === PageState.EXPLORE ? <ExploreContent /> : null}
        </div>
        <div className="relative h-[200px] w-[150px] md:h-[400px] md:w-[300px]">
          <div className="bg-cade-blue-lite  md:h-[375px] md:w-[275px] absolute bottom-0 right-0 rounded-2xl" />
          <div className="cade-image-bg h-[200px] w-[150px] md:h-[375px] md:w-[275px] overflow-hidden rounded-2xl absolute" />
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
