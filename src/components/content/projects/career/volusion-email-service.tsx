import CareerTemplate from "../career-template";

const VolusionEmailService: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="Email Microservice"
      company="Volusion LLC"
      buttonText="Documentation"
      href="https://helpcenter.volusion.com/s/article/Editing-Email-Templates"
      position="Technical Lead"
      year="2022"
      skillList={[
        "TypeScript",
        "ExpressJS",
        "NodeJS",
        "PostresSQL",
        "CI/CD",
        "Redis",
      ]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          To replace an internally hosted SMTP system, I lead a team in
          designing, implementing, testing and releasing a new email
          microservice that allowed for sending mail through a 3rd party
          provider. As a bonus, we found that we could offer merchants a more
          modern way of editing their email templates in the process.
        </div>
        <div>
          Using a modern tech stack, the team built and deployed a scalable and
          reliable email queueing system that was able to quickly hydrate email
          templates and forward them to a an external provider. I served
          double-duty during this project: supervising development and mentoring
          the junior members of the team while also contributing to the Volusion
          Payments project (next).
        </div>
        <div className="text-xs text-center">
          ** See the new template editing flow in the documentation link above.
          **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default VolusionEmailService;
