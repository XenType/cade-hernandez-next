"use client";

import { useState } from "react";
import ResumeEducationMcc from "./mcc";
import ResumeEducationUta from "./uta";
import Indentation from "../../common/indentation";

const NO_STORY = `Select an institution of learning to get the full story!`;

const MCC_STORY = `When I attended MCC it was one of the most affordable junior colleges in Texas
  that was still able to provide a well-rounded education in Computer Science. Having smaller classes
  I made a great core group of friends, some of which I worked with in my first role as a Software Engineer.`;

const UTA_STORY = `In addition to seeking a way to work into an Engineering role at Blizzard Entertainment
  I began taking courses at UT of Austin to modernize my skill set. While at first I thought to seek a Bachelor's 
  Degree, I eventually found auditing classes was less expensive and a better fit my work schedule.`;

const ResumeEducation: React.FC = () => {
  const [selectedInstitution, setSelectedInstitution] = useState<
    EducationInstitution | ""
  >("");

  const updateStoryDisplay = (institution: EducationInstitution): void => {
    setSelectedInstitution(
      selectedInstitution !== institution ? institution : ""
    );
  };

  const getStoryText = (institution: EducationInstitution | ""): string => {
    switch (institution) {
      case "MCC":
        return MCC_STORY;
      case "UTA":
        return UTA_STORY;
    }
    return NO_STORY;
  };

  return (
    <div className="xl:min-h-[550px] max-w-[1000px] flex flex-col items-center justify-center space-y-10 md:space-y-4 mt-2 mb-8 md:mb-4 mx-1 md:m-auto md:mt-8">
      <div className="flex flex-row w-full justify-center items-center space-x-2 md:space-x-12 px-2 md:px-0">
        <ResumeEducationMcc
          onClick={updateStoryDisplay}
          selected={selectedInstitution === "MCC"}
        />
        <ResumeEducationUta
          onClick={updateStoryDisplay}
          selected={selectedInstitution === "UTA"}
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-white md:h-28 py-2 px-4 md:px-8 md:w-[600px] rounded-md shadow text-sm text-justify">
        <div id="description-text">
          {selectedInstitution !== "" ? <Indentation spaces={2} /> : null}
          {getStoryText(selectedInstitution)}
        </div>
      </div>
    </div>
  );
};

export default ResumeEducation;
