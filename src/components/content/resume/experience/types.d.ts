type CareerPath = "Engineering" | "Service" | "Support";

interface EventListItem {
  key: string;
  content: string;
}

interface TimelineViewerEntry {
  year: number;
  groupProps: EventGroupCardProps;
}

interface TimelineConfiguration {
  startYear: number;
  endYear: number;
  key: CareerPath | "";
  timelineEntries: TimelineViewerEntry[];
}
