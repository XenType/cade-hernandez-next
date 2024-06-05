"use client";
import { useEffect, useState } from "react";
import SubMenuItem from "@/components/content/sub-menu-item";
import CollapsingCard from "@/components/content/collapsing-card";
import { ResumeListEntry } from "@/data/types";
import {
  RESUME_EXPERIENCE,
  RESUME_KNOWLEDGE,
  RESUME_SKILLS,
} from "@/data/resume-list";
import ResumeCardContent from "./card-content";
import StandardButton from "@/components/content/standard-button";
import Link from "next/link";

type ResumeView = "knowledge" | "skills" | "experience";

interface ResumePageProps {
  //
}

const ResumePage: React.FC<ResumePageProps> = ({}) => {
  const [viewMode, setViewMode] = useState<ResumeView>("knowledge");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedResumeList, setSelectedResumeList] = useState<
    ResumeListEntry[]
  >([]);
  const handleCardClick = (clickIndex: number): void => {
    setSelectedIndex(clickIndex === selectedIndex ? -1 : clickIndex);
  };
  useEffect(() => {
    setSelectedIndex(-1);
    switch (viewMode) {
      case "knowledge":
        setSelectedResumeList(RESUME_KNOWLEDGE);
        break;
      case "skills":
        setSelectedResumeList(RESUME_SKILLS);
        break;
      case "experience":
        setSelectedResumeList(RESUME_EXPERIENCE);
        break;
    }
  }, [viewMode]);
  return (
    <div className="flex flex-col w-full items-center p-2 relative">
      <div className="flex flex-row justify-around space-x-4 font-semibold w-full md:max-w-[600px] text-sm md:text-lg">
        <SubMenuItem
          title="knowledge"
          isSelected={viewMode === "knowledge"}
          onClick={() => setViewMode("knowledge")}
        />
        <SubMenuItem
          title="skills"
          isSelected={viewMode === "skills"}
          onClick={() => setViewMode("skills")}
        />
        <SubMenuItem
          title="experience"
          isSelected={viewMode === "experience"}
          onClick={() => setViewMode("experience")}
        />
      </div>
      <div className="flex flex-col w-full md:max-w-[600px] xl:max-w-[1200px] items-center p-4 space-y-4">
        {selectedResumeList.map((entry, index) => {
          return (
            <CollapsingCard
              key={entry.id}
              title={entry.title}
              isOpen={selectedIndex === index}
              onOpenToggle={() => handleCardClick(index)}
            >
              <ResumeCardContent
                organization={entry.organization}
                timeFrame={entry.timeFrame}
                description={entry.description}
                skills={entry.skills}
                badge={entry.badge}
                accomplishments={entry.accomplishments}
                action={entry.action}
                actionLink={entry.actionLink}
              />
            </CollapsingCard>
          );
        })}
      </div>
      <div className="absolute -top-12 right-4">
        <Link href="/docs/resume.pdf" target="_new">
          <StandardButton type="secondary">
            <div className="text-sm">Printable Resume</div>
          </StandardButton>
        </Link>
      </div>
    </div>
  );
};

export default ResumePage;
