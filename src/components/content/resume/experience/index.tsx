"use client";

import { useState } from "react";
import TimelineViewer from "../../common/timeline-viewer";
import EngineeringCareerTimeline from "./engineering-career";
import ServiceCareerTimeline from "./service-career";

type CareerPath = "Engineering" | "Service" | "Support";

const BLANK_CONFIG: TimelineConfiguration = {
  key: "",
  startYear: 0,
  endYear: 0,
  timelineEntries: [],
};

const ResumeExperience: React.FC = () => {
  const [entryKeyState, setEntryKeyState] = useState<string>(BLANK_CONFIG.key);
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
    key: string,
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
        return EngineeringCareerTimeline; // update
    }
  };

  const applyTimeline = (careerPath: CareerPath): void => {
    const { key, startYear, endYear, timelineEntries } =
      getCareerTimeline(careerPath);
    setTimelineInState(key, startYear, endYear, timelineEntries);
  };

  return (
    <div className="max-w-[1000px] m-auto flex flex-col h-full">
      <div className="w-full flex flex-row justify-center text-center text-lg font-bold p-2">
        <div
          className={`w-4/12 cursor-pointer text-cade-blue-dark`}
          onClick={() => applyTimeline("Engineering")}
        >
          Career: Engineering
        </div>
        <div
          className={`w-4/12 cursor-pointer text-cade-blue-dark`}
          onClick={() => applyTimeline("Service")}
        >
          Career: Service
        </div>
        <div
          className={`w-4/12 cursor-pointer text-cade-blue-dark`}
          onClick={() => applyTimeline("Support")}
        >
          Career: Support
        </div>
      </div>
      <div className="flex flex-col h-full py-2 items-center justify-center grow">
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
          <div className="flex grow m-auto">
            Experience from three career paths summary.
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeExperience;
