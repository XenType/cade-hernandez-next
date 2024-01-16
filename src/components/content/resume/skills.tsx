import StackingTiles, { StackingTileProps } from "../common/stacking-tiles";
import SkillTileTemplate, {
  SkillTileTemplateProps,
} from "./skill-tile-template";

type ResumeSkillEntry = { title: string } & SkillTileTemplateProps;

const ResumeSkillList: ResumeSkillEntry[] = [
  { title: "HTML / CSS", mastery: 5, category: "language", expYears: "10+" },
  {
    title: "Website Design",
    mastery: 5,
    category: "process",
    expYears: "10+",
  },
  { title: "JavaScript", mastery: 5, category: "language", expYears: "10+" },
  { title: "TypeScript", mastery: 5, category: "language", expYears: "10+" },
  { title: "NodeJS", mastery: 5, category: "environment", expYears: "10+" },
  { title: "React", mastery: 5, category: "environment", expYears: "10+" },
  { title: "C#", mastery: 5, category: "language", expYears: "6" },
  { title: "ASP.NET", mastery: 5, category: "language", expYears: "6" },
  { title: "ASP Classic", mastery: 5, category: "language", expYears: "10+" },
  { title: "GDScript", mastery: 3, category: "language", expYears: "1" },
  { title: "Python", mastery: 3, category: "language", expYears: "2" },
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
  { title: "RESTful APIs", mastery: 5, category: "environment", expYears: "8" },
  {
    title: "Visual Studio",
    mastery: 5,
    category: "environment",
    expYears: "8",
  },
  { title: "VSCode", mastery: 5, category: "environment", expYears: "8" },
  { title: "React", mastery: 5, category: "environment", expYears: "8" },
  { title: "MobX", mastery: 5, category: "environment", expYears: "8" },
  { title: "Redux", mastery: 5, category: "environment", expYears: "8" },
  { title: "Godot 4.1", mastery: 5, category: "environment", expYears: "8" },
  { title: "Redis", mastery: 5, category: "environment", expYears: "8" },
  { title: "Node.js", mastery: 5, category: "environment", expYears: "8" },
  { title: "Linux", mastery: 5, category: "environment", expYears: "8" },
  { title: "Windows", mastery: 5, category: "environment", expYears: "8" },
  { title: "MacOS", mastery: 5, category: "environment", expYears: "8" },
  { title: "Next.js", mastery: 5, category: "environment", expYears: "8" },
  { title: "Jira", mastery: 5, category: "process", expYears: "8" },
  { title: "Git", mastery: 5, category: "environment", expYears: "8" },
  { title: "Express.js", mastery: 5, category: "environment", expYears: "8" },
  { title: "Docker", mastery: 5, category: "environment", expYears: "8" },
  {
    title: ".NET Framework",
    mastery: 5,
    category: "environment",
    expYears: "8",
  },
  {
    title: "Relational Databases",
    mastery: 5,
    category: "process",
    expYears: "8",
  },
];

const ResumeSkills: React.FC = () => {
  const formatEntryAsTile = ({
    title,
    mastery,
    category,
    expYears,
  }: ResumeSkillEntry): StackingTileProps => {
    return {
      title: title,
      content: (
        <SkillTileTemplate
          mastery={mastery}
          category={category}
          expYears={expYears}
        />
      ),
    };
  };
  return (
    <div className="flex flex-col w-full h-full space-y-12">
      <div className="w-full flex flex-row justify-end">
        <div className="bg-white rounded-2xl text-sm w-40 pl-4 h-6 flex flex-col justify-center italic text-gray-700 mr-4">
          Filter Skills
        </div>
      </div>
      <div className="grow bg-white h-full">
        <StackingTiles
          tileList={ResumeSkillList.map((entry) => formatEntryAsTile(entry))}
        />
      </div>
    </div>
  );
};

export default ResumeSkills;
