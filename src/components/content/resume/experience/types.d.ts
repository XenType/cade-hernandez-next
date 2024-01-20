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
  key: string;
  timelineEntries: TimelineViewerEntry[];
}
