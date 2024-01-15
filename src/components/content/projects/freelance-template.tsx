import Attention from "../common/attention";
import LinkButton from "../common/link-button";
import PillTag from "../common/pill-tag";
import ActiveProject from "./career/active-project";

interface FreelanceTemplateProps {
  title: React.ReactNode;
  buttonText?: string;
  href?: string;
  year?: string;
  children: React.ReactNode;
  skillList: React.ReactNode[];
  isActive?: boolean;
}

const FreelanceTemplate: React.FC<FreelanceTemplateProps> = ({
  title: organization,
  buttonText = "View",
  href,
  year,
  children,
  skillList,
  isActive = false,
}) => {
  return (
    <div className="flex flex-col space-y-6 w-full h-full">
      <div className="flex flex-row w-full">
        <div className="flex flex-col space-y-2 text-cade-blue-dark grow">
          <div className="text-3xl font-bold">{organization}</div>
        </div>
        {href ? (
          <LinkButton href={href} target="_blank">
            {buttonText}
          </LinkButton>
        ) : null}
      </div>
      <div className="flex flex-col w-full border-2 border-gray-400 bg-white h-full py-4 px-8 space-y-4">
        <div className="flex flex-row justify-between">
          {isActive ? <ActiveProject /> : null}

          {year ? (
            <div className="italic font-semibold text-xs text-right text-gray-700 pr-2 grow">
              {year}
            </div>
          ) : null}
        </div>
        <div className="h-[150px] overflow-y-auto text-justify text-gray-700 font-semibold pr-2 grow">
          {children}
        </div>
        <div className="flex flex-row flex-wrap w-full justify-around">
          {skillList.map((skill, index) => (
            <PillTag key={index + 1}>{skill}</PillTag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelanceTemplate;
