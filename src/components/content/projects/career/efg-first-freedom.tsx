import CareerTemplate from "../career-template";

const EfgFirstFreedomProject: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="First Freedom Financial"
      company="Electronic Financial Group (EFG)"
      buttonText="Go 'Wayback'"
      href="https://web.archive.org/web/20010208210119fw_/http://efg-waco.com/First_Freedom.htm"
      position="Lead Developer"
      year="2001"
      skillList={[
        "ASP (Classic)",
        "T-SQL",
        "Visual Basic",
        "VB for Applications",
      ]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          My first major project as the leader of a small team was an internal
          system that allowed the company's sales and support agents to order
          branded Visa cards for a new customer, set regular funding amounts for
          the card and process exceptions like one-time funding and handling
          charge backs.
        </div>
        <div className="text-xs text-center">
          ** All that survives of this project is the Wayback Machine link
          above. **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default EfgFirstFreedomProject;
