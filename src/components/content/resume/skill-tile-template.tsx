import StarRating from "../common/star-rating";

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
  };
  const getMasteryText = (): string => {
    switch (mastery) {
      case 2:
        return "Novice";
      case 3:
        return "Average";
      case 4:
        return "Advanced";
      case 5:
        return "Expert";
      default:
        return "Learning";
    }
  };
  const isYearPlural = (): boolean => {
    if (expYears.includes("+")) {
      return true;
    }
    const value = parseInt(expYears.replace("<", "").replace(" ", ""));
    if (Number.isNaN(value) || value > 1) {
      return true;
    }
    return false;
  };
  return (
    <div
      className={`${getSkillBackgroundClass()} w-full h-full p-2 flex flex-col justify-around text-center text-white items-center`}
    >
      <div className="flex flex-col space-y-2">
        <div className="text-cade-blue-lite text-lg font-bold">Mastery</div>
        <div className="text-3xl font-bold">{getMasteryText()}</div>
        <div>
          <StarRating rating={mastery} />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="text-3xl font-bold">
          {expYears} year{isYearPlural() ? "s" : ""}
        </div>
        <div className="text-cade-blue-lite text-lg font-bold">Experience</div>
      </div>
    </div>
  );
};

export default SkillTileTemplate;

export type { SkillTileTemplateProps };
