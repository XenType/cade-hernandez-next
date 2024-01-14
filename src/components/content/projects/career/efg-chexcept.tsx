import CareerTemplate from "../career-template";

const EfgChexceptProject: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="Chexcept"
      company="Electronic Financial Group (EFG)"
      position="Lead Developer"
      year="2002"
      skillList={["ASP (Classic)", "T-SQL", "JavaScript", "C++"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          The most exciting and - <span className="italic">dare-I-say</span> -
          cutting-edge project I worked on at EFG was an online check processing
          system that rentors (mainly apartment complexes) used to scan checks
          via a special piece of hardware, verify the extracted data was
          correct, and submit them electronically in batches at the end of each
          day.
        </div>
        <div>
          This process seems so common place today, but at the time it was only
          really available at places like major grocery and department stores
          and certainly not as a web-based service!
        </div>
        <div className="text-xs text-center">
          ** Unfortunately, I was unable to find any surviving artifacts of this
          project **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default EfgChexceptProject;
