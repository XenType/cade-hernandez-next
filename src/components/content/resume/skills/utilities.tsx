import { StackingTileProps } from "../../common/stacking-tiles";
import { ResumeSkillEntry } from "./resume-skill-list";
import SkillTileTemplate from "./skill-tile-template";

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

const sortByTitle = (
  entryA: ResumeSkillEntry,
  entryB: ResumeSkillEntry
): number => {
  if (entryA.title < entryB.title) {
    return -1;
  }
  if (entryA.title > entryB.title) {
    return 1;
  }
  return 0;
};

const sortByMastery = (
  entryA: ResumeSkillEntry,
  entryB: ResumeSkillEntry
): number => {
  return entryB.mastery - entryA.mastery;
};

const sortByCategory = (
  entryA: ResumeSkillEntry,
  entryB: ResumeSkillEntry
): number => {
  if (entryA.category < entryB.category) {
    return -1;
  }
  if (entryA.category > entryB.category) {
    return 1;
  }
  return 0;
};

const isInExperienceRange = (
  token: string,
  entry: ResumeSkillEntry
): boolean => {
  const hasPlus = token.includes("+");
  const asNumber = parseInt(token.replace("+", ""));
  if (!Number.isNaN(asNumber)) {
    const clampedNumber = asNumber > 10 ? 10 : asNumber;
    const entryExpYears = parseInt(entry.expYears.replace("+", ""));
    if (hasPlus) {
      return entryExpYears >= clampedNumber;
    }
    return entryExpYears === clampedNumber;
  }
  return false;
};

const getMasteryValue = (masteryText: string): number => {
  switch (masteryText.toLowerCase()) {
    case "novice":
      return 2;
    case "average":
      return 3;
    case "advanced":
      return 4;
    case "expert":
      return 5;
    case "learning":
      return 1;
    default:
      return 0;
  }
};

export {
  formatEntryAsTile,
  sortByCategory,
  sortByMastery,
  sortByTitle,
  isInExperienceRange,
  getMasteryValue,
};
