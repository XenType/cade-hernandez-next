interface SkillTileTemplateProps {
  mastery: number;
  category: "language" | "process" | "environment";
  expYears: string;
}

// TODO NEXT Implement the rest of this

const SkillTileTemplate: React.FC<SkillTileTemplateProps> = ({
  mastery,
  category,
  expYears,
}) => {
  const getSkillBackgroundClass = (): string => {
    switch (category) {
      case "language":
        return "code-background";
      case "process":
        return "process-background";
      case "environment":
        return "environment-background";
    }
    return "";
  };
  return (
    <div className={`${getSkillBackgroundClass()} w-full h-full p-2`}>
      content
    </div>
  );
};

export default SkillTileTemplate;

export type { SkillTileTemplateProps };
