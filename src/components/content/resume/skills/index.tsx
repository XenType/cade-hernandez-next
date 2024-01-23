"use client";

import { useState } from "react";
import StackingTiles from "../../common/stacking-tiles";
import { ResumeSkillEntry, ResumeSkillList } from "./resume-skill-list";
import {
  sortByTitle,
  sortByCategory,
  sortByMastery,
  getMasteryValue,
  formatEntryAsTile,
  isInExperienceRange,
} from "./utilities";
import ResumeFilterControl from "./filter-control";
import ResumeTileSortControl, { TileSortMode } from "./sort-control";

const ResumeSkills: React.FC = () => {
  const [sortMode, setSortMode] = useState<TileSortMode>(TileSortMode.MASTERY);
  const [filterText, setFilterText] = useState("");

  const getSortedEntries = (): ResumeSkillEntry[] => {
    if (sortMode === TileSortMode.CATEGORY) {
      return ResumeSkillList.sort(sortByTitle).sort(sortByCategory);
    }
    return ResumeSkillList.sort(sortByTitle).sort(sortByMastery);
  };

  const applySkillFilter = (entry: ResumeSkillEntry): boolean => {
    let keepEntry = true;
    if (filterText) {
      const entryTokens = filterText.split(" ");
      const tokenResults = entryTokens.map((token) => {
        if (token) {
          if (isInExperienceRange(token, entry)) {
            return true;
          }
          const masteryValue = getMasteryValue(token);
          if (masteryValue && masteryValue === entry.mastery) {
            return true;
          }
          if (entry.title.toLowerCase().includes(token.toLowerCase())) {
            return true;
          }
          return false;
        }
        return true;
      });
      keepEntry = tokenResults.every((result) => result);
    }
    return keepEntry;
  };

  return (
    <div className="flex flex-col w-full h-full mt-2">
      <div className="w-full flex flex-row justify-between bg-white text-cade-blue-dark items-center h-14 border-t-2 border-cade-blue-dark">
        <ResumeTileSortControl sortMode={sortMode} onChange={setSortMode} />
        <ResumeFilterControl
          onChange={setFilterText}
          filterValue={filterText}
        />
      </div>
      <div className="grow h-full">
        <StackingTiles
          tileList={getSortedEntries()
            .filter(applySkillFilter)
            .map((entry) => formatEntryAsTile(entry))}
        />
      </div>
      <div className="m-auto max-w-[1000px] h-full pt-4 px-8 flex flex-col space-y-4 text-sm md:text-xs xl:text-base pb-4 md:pb-0 text-justify text-gray-700 italic font-semibold">
        Scroll left-to-right to browse my list of skills. Skills can be sorted
        by mastery (highest to lowest) or category (environments -{"> "}
        languages -{"> "} processes). You can narrow down the list using the
        filter text input:
        <ul className="list-disc ml-6">
          <li>
            Enter a number to see skills with years of experience equal to that
            number.
          </li>
          <li>
            Append a plus sign "+" to the number to see skills with experience
            greater than or equal to the number.
          </li>
          <li>
            Enter a mastery keyword (Expert, Advanced, Standard, Novice or
            Learning) to see all skills at that level of mastery.
          </li>
          <li>
            Enter all or part of a skill name to search for that specific skill.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeSkills;
