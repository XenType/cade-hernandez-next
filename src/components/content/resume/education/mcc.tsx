"use client";

const ResumeEducationMcc: React.FC<EducationInstitutionProps> = ({
  onClick,
  selected = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[350px] bg-gray-200 rounded-lg overflow-hidden shadow-xl uta-background cursor-pointer hover:shadow-cade-blue-med/30 border-2 ${
        selected ? "border-cade-blue-med" : "border-transparent"
      }`}
      onClick={() => onClick("MCC")}
    >
      <div className="flex flex-col items-center justify-between h-[275px] xl:h-[350px] w-full bg-white/80 grow py-4">
        <div className="text-lg font-semibold">McLennan Community College</div>
        <div className="flex flex-col items-center space-y-2 w-full px-10">
          <div className="flex flex-col items-center bg-white rounded-md p-4 text-sm w-full space-y-2">
            <div className="font-semibold">Associate of Computer Science</div>
            <ul className="flex flex-col w-full ml-16 list-disc">
              <li>Programming Fundamentals</li>
              <li>Logic & Design</li>
              <li>Relational Databases</li>
              <li>SOAP API Architecture</li>
            </ul>
          </div>
          <div className="text-sm font-semibold">1997-1999</div>
          <div className="text-xs italic">
            Image © McLennan Community College
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEducationMcc;
