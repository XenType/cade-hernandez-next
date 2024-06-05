import CollapsingCardSecondaryLine from "@/components/content/collapsing-card/secondary-line";

import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ResumeSkillEntry } from "@/data/types";
import { useEffect } from "react";
import ProgressBar from "@/components/content/progress-bar";

interface ResumeCardContentProps {
  organization?: string;
  timeFrame?: string;
  description: string | React.ReactNode;
  skills?: ResumeSkillEntry[];
  badge?: React.ReactNode;
  accomplishments?: string[];
  action?: string;
  actionLink?: string;
}

const ResumeCardContent: React.FC<ResumeCardContentProps> = ({
  organization,
  timeFrame,
  description,
  skills = [],
  badge = null,
  accomplishments = [],
  action,
  actionLink,
}) => {
  useEffect(() => {
    if (!badge) return;
    const existingScript = document.getElementById("credly-script");
    if (!existingScript) {
      const newScript = document.createElement("script");
      newScript.id = "credly-script";
      newScript.src = "//cdn.credly.com/assets/utilities/embed.js";
      newScript.async = true;
      document.body.appendChild(newScript);
    }

    return () => {
      const targetScript = document.getElementById("credly-script");
      targetScript?.remove();
    };
  });

  return (
    <div className="flex flex-col items-center w-full">
      {organization || timeFrame ? (
        <CollapsingCardSecondaryLine
          leftText={organization}
          rightText={timeFrame}
        />
      ) : null}
      <div className="flex flex-col w-full space-y-1">
        {badge ? (
          <div className="flex flex-col items-center w-full">{badge}</div>
        ) : null}
        {description ? (
          <div className="text-sm md:text-lg text-pretty font-medium text-gray-800 w-full p-2">
            {description}
          </div>
        ) : null}
      </div>
      {accomplishments.length ? (
        <ul className="list-disc pl-6 flex flex-col w-full text-sm md:text-base font-semibold">
          {accomplishments.map((entry, index) => {
            return <li key={index}>{entry}</li>;
          })}
        </ul>
      ) : null}
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-2 w-full p-1">
        {skills.length
          ? skills.map((entry, index) => {
              return (
                <div
                  key={entry.label}
                  className={`grid grid-cols-9 gap-x-1 py-3 w-full justify-items-start items-center ${
                    index ? "border-t border-accent-gray-light" : ""
                  }`}
                >
                  <div className="col-span-2 row-span-2 flex flex-row w-full justify-center items-center">
                    {entry.icon}
                  </div>
                  <div className="col-span-7 text-base md:text-2xl font-semibold pb-1">
                    {entry.label}
                  </div>
                  <div className="col-span-2 text-xs md:text-lg font-semibold text-fill-gray-dark">
                    {entry.years} years
                  </div>
                  <div className="col-span-5 w-full flex flex-col items-center">
                    <div className="text-xs md:text-sm -mt-3 font-medium text-fill-gray-dark">
                      Mastery ({entry.mastery}%)
                    </div>
                    <ProgressBar percentageValue={entry.mastery} />
                  </div>
                </div>
              );
            })
          : null}
      </div>
      {action && actionLink ? (
        <Link href={actionLink} target="_new">
          <div className="flex flex-row items-center space-x-2">
            <div className="text-base font-bold underline text-accent-blue-dark decoration-2">
              {action}
            </div>
            <div className="text-lg text-accent-blue-dark">
              <OpenInNewIcon fontSize="inherit" />
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default ResumeCardContent;
