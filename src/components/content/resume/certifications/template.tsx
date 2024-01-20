import PillTag from "../../common/pill-tag";

interface CertificaitonScriptDetails {
  id: string;
  src: string;
  async?: boolean;
}

interface CertificationTemplateProps {
  title: string;
  date?: string;
  children: React.ReactNode;
  certification?: React.ReactNode;
  skills?: string[];
}

const CertificationTemplate: React.FC<CertificationTemplateProps> = ({
  title,
  date,
  children,
  certification,
  skills,
}) => {
  return (
    <div className="flex flex-col">
      <div className="px-2 text-lg font-semibold text-center">{title}</div>
      <div className="flex flex-row w-full h-full">
        <div className="text-sm flex flex-col pt-4 flex flex-col justify-around pr-4 w-full">
          {date ? (
            <div className="font-semibold text-right">Jan 2024</div>
          ) : null}
          <div className="text-justify">{children} </div>
          {skills?.length ? (
            <div>
              {skills.map((skillEntry) => (
                <PillTag key={skillEntry}>{skillEntry}</PillTag>
              ))}
            </div>
          ) : null}
        </div>
        {certification ? (
          <div className="pl-4 pt-2 flex flex-row justify-center h-full border-l-2">
            {certification}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CertificationTemplate;
