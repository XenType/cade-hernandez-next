"use client";

import { useState } from "react";
import TimelineViewer from "../../common/timeline-viewer";
import EngineeringCareerTimeline from "./engineering-career";
import ServiceCareerTimeline from "./service-career";
import SupportCareerTimeline from "./support-career";

const BLANK_CONFIG: TimelineConfiguration = {
  key: "",
  startYear: 0,
  endYear: 0,
  timelineEntries: [],
};

const ResumeExperience: React.FC = () => {
  const [entryKeyState, setEntryKeyState] = useState<CareerPath | "">(
    BLANK_CONFIG.key
  );
  const [startYearState, setStartYearState] = useState<number>(
    BLANK_CONFIG.startYear
  );
  const [endYearState, setEndYearState] = useState<number>(
    BLANK_CONFIG.endYear
  );
  const [entryListState, setEntryListState] = useState<TimelineViewerEntry[]>(
    BLANK_CONFIG.timelineEntries
  );

  const setTimelineInState = (
    key: CareerPath | "",
    start: number,
    end: number,
    list: TimelineViewerEntry[]
  ): void => {
    setEntryKeyState(key);
    setStartYearState(start);
    setEndYearState(end);
    setEntryListState(list);
  };

  const getCareerTimeline = (careerPath: CareerPath): TimelineConfiguration => {
    switch (careerPath) {
      case "Engineering":
        return EngineeringCareerTimeline;
      case "Service":
        return ServiceCareerTimeline;
      case "Support":
        return SupportCareerTimeline;
    }
  };

  const applyTimeline = (careerPath: CareerPath): void => {
    const { key, startYear, endYear, timelineEntries } =
      getCareerTimeline(careerPath);
    setTimelineInState(key, startYear, endYear, timelineEntries);
  };

  return (
    <div className="flex w-full bg-cade-blue-dark/10">
      <div className="max-w-[1000px] m-auto flex flex-col h-full">
        <div className="w-full flex flex-row justify-center text-center text-sm md:text-lg font-bold p-2 space-x-4 md:space-x-0">
          <div
            className={`md:w-4/12 cursor-pointer ${
              entryKeyState === "Engineering"
                ? "text-cade-blue-dark underline"
                : "text-cade-blue-dark/80"
            }`}
            onClick={() => applyTimeline("Engineering")}
          >
            Career: Engineering
          </div>
          <div
            className={`md:w-4/12 cursor-pointer ${
              entryKeyState === "Service"
                ? "text-cade-blue-dark underline"
                : "text-cade-blue-dark/80"
            }`}
            onClick={() => applyTimeline("Service")}
          >
            Career: Service
          </div>
          <div
            className={`md:w-4/12 cursor-pointer ${
              entryKeyState === "Support"
                ? "text-cade-blue-dark underline"
                : "text-cade-blue-dark/80"
            }`}
            onClick={() => applyTimeline("Support")}
          >
            Career: Support
          </div>
        </div>
        <div className="flex flex-col h-full pb-2 pt-6 items-center justify-center grow px-2">
          {entryKeyState &&
          entryListState.length &&
          startYearState &&
          endYearState ? (
            <TimelineViewer
              entries={entryListState}
              startYear={startYearState}
              endYear={endYearState}
            />
          ) : (
            <div className="flex flex-col space-y-1 xl:space-y-4 items-center grow md:min-w-[800px] bg-white rounded-lg shadow shadow-cade-blue-dark/20 py-4 px-2 mb-4">
              <div className="pt xl:pt-2 xl:text-lg font-semibold">
                Experience That Spans Three Career Paths
              </div>
              <div className="p-2 max-w-[600px] flex flex-col space-y-2 text-xs xl:text-sm">
                <p className="font-semibold">But why?</p>
                <p className="text-justify">
                  While successful in a number of projects in my first role as
                  the leader of a small engineering team, I was young and wanted
                  the freedoms I saw my friends enjoying. In 2003 I set out to
                  build a client list as a freelance website developer and
                  maintained an hourly side-job to supplement my income.
                </p>
                <p className="text-justify">
                  When I moved to Austin, TX I applied for an open Game Master
                  position at Blizzard Entertainment's new support center. I had
                  hopes of joining their internal tools development team, but a
                  local team in Austin was never established.
                </p>
                <p className="text-justify">
                  As website building tools became more advanced, freelance
                  website design work became more difficult to find. I adapted,
                  as always, and began to focus more on my service industry
                  career. I first managed a small restaurant and eventually
                  found myself leading large teams while working for the oldest
                  family owned catering company in Austin.
                </p>
                <p className="text-justify">
                  As much as I enjoyed over a decade of work outside of the
                  tech-sector, I eventually felt the pull to return. I found my
                  foothold at a SaaS company and quickly modernized my skill set
                  to meet the output of all of my peers. A recent downsizing in
                  staff resulted in our parting ways, but I am very appreciative
                  of the opportunities I was given during my 7+ years of
                  employment.
                </p>
              </div>
              <div className="text-xs xl:text-sm font-semibold text-cade-blue-dark">
                Please select a career path above to view a timeline of
                positions held in those industries.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeExperience;
