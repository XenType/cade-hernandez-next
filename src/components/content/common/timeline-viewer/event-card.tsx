type EventCardClickHandler = (componentToDisplay: React.ReactNode) => void;

interface EventCardProps {
  title: string;
  startYear: number;
  eventList: EventListItem[];
  onEventClick?: EventCardClickHandler;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  startYear,
  eventList,
  onEventClick,
}) => {
  const handleEventCardClick = (): void => {
    onEventClick?.(
      <div className="flex flex-col space-y-4 z-10 pb-2">
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold">{title}</div>
          <div className="text-sm">Started in {startYear}</div>
        </div>
        <ul className="list-disc ml-6 text-sm flex flex-col h-full space-y-2">
          {eventList.map((entry) => (
            <li key={entry.key}>{entry.content}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className="bg-white rounded-md w-full py-1 px-2 xl:p-2 cursor-pointer hover:outline hover:outline-cade-blue-med z-5"
      onClick={() => handleEventCardClick()}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-row justify-between items-center">
          <div className="text-xs xl:text-base font-semibold">{title}</div>
          <div className="text-xs xl:text-base">{startYear}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

export type { EventCardProps, EventCardClickHandler };
