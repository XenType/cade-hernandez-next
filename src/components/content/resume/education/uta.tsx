"use client";

const ResumeEducationUta: React.FC<EducationInstitutionProps> = ({
  onClick,
  selected = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[350px] bg-gray-200 rounded-lg overflow-hidden shadow-xl uta-background cursor-pointer hover:shadow-cade-blue-med/30 border-2 ${
        selected ? "border-cade-blue-med" : "border-transparent"
      }`}
      onClick={() => onClick("UTA")}
    >
      <div className="flex flex-col items-center justify-between h-[275px] xl:h-[350px] w-full bg-white/80 grow py-4">
        <div className="text-xs md:text-lg font-semibold text-center">
          University of Texas at Austin
        </div>
        <div className="flex flex-col items-center space-y-2 w-full px-2 md:px-10">
          <div className="flex flex-col items-center bg-white rounded-md p-2 md:p-4 text-xs md:text-sm w-full space-y-2">
            <div className="font-semibold">Software Design Course Audit</div>
            <ul className="flex flex-col w-full ml-6 md:ml-16 list-disc">
              <li>RESTful API Architecture</li>
              <li>Modern Scripting</li>
              <li>Test Driven Development</li>
            </ul>
          </div>
          <div className="text-xs md:text-sm font-semibold">2007-2008</div>
          <div className="text-xs italic text-center">
            Image © University of Texas News
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEducationUta;
