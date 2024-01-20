"use client";

import { useEffect, useState } from "react";

import EventGroupCard, { EventGroupCardProps } from "./event-group-card";
import EventModal from "./event-modal";

interface TimelineViewerProps {
  entries: TimelineViewerEntry[];
  startYear: number;
  endYear: number;
}

const TimelineViewer: React.FC<TimelineViewerProps> = ({
  entries,
  startYear,
  endYear,
}) => {
  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode>(null);
  const [leftGroups, setLeftGroups] = useState<TimelineViewerEntry[]>([]);
  const [rightGroups, setRightGroups] = useState<TimelineViewerEntry[]>([]);
  const [lineSegmentHeight, setLineSegmentHeight] = useState(0);

  let entryCounter = 0;

  const handleTimelineClick = (displayComponent: React.ReactNode): void => {
    setCurrentComponent(displayComponent);
  };

  const handleCloseClick = (): void => {
    setCurrentComponent(null);
  };

  const getYearRange = (): number[] => {
    return Array.from(
      { length: endYear - startYear + 1 },
      (_, i) => startYear + i
    );
  };

  useEffect(() => {
    let entryCount = 0;

    const lGroup: TimelineViewerEntry[] = [];
    const rGroup: TimelineViewerEntry[] = [];
    entries.forEach((entry) => {
      if (entryCount % 2 === 0) {
        lGroup.push(entry);
      } else {
        rGroup.push(entry);
      }
      entryCount++;
    });
    setLeftGroups(lGroup);
    setRightGroups(rGroup);
    setLineSegmentHeight(Math.floor(450 / getYearRange().length));
  }, [entries]);

  const getLineForYear = (year: number): React.ReactNode => {
    const result = entries.some((entry) => entry.year === year) ? (
      entryCounter % 2 === 0 ? (
        <div className="absolute border border-cade-blue-dark w-20 right-[14px] top-[10px] -skew-y-6" />
      ) : (
        <div className="absolute border border-cade-blue-dark w-20 left-[14px] top-[2px] -skew-y-6" />
      )
    ) : null;
    if (result) {
      entryCounter++;
    }
    return result;
  };

  return (
    <div className="flex flex-row justify-center items-start h-full">
      <EventModal
        currentComponent={currentComponent}
        onCloseClick={handleCloseClick}
      />
      <div className="flex flex-col h-full space-y-10 items-end z-5 grow">
        {leftGroups.map(({ year, groupProps }) => (
          <EventGroupCard
            key={year}
            title={groupProps.title}
            subtitle={groupProps.subtitle}
            yearRange={groupProps.yearRange}
            events={groupProps.events}
            onEventClick={handleTimelineClick}
          />
        ))}
      </div>
      <div className="flex flex-col items-center w-40">
        <div className="text-lg py-2 font-bold text-cade-blue-med">
          {startYear}
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-cade-blue-dark via-cade-blue-dark/70 to-cade-blue-dark">
          {getYearRange().map((year) => {
            return (
              <div
                id={year.toFixed(0)}
                key={year}
                className="relative w-4 z-1 border border-cade-blue-lite"
                style={{ height: lineSegmentHeight }}
              >
                {getLineForYear(year)}
              </div>
            );
          })}
        </div>
        <div className="text-lg py-2 font-bold text-cade-blue-med">
          {endYear}
        </div>
      </div>
      <div className="flex flex-col h-full space-y-10 items-start z-5 grow">
        <div className="h-8" />
        {rightGroups.map(({ year, groupProps }) => (
          <EventGroupCard
            key={year}
            title={groupProps.title}
            subtitle={groupProps.subtitle}
            yearRange={groupProps.yearRange}
            events={groupProps.events}
            onEventClick={handleTimelineClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineViewer;

export type { TimelineViewerProps };
