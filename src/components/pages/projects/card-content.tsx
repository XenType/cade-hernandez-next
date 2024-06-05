import CollapsingCardSecondaryLine from "@/components/content/collapsing-card/secondary-line";
import PillList from "@/components/content/pill-list";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

interface ProjectCardContentProps {
  organization: string;
  timeFrame: string;
  description: string | React.ReactNode;
  skillsUsed: string[];
  action?: string;
  actionLink?: string;
}

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
  organization,
  timeFrame,
  description,
  skillsUsed,
  action,
  actionLink,
}) => {
  //
  return (
    <div className="flex flex-col items-center w-full">
      <CollapsingCardSecondaryLine
        leftText={organization}
        rightText={timeFrame}
      />
      <div className="text-sm md:text-lg text-pretty font-medium text-gray-800 w-full p-2 md:pb-4">
        {description}
      </div>
      <PillList list={skillsUsed} />
      {action && actionLink ? (
        <Link href={actionLink} target="_new">
          <div className="flex flex-row items-center space-x-2">
            <div className="text-base md:text-lg font-bold underline text-accent-blue-dark decoration-2">
              {action}
            </div>
            <div className="text-lg md:text-xl text-accent-blue-dark">
              <OpenInNewIcon fontSize="inherit" />
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default ProjectCardContent;
