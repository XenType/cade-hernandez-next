// NOTES
// export these props?
// company could include logo and/or href

import LinkButton from "../common/link-button";
import PillTag from "../common/pill-tag";

interface CareerTemplateProps {
  projectTitle: string;
  company: React.ReactNode;
  buttonText?: string;
  href?: string;
  position: string;
  details: React.ReactNode;
  skillList: React.ReactNode[];
}

const CareerTemplate: React.FC<CareerTemplateProps> = ({
  projectTitle,
  company,
  buttonText = "View",
  href,
  position,
  details,
  skillList,
}) => {
  return (
    <div className="flex flex-col space-y-6 w-full h-full">
      <div className="flex flex-row w-full">
        <div className="flex flex-col space-y-2 w-full text-cade-blue-dark">
          <div className="text-3xl font-bold">{projectTitle}</div>
          <div className="pl-2 text-xl">{company}</div>
        </div>
        {href ? (
          <LinkButton href={href} target="_blank">
            {buttonText}
          </LinkButton>
        ) : null}
      </div>
      <div className="flex flex-col w-full border-2 border-gray-400 bg-white h-full py-6 px-8 space-y-4">
        <div className="text-lg font-bold">{position}</div>
        <div className="h-[150px] overflow-y-auto">{details}</div>
        <div className="flex flex-row flex-wrap w-full justify-around">
          {skillList.map((skill, index) => (
            <PillTag key={index + 1}>{skill}</PillTag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTemplate;
