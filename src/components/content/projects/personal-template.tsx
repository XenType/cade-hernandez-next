import LinkButton from "../common/link-button";
import PillTag from "../common/pill-tag";
import ActiveProject from "./career/active-project";

interface PersonalTemplateProps {
  projectTitle: string;
  buttonText1?: string;
  href1?: string;
  buttonText2?: string;
  href2?: string;
  year?: string;
  subtitle: string;
  children: React.ReactNode;
  skillList: React.ReactNode[];
  isActive?: boolean;
  thumbnail?: React.ReactNode;
}

const PersonalTemplate: React.FC<PersonalTemplateProps> = ({
  projectTitle,
  buttonText1 = "View",
  href1,
  buttonText2 = "View",
  href2,
  year,
  subtitle,
  children,
  skillList,
  isActive,
  thumbnail,
}) => {
  return (
    <div className="flex flex-col space-y-2 md:space-y-4 w-full h-full p-2 md:p-0">
      <div className="flex flex-row w-full">
        <div className="flex flex-col space-y-2 text-cade-blue-dark grow p-2">
          <div className="text-lg md:text-3xl font-bold">{projectTitle}</div>
          <div className="md:pl-2 text-base md:text-xl">{subtitle}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {thumbnail ?? null}
        </div>
      </div>
      <div className="flex flex-col w-full border-2 border-gray-400 bg-white h-full py-6 px-8 space-y-4">
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
        <div className="flex flex-row flex-wrap w-full justify-around overflow-y-auto max-h-[150px]">
          {skillList.map((skill, index) => (
            <PillTag key={index + 1}>{skill}</PillTag>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 justify-around ">
        {href1 ? (
          <LinkButton href={href1} target="_blank">
            {buttonText1}
          </LinkButton>
        ) : null}
        {href2 ? (
          <LinkButton href={href2} target="_blank">
            {buttonText2}
          </LinkButton>
        ) : null}
      </div>
    </div>
  );
};

export default PersonalTemplate;
