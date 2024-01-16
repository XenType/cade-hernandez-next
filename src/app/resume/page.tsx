import StackingPanels from "@/components/content/common/stacking-panels";
import ResumeSkills from "@/components/content/resume/skills";
import ResumeSummary from "@/components/content/resume/summary";

const ResumePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex flex-row justify-end px-8 py-4">
        <div className="text-right">One-pager Resume</div>
      </div>
      <div className="grow h-full overflow-y-auto">
        <StackingPanels
          panels={[
            {
              title: "Summary",
              content: <ResumeSummary />,
            },
            {
              title: "Skills",
              content: <ResumeSkills />,
            },
            {
              title: "Certifications",
              content: <div>content</div>,
            },
            {
              title: "Experience",
              content: <div>content</div>,
            },
            {
              title: "Education",
              content: <div>content</div>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ResumePage;
