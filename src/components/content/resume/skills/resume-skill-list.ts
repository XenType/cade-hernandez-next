import { SkillTileTemplateProps } from "./skill-tile-template";

type ResumeSkillEntry = { title: string } & SkillTileTemplateProps;

const ResumeSkillList: ResumeSkillEntry[] = [
  { title: "NodeJS", mastery: 5, category: "environment", expYears: "6" },
  { title: "React", mastery: 5, category: "environment", expYears: "6" },
  { title: "TypeScript", mastery: 5, category: "language", expYears: "5" },
  { title: "JavaScript", mastery: 5, category: "language", expYears: "10+" },
  { title: "HTML / CSS", mastery: 5, category: "language", expYears: "10+" },
  { title: "C#", mastery: 5, category: "language", expYears: "6" },
  {
    title: "Website Design",
    mastery: 4,
    category: "process",
    expYears: "10+",
  },
  { title: "ASP.NET", mastery: 5, category: "language", expYears: "6" },
  { title: "ASP Classic", mastery: 5, category: "language", expYears: "10+" },
  { title: "GDScript", mastery: 2, category: "language", expYears: "1" },
  { title: "T-SQL", mastery: 5, category: "language", expYears: "10+" },
  { title: "GraphQL", mastery: 4, category: "language", expYears: "4" },
  { title: "CI / CD", mastery: 4, category: "process", expYears: "4" },
  {
    title: "Test Driven Development",
    mastery: 5,
    category: "process",
    expYears: "7",
  },
  {
    title: "Microservice Architecture",
    mastery: 4,
    category: "process",
    expYears: "3",
  },
  { title: "MobX", mastery: 4, category: "environment", expYears: "4" },
  { title: "Redux", mastery: 4, category: "environment", expYears: "4" },
  { title: "Godot 4.x", mastery: 3, category: "environment", expYears: "1" },
  { title: "Redis", mastery: 4, category: "environment", expYears: "1" },

  { title: "NextJS", mastery: 4, category: "environment", expYears: "4" },
  { title: "Jira", mastery: 4, category: "process", expYears: "6" },
  { title: "Git", mastery: 4, category: "environment", expYears: "7" },
  { title: "ExpressJS", mastery: 4, category: "environment", expYears: "4" },
  { title: "Docker", mastery: 4, category: "environment", expYears: "4" },
  {
    title: ".NET Framework",
    mastery: 5,
    category: "environment",
    expYears: "7",
  },
  {
    title: "Machine Learning",
    mastery: 1,
    category: "process",
    expYears: "< 1",
  },
];

export { ResumeSkillList };
export type { ResumeSkillEntry };
