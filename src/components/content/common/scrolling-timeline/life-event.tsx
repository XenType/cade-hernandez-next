type EventOrientation = "left" | "right";

interface EventYearProps {
  year: number;
  orientation?: EventOrientation;
}

interface EventDetailProps {
  orientation?: EventOrientation;
  children: React.ReactNode;
}

type ScrollingTimelineLifeEventProps = EventYearProps &
  EventDetailProps & {
    className: string;
  };

const EventYear: React.FC<EventYearProps> = ({ year, orientation }) => {
  return (
    <div
      className={`w-6/12 ${
        orientation === "right" ? "text-right" : "text-left pl-4"
      } text-2xl font-semibold text-gray-600`}
    >
      {year}
    </div>
  );
};

const EventDetail: React.FC<EventDetailProps> = ({ children, orientation }) => {
  return (
    <div
      className={`w-6/12 flex flex-row ${
        orientation === "right" ? "justify-start" : "justify-end"
      }`}
    >
      <div className="max-w-[350px] bg-white/40 py-2 px-4 ml-4 rounded-md shadow text-xs">
        {children}
      </div>
    </div>
  );
};

const ScrollingTimelineLifeEvent: React.FC<ScrollingTimelineLifeEventProps> = ({
  className,
  year,
  orientation = "right",
  children,
}) => {
  return (
    <div
      className={`flex flex-row space-x-6 sticky items-center w-full ${className}`}
    >
      {orientation === "right" ? (
        <EventYear year={year} orientation={orientation} />
      ) : null}
      <EventDetail orientation={orientation}>{children}</EventDetail>
      {orientation === "left" ? (
        <EventYear year={year} orientation={orientation} />
      ) : null}
    </div>
  );
};

export default ScrollingTimelineLifeEvent;
