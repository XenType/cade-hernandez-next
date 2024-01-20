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
    <div className="m-auto mt-40 xl:mt-48 flex flex-col w-full max-w-[1000px] space-y-10">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col h-full space-y-16 pt-8">
          <Headline className="text-7xl text-cade-blue-dark font-semibold grow">
            Welcome to my
            <br />
            <span className="underline decoration-cade-blue-med">
              portfolio
            </span>
            .
          </Headline>
          <div className="flex flex-row w-full justify-around">
            <ActionButton onClick={handleCollaborateClick} outlineOnly>
              Collaborate
            </ActionButton>
            <ActionButton onClick={handleExploreClick}>Explore</ActionButton>
          </div>
          {pageState === PageState.COLLABORATE ? <CollaborateContent /> : null}
          {pageState === PageState.EXPLORE ? <ExploreContent /> : null}
        </div>
        <div className="relative h-[400px] w-[300px]">
          <div className="bg-cade-blue-lite h-[375px] w-[275px] absolute bottom-0 right-0 rounded-2xl" />
          <div className="cade-image-bg h-[375px] w-[275px] overflow-hidden rounded-2xl absolute" />
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
