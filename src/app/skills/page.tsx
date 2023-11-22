"use client";
import Attention from "@/components/content/common/attention";
import Indentation from "@/components/content/common/indentation";
import Languages from "@/components/content/skills/languages";
import Processes from "@/components/content/skills/processes";
import Tools from "@/components/content/skills/tools";
import { useState } from "react";

const SkillsContent: React.FC = () => {
  enum Tabs {
    LANGUAGES,
    PROCESSES,
    TOOLS,
  }
  const [tab, setTab] = useState<Tabs>(Tabs.LANGUAGES);
  const [processClicked, setProcessClicked] = useState(false);
  const [toolsClicked, setToolsClicked] = useState(false);
  const [renders, setRenders] = useState<number>(1);
  const getTabContent = (): React.ReactNode => {
    switch (tab) {
      case Tabs.PROCESSES:
        return <Processes />;
      case Tabs.TOOLS:
        return <Tools />;
    }
    return <Languages />;
  };
  const updateClicks = (clickedTab: Tabs): void => {
    if (clickedTab === Tabs.PROCESSES && !processClicked) {
      setProcessClicked(true);
    }
    if (clickedTab === Tabs.TOOLS && !toolsClicked) {
      setToolsClicked(true);
    }
  };
  const changeToTab = (newTab: Tabs): void => {
    updateClicks(newTab);
    setTab(newTab);
  };
  const getSummaryContent = (): string => {
    switch (tab) {
      case Tabs.PROCESSES:
        return `I can still remember the moment I was introduced to TDD - it changed the way I viewed code structure
                FOREVER! Throughout my career I've always been driven to assimilate new design patterns, processes and
                practices to be as adaptable to new situations as possible.`;
      case Tabs.TOOLS:
        return `My most recent role as a Senior Software Engineer exposed me to a number of new tools and environments 
                that I had not experienced before. In the last 4 years I've picked up a large degree of experience in creating 
                and maintaining Node.js applications and, in my personal time, learned a bit about game development.`;
    }
    return `My background has allowed me to become fluent in a number of modern languages as well as some legacy
        high-level languages as well. More than that, I understand the fundamentals behind 3rd- and 4th-gen patterns and can
        adjust to the difference in syntax quickly: I pick up new languages in no-time!`;
  };
  const callAttention = (wasClicked: boolean): React.ReactNode => {
    return !wasClicked ? <Attention /> : null;
  };

  return renders ? (
    <div>
      <div className="m-auto bg-white/60 rounded-md max-w-[800px] drop-shadow-lg p-4 border border-white mb-4 min-h-[325px] md:min-h-[225px]">
        <div className="text-lg md:text-xl font-bold text-gray-600 mb-2">
          CadeOS Features (Skills)
        </div>
        <div className="w-full">
          <Indentation />
          While a great deal of my Engineering experience has been in the
          e-commerce sector, the knowledge and skills varied greatly from role
          to role.
          <br />
          <br />
          <Indentation />
          {getSummaryContent()}
        </div>
      </div>
      <div className="border border-black bg-white/50 drop-shadow-md bg-gradient-to-r from-gray-200 to-white/50 rounded-lg">
        <div className="w-full flex flex-col relative">
          <div
            onClick={() => setRenders(renders + 1)}
            className="absolute top-[50px] right-[5px] md:top-[60px] md:right-[10px] text-sm hover:cursor-pointer text-blue-800 hover:text-amber-700"
          >
            randomize icons again
          </div>
          <div className="flex flex-row md:text-3xl w-full">
            <div
              onClick={() => changeToTab(Tabs.LANGUAGES)}
              className={`border rounded-tl-md grow border-r-black border-b-black md:px-6 md:py-2 text-center hover:cursor-pointer ${
                tab === Tabs.LANGUAGES
                  ? "bg-white/50"
                  : "bg-amber-700/10 hover:bg-amber-700/30"
              }`}
            >
              Software Languages
            </div>
            <div
              onClick={() => changeToTab(Tabs.PROCESSES)}
              className={`relative border grow border-r-black border-b-black md:px-6 md:py-2 text-center hover:cursor-pointer ${
                tab === Tabs.PROCESSES
                  ? "bg-white/50"
                  : "bg-amber-700/10 hover:bg-amber-700/30"
              }`}
            >
              Processes & Practices{callAttention(processClicked)}
            </div>
            <div
              onClick={() => changeToTab(Tabs.TOOLS)}
              className={`relative border grow rounded-tr-md border-b-black md:px-6 md:py-2 text-center hover:cursor-pointer ${
                tab === Tabs.TOOLS
                  ? "bg-white/50"
                  : "bg-amber-700/10 hover:bg-amber-700/30"
              }`}
            >
              Tools & Environments{callAttention(toolsClicked)}
            </div>
          </div>
          {getTabContent()}
        </div>
      </div>
    </div>
  ) : null;
};

export default SkillsContent;
