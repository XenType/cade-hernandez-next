type BaseListEntry = {
  id: string;
  title: string;
  description: string | React.ReactNode;
  action?: string;
  actionLink?: string;
};

type ProjectListEntry = BaseListEntry & {
  organization: string;
  timeFrame: string;
  skillsUsed: string[];
};

type ResumeSkillEntry = {
  label: string;
  mastery: number;
  years: string;
  icon: React.ReactNode;
};

type ResumeListEntry = BaseListEntry & {
  organization?: string;
  timeFrame?: string;
  skills?: ResumeSkillEntry[];
  badge?: React.ReactNode;
  accomplishments?: string[];
};

export type { ProjectListEntry, ResumeListEntry, ResumeSkillEntry };
