import { ResumeListEntry } from "./types";
import StorageIcon from "@mui/icons-material/Storage";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import BrushIcon from "@mui/icons-material/Brush";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import RuleIcon from "@mui/icons-material/Rule";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import HubIcon from "@mui/icons-material/Hub";
import CssIcon from "@/components/content/css-icon";
import CSharpIcon from "@/components/content/css-icon/c-sharp";
import AspDotNetIcon from "@/components/content/css-icon/asp-net";
import AspClassicIcon from "@/components/content/css-icon/asp-classic";
import DotNetIcon from "@/components/content/css-icon/dot-net";
import TypeScriptIcon from "@/components/content/svgs/typescript";
import JavaScriptIcon from "@/components/content/svgs/javascript";
import HtmlIcon from "@/components/content/svgs/html5";
import SqlIcon from "@/components/content/svgs/sql";
import GraphQlIcon from "@/components/content/svgs/graphql";
import NodeJsIcon from "@/components/content/svgs/nodejs";
import ReactIcon from "@/components/content/svgs/react";
import GoogleCloudPlatformIcon from "@/components/content/svgs/google-cloud";
import AmazonWebServicesIcon from "@/components/content/svgs/amazon-web-services";
import RedisIcon from "@/components/content/svgs/redis";
import GitIcon from "@/components/content/svgs/git";
import DockerIcon from "@/components/content/svgs/docker";
import NextJsIcon from "@/components/content/svgs/nextjs";
import JiraIcon from "@/components/content/svgs/jira";
import AgileIcon from "@/components/content/svgs/agile-development";
import MachineLearningIcon from "@/components/content/svgs/machine-learning";
const RESUME_KNOWLEDGE: ResumeListEntry[] = [
  {
    id: "mcc-edu",
    title: "Associate of Computer Sciences",
    organization: "McLennan Community College",
    timeFrame: "1997-1999",
    description:
      "When I attended MCC it was one of the most affordable junior colleges in Texas that was still able to provide a well-rounded education in Computer Science.",
    action: "McLennan.edu",
    actionLink: "https://mclennan.edu/",
  },
  {
    id: "ibm-ai",
    title: "AI Fundamentals",
    organization: "IBM SkillsBuild",
    timeFrame: "2024",
    description:
      "During this foundational course I gained hands-on experience with IBM's Watson Studio and AutoAI feature.",
    badge: (
      <div
        data-iframe-width="250"
        data-iframe-height="250"
        data-share-badge-id="71deb4ed-0647-4ec3-b3d5-5beb6e1cfeb5"
        data-share-badge-host="https://www.credly.com"
      />
    ),
  },
  {
    id: "google-learn",
    title: "Cloud Engineer & Developer Paths",
    organization: "Google Skills Boost",
    timeFrame: "2024",
    description:
      "I've completed the Cloud Engineer learning path, which solidified my understanding infrastructure in GCP. I've also completed part of the Cloud Developer learning path, and I will likely pick it back up again, even though it is more of a refresher.",
    action: "Completion Badges",
    actionLink:
      "https://www.cloudskillsboost.google/public_profiles/b66bad97-b3c2-4ceb-92cf-ec9fef27a278",
  },
]; // add gcp, etc

const RESUME_SKILLS: ResumeListEntry[] = [
  {
    id: "languages",
    title: "Languages",
    description: "",
    skills: [
      {
        icon: <TypeScriptIcon />,
        label: "TypeScript",
        mastery: 90,
        years: "5",
      },
      {
        icon: <JavaScriptIcon />,
        label: "JavaScript",
        mastery: 95,
        years: "10+",
      },
      { icon: <HtmlIcon />, label: "HTML / CSS", mastery: 95, years: "10+" },
      { icon: <CSharpIcon />, label: "C#", mastery: 85, years: "6" },
      { icon: <AspDotNetIcon />, label: "ASP.NET", mastery: 85, years: "6" },
      {
        icon: <AspClassicIcon />,
        label: "ASP Classic",
        mastery: 95,
        years: "10+",
      },
      { icon: <SqlIcon />, label: "T-SQL", mastery: 95, years: "10+" },
      { icon: <GraphQlIcon />, label: "GraphQL", mastery: 75, years: "4" },
    ],
  },
  {
    id: "environments",
    title: "Environments & Frameworks",
    description: "",
    skills: [
      { icon: <NodeJsIcon />, label: "NodeJS", mastery: 95, years: "6" },
      { icon: <ReactIcon />, label: "React", mastery: 95, years: "6" },
      {
        icon: (
          <CssIcon className="text-5xl md:text-7xl -mt-1 text-accent-blue-dark">
            <StorageIcon fontSize="inherit" />
          </CssIcon>
        ),
        label: "MobX/Zustand",
        mastery: 95,
        years: "4",
      },
      {
        icon: <GoogleCloudPlatformIcon />,
        label: "Google Cloud Platform",
        mastery: 85,
        years: "4",
      },
      {
        icon: <AmazonWebServicesIcon />,
        label: "Amazon Web Services",
        mastery: 70,
        years: "4",
      },
      {
        icon: <RedisIcon />,
        label: "Redis",
        mastery: 85,
        years: "2",
      },
      { icon: <GitIcon />, label: "Git", mastery: 95, years: "7" },
      {
        icon: (
          <CssIcon className="text-5xl md:text-7xl -mt-1 text-yellow-400">
            <DynamicFormIcon fontSize="inherit" />
          </CssIcon>
        ),
        label: "ExpressJS",
        mastery: 90,
        years: "4",
      },
      { icon: <DockerIcon />, label: "Docker", mastery: 85, years: "4" },
      { icon: <NextJsIcon />, label: "NextJS", mastery: 95, years: "4" },
      {
        icon: <DotNetIcon />,
        label: ".NET Framework",
        mastery: 90,
        years: "7",
      },
    ],
  },
  {
    id: "processes",
    title: "Processes & Procedures",
    description: "",
    skills: [
      {
        icon: (
          <CssIcon className="text-5xl md:text-7xl -mt-1 text-amber-400">
            <BrushIcon fontSize="inherit" />
          </CssIcon>
        ),
        label: "Website Design",
        mastery: 95,
        years: "10+",
      },
      {
        icon: (
          <CssIcon className="text-5xl md:text-7xl -mt-1 text-cyan-500">
            <SyncAltIcon fontSize="inherit" />
          </CssIcon>
        ),
        label: "CI / CD",
        mastery: 90,
        years: "4",
      },
      {
        icon: (
          <CssIcon className="text-5xl md:text-7xl -mt-1 text-red-500">
            <RuleIcon fontSize="inherit" />
          </CssIcon>
        ),
        label: "Test Driven Development",
        mastery: 95,
        years: "7",
      },
      {
        icon: (
          <CssIcon className="text-5xl md:text-7xl -mt-1 text-green-500">
            <MobileFriendlyIcon fontSize="inherit" />
          </CssIcon>
        ),
        label: "Mobile First Design",
        mastery: 95,
        years: "3",
      },
      {
        icon: (
          <CssIcon className="text-5xl md:text-7xl -mt-1 text-accent-blue-dark">
            <HubIcon fontSize="inherit" />
          </CssIcon>
        ),
        label: "Microservice Architecture",
        mastery: 85,
        years: "3",
      },
      {
        icon: <JiraIcon />,
        label: "Jira",
        mastery: 85,
        years: "6",
      },
      {
        icon: <AgileIcon />,
        label: "Agile Development",
        mastery: 95,
        years: "5",
      },
      {
        icon: <MachineLearningIcon />,
        label: "Machine Learning",
        mastery: 75,
        years: "< 1",
      },
    ],
  },
];

const RESUME_EXPERIENCE: ResumeListEntry[] = [
  {
    id: "zoca",
    title: "Owner / Operator",
    organization: "Zoca, LLC",
    timeFrame: "2024",
    description:
      "I'm currently developing a subscription based product that will empower users throughout their creative process.",
    accomplishments: [
      "Created application architecture within the Google Firebase platform.",
      "Designed UX for marketing pages, user portal and admin overviews.",
      "Developed prompts for use with Vertex AI (Gemini Pro).",
    ],
  },
  {
    id: "volusion",
    title: "Sr Software Engineer / Tech Lead",
    organization: "Volusion, LLC",
    timeFrame: "2016-2023",
    description:
      "Led efforts to maintain and enhance the company’s flagship product.",
    accomplishments: [
      "Tech Lead on replacement of an aging email system with a NodeJS cloud microservice utilizing Postgres and BullMQ, reducing related user complaints by 85%.",
      "Primary Contributor for PayPal (.NET) and Stripe (NodeJS) payment integrations, increasing transactional revenue by up to 8%.",
      "Empowered junior developers and provided guidance and feedback to engineering managers.",
    ],
  },
  {
    id: "freelance",
    title: "Freelance & Non-Technical Career",
    organization: "Waco & Austin, TX",
    timeFrame: "2003-2016",
    description:
      "Leveraged communication and problem-solving skills in freelance, service & support to deliver exceptional results to clients, co-workers & employers.",
    accomplishments: [
      "Resolved in-game issues for 200+ Blizzard Entertainment users per week, enhancing their game play experience.",
      "Created a white-label webinar platform for Jeneth Blackert.",
      "Created AccessDB inventory application for Dagar’s Catering, reducing event planning time up to 50% and providing increased accuracy to 'pull-lists'.",
    ],
  },
  {
    id: "efg-waco",
    title: "Software Engineer",
    organization: "Electronic Financial Group",
    timeFrame: "1999-2003",
    description:
      "Starting as a Junior Engineer, I took an opportunity to lead a small team soon after joining this company. We successfully delivered numerous applications for both internal and customer-facing use.",
    accomplishments: [
      "Built internal tools allowing safe and secure cataloging and archiving of ACH transaction files.",
      "Hired and led a small team of developers to accomplish tasks on time with minimal defects.",
      "Provided advice to leadership team on new technologies and processes to grow the department.",
      "Designed internal systems to allow agents to initiate ACH funds transfers.",
      "Built and released new software products on CD (MSI format), on the company intranet and publicly via on-loc IIS webservers",
    ],
  },
];

export { RESUME_KNOWLEDGE, RESUME_SKILLS, RESUME_EXPERIENCE };
