import EventCard, { EventCardClickHandler, EventCardProps } from "./event-card";

interface EventGroupCardProps {
  title: string;
  subtitle: string;
  yearRange: string;
  events: EventCardProps[];
  onEventClick?: EventCardClickHandler;
}

const EventGroupCard: React.FC<EventGroupCardProps> = ({
  title,
  subtitle,
  yearRange,
  events,
  onEventClick,
}) => {
  return (
    <div className="bg-cade-blue-dark rounded-md shadow-lg border border-cade-blue-med shadow-cade-blue-med/50 z-5 w-[150px] md:w-[350px] flex flex-col space-y-2 pb-2">
      <div className="flex flex-col z-5">
        <div className="flex flex-row justify-between w-full items-center text-white">
          <div className="px-4 py-2 flex flex-col">
            <div className="font-semibold text-sm xl:text-base">{title}</div>
            <div className="text-xs">{subtitle}</div>
          </div>
          <div className="pr-4 text-xs">{yearRange}</div>
        </div>
        <div className="relative w-full flex flex-col items-center px-4 pb-2 space-y-2 z-5">
          {events.map(({ title, startYear, eventList }) => (
            <EventCard
              title={title}
              startYear={startYear}
              key={`${startYear}-${title.substring(0, 5).replace(" ", "-")}`}
              eventList={eventList}
              onEventClick={onEventClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGroupCard;

export type { EventGroupCardProps };
