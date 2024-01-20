const EngineeringCareerTimeline: TimelineConfiguration = {
  key: "engineering",
  startYear: 1999,
  endYear: 2024,
  timelineEntries: [
    {
      year: 1999,
      groupProps: {
        title: "Electronic Financial Group",
        subtitle: "Waco, TX",
        yearRange: "1999-2003",
        events: [
          {
            title: "Software Engineer",
            startYear: 1999,
            eventList: [
              {
                key: "build",
                content:
                  "Build internal tools allowing to safely and securely catalog and archive ACH transaction files",
              },
              {
                key: "assist",
                content:
                  "Assist the Lead Developer in debugging and deployment of central ACH warehouse software.",
              },
              {
                key: "advise",
                content:
                  "Provide advice to leadership team on new technologies and processes to grow the team.",
              },
            ],
          },
          {
            title: "Senior Software Engineer",
            startYear: 2000,
            eventList: [
              {
                key: "lead",
                content:
                  "Hire and lead a small team of developers to accomplish tasks on time with minimal defects.",
              },
              {
                key: "advise",
                content:
                  "Provide advice to leadership on project feasibility and timelines.",
              },
              {
                key: "design",
                content:
                  "Design internal systems to allow agents to initiate ACH funds transfers.",
              },
              {
                key: "release",
                content:
                  "Build and release new software products on CD (MSI format), on the internal company network and on-loc IIS webservers",
              },
            ],
          },
        ],
      },
    },
    {
      year: 2003,
      groupProps: {
        title: "Freelance",
        subtitle: "Waco, TX | Austin, TX",
        yearRange: "2003-2016",
        events: [
          {
            title: "Website Designer",
            startYear: 2003,
            eventList: [
              {
                key: "acquire",
                content:
                  "Acquire and maintain a list of clients in need of a website designer and host.",
              },
              {
                key: "design",
                content:
                  "Present design options to clients and assist them in making choices that build a coherent, attractive website.",
              },
              {
                key: "build",
                content:
                  "Build eye-catching websites for clients with features like monthly calendars, contact forms, special event landing pages and online payment forms.",
              },
              {
                key: "maintain",
                content:
                  "Maintain client websites by providing regular updates based on their needs. Clients also have the option for a fresh new look twice per year.",
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
            title: "Support Engineer",
            startYear: 2016,
            eventList: [
              {
                key: "verify",
                content:
                  "Verify defect reports and steps to reproduce; investigate any ambiguities with desired behavior.",
              },
              {
                key: "prioritize",
                content:
                  "Work with the other Support Engineers and Technical Support leaders to prioritize incoming defect reports.",
              },
              {
                key: "resolve",
                content:
                  "Resolve defects in core software, refactoring aging ASP Classic code when possible for a cleaner codebase.",
              },
              {
                key: "test",
                content:
                  "Test defect resolutions in staging environments for my work as well as the work of other team members.",
              },
              {
                key: "document",
                content:
                  "Provide updated documentation to Technical Support leadership and training teams.",
              },
            ],
          },
          {
            title: "Software Engineer",
            startYear: 2017,
            eventList: [
              {
                key: "continue",
                content:
                  "Continue working on defects as I did in the Support Engineer role.",
              },
              {
                key: "design",
                content:
                  "Collaborate with team members to design new 'quick win' features to solve end-user pain points.",
              },
              {
                key: "build",
                content:
                  "Build and test components in new features; assist with deployment preparation and any issues that come up.",
              },
            ],
          },
          {
            title: "Full-Stack Engineer",
            startYear: 2019,
            eventList: [
              {
                key: "discuss",
                content:
                  "Discuss new projects and provide feedback on requirements and timelines.",
              },
              {
                key: "implement",
                content:
                  "Build and implement new features from end-2-end; creating data stores, APIs, web applications and any other necessary components.",
              },
              {
                key: "review",
                content:
                  "Review pull requests from other developers, providing suggestions for cleaner, well tested code.",
              },
            ],
          },
          {
            title: "Senior Full-Stack Engineer",
            startYear: 2020,
            eventList: [
              {
                key: "continue",
                content: "Continue all Full-Stack Engineer responsibilities.",
              },
              {
                key: "mentor",
                content:
                  "Mentor Junior Engineers on my team, and at times, in the entire organization.",
              },
              {
                key: "collaborate",
                content:
                  "Collaborate with the team to design new features, helping in requirement discovery, UX design and overall architecture.",
              },
              {
                key: "deploy",
                content:
                  "Deploy features and fixes to staging and production environments.",
              },
            ],
          },
          {
            title: "Technical Lead",
            startYear: 2022,
            eventList: [
              {
                key: "continue",
                content:
                  "Continue all Senior Full-Stack Engineer responsibilities.",
              },
              {
                key: "technology",
                content:
                  "Investigate new technologies and document their use in future projects.",
              },
              {
                key: "advise",
                content:
                  "Provide advice and information to Engineering leadership on project timelines, release schedules and overall health.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default EngineeringCareerTimeline;
