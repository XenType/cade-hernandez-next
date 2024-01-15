import CareerTemplate from "../career-template";

const VolusionUplift: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="V2 Uplift"
      company="Volusion LLC"
      position="Software Developer"
      year="2018"
      skillList={["JavaScript", "TypeScript", "GraphQL"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          After spending time on a team that dealt with bugs and created small
          new features, I was put on an uplift project with 2 other developers
          with the goal of preparing the company's "V2" platform for a major
          refactor.
        </div>
        <div>
          We were responsible for creating and running a script that would
          convert existing code from one of dozens of AWS microservices from
          JavaScript to TypeScript. Next, we identified missing types, creating
          and implementing them as needed. To complete the project, we assisted
          in replacing direct API calls with an internal event system or GraphQL
          queries.
        </div>
        <div className="text-xs text-center">
          ** This was an internal project with no external documenation or
          release notes. **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default VolusionUplift;
