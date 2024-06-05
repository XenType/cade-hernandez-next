"use client";
import { useEffect, useState } from "react";
import CollapsingCard from "@/components/content/collapsing-card";
import SubMenuItem from "@/components/content/sub-menu-item";
import ProjectCardContent from "./card-content";
import { ProjectListEntry } from "@/data/types";
import {
  CAREER_PROJECTS,
  FREELANCE_PROJECTS,
  PERSONAL_PROJECTS,
} from "@/data/project-list";

type ProjectView = "career" | "freelance" | "personal";

interface ProjectsPageProps {
  //
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
  const [viewMode, setViewMode] = useState<ProjectView>("career");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedProjectList, setSelectedProjectList] = useState<
    ProjectListEntry[]
  >([]);
  const handleCardClick = (clickIndex: number): void => {
    setSelectedIndex(clickIndex === selectedIndex ? -1 : clickIndex);
  };
  useEffect(() => {
    setSelectedIndex(-1);
    switch (viewMode) {
      case "career":
        setSelectedProjectList(CAREER_PROJECTS);
        break;
      case "freelance":
        setSelectedProjectList(FREELANCE_PROJECTS);
        break;
      case "personal":
        setSelectedProjectList(PERSONAL_PROJECTS);
        break;
    }
  }, [viewMode]);
  return (
    <div className="flex flex-col w-full items-center p-2">
      <div className="flex flex-row justify-around space-x-4 font-semibold w-full md:max-w-[600px] text-sm md:text-lg">
        <SubMenuItem
          title="career"
          isSelected={viewMode === "career"}
          onClick={() => setViewMode("career")}
        />
        <SubMenuItem
          title="freelance"
          isSelected={viewMode === "freelance"}
          onClick={() => setViewMode("freelance")}
        />
        <SubMenuItem
          title="personal"
          isSelected={viewMode === "personal"}
          onClick={() => setViewMode("personal")}
        />
      </div>
      <div className="flex flex-col w-full md:max-w-[600px] items-center p-4 space-y-4">
        {selectedProjectList.map((entry, index) => {
          return (
            <CollapsingCard
              key={entry.id}
              title={entry.title}
              isOpen={selectedIndex === index}
              onOpenToggle={() => handleCardClick(index)}
            >
              <ProjectCardContent
                organization={entry.organization}
                timeFrame={entry.timeFrame}
                description={entry.description}
                skillsUsed={entry.skillsUsed}
                action={entry.action}
                actionLink={entry.actionLink}
              />
            </CollapsingCard>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
