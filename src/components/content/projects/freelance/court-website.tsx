import FreelanceTemplate from "../freelance-template";

const CourtWebsite: React.FC = () => {
  return (
    <FreelanceTemplate
      title="CentralTexasEmpire.org"
      year="2004-2006"
      buttonText="Go 'Wayback'"
      href="https://web.archive.org/web/20050207152418/http://centraltexasempire.org/"
      skillList={["HTML", "CSS", "JavaScript"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          Another pro-bono website I created and maintained in the early 2000's
          was for an extremely colorful non-profit called the "Royal Sovereign
          and Imperial Court of the Central Texas Empire". This organization
          raised funds through drag shows and musical events for the local
          LGBTQ+ community.
        </div>
        <div>
          Having a website allowed The Court to advertise event schedules and
          attract new donors. A browsable archive of pictures taken from yearly
          formal events was also available to view online.
        </div>
        <div className="text-xs text-center">
          ** The Wayback Machine image of this site is not 100% complete. **
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default CourtWebsite;
