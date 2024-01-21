const SupportCareerTimeline: TimelineConfiguration = {
  key: "Support",
  startYear: 2007,
  endYear: 2017,
  timelineEntries: [
    {
      year: 2007,
      groupProps: {
        title: "Blizzard Entertainment",
        subtitle: "Austin, TX",
        yearRange: "2007-2011",
        events: [
          {
            title: "Game Master",
            startYear: 2007,
            eventList: [
              {
                key: "engage",
                content:
                  "Engage with millions of World of Warcraft players in the American region and provide a themed support experience.",
              },
              {
                key: "resolve",
                content:
                  "Resolve player disputes, reverse effects of software defects and assist users with any other game issues they experience.",
              },
              {
                key: "issue",
                content:
                  "Issue citations for unexceptable online behavior according to a strict internal grading system.",
              },
            ],
          },
        ],
      },
    },
    {
      year: 2016,
      groupProps: {
        title: "Volusion",
        subtitle: "Austin, TX",
        yearRange: "2016-2023",
        events: [
          {
            title: "Customer Experience Team",
            startYear: 2016,
            eventList: [
              {
                key: "assist",
                content:
                  "Assist a large client base in learning about and managing their online stores.",
              },
              {
                key: "customize",
                content:
                  "Apply advanced customizations to store themes for clients not familiar with HTML, CSS or JavaScript.",
              },
              {
                key: "execute",
                content:
                  "Execute store creation, ssl installation and other internal processes during off hours when requested.",
              },
            ],
          },
          {
            title: "CE Trainer",
            startYear: 2016,
            eventList: [
              {
                key: "continue",
                content:
                  "Continue with all responsibilities of any other CE Team member.",
              },
              {
                key: "create",
                content:
                  "Create T-SQL training lessons and exams to expand the number of CE Team members who can provide custom SQL reporting.",
              },
              {
                key: "teach",
                content:
                  "Teach T-SQL classes to CE Team members interested in learning advanced support techniques.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default SupportCareerTimeline;
