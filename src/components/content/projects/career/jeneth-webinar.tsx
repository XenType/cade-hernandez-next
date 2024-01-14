import CareerTemplate from "../career-template";

const JenethWebinar: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="Brandable Webinar Portal"
      company="Jeneth, LLC"
      position="Project Developer"
      year="2012"
      skillList={["PHP", "MySQL", "HTML", "CSS", "JavaScript"]}
      href="https://web.archive.org/web/20120115002751/http://online.jeneth.com/"
      buttonText="Go 'Wayback'"
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          This project started as a way to automate Jeneth's own webinars, but
          we quickly recognized the value in building it in a rebrandable
          fashion. After several successful uses internally, it was marketed to
          other entrepreneurs making substantial profits.
        </div>
        <div>
          A client/host could customize their look of their portal by setting
          theme colors, uploading logos and other media and even providing their
          own HTML snippets. A landing page facilitated sign-up and payments and
          scheduling page allowed an entire series to be configured for timed
          release. Written in PHP and using MySQL for storage, this platform was
          easy to move to any common internet provider if necessary.
        </div>
        <div>
          While this project was completed under contract like other work I did
          for Jeneth LLC, it was so much larger in scope that it warranted
          placement in this Career Projects section.
        </div>
        <div className="text-xs text-center">
          ** Only the landing page was crawled by Wayback Machine because the it
          did not require an access code.**
        </div>
      </div>
    </CareerTemplate>
  );
};

export default JenethWebinar;
