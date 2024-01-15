import FreelanceTemplate from "../freelance-template";

const JenethWebsite: React.FC = () => {
  return (
    <FreelanceTemplate
      title="Jeneth.com"
      year="2011-2013"
      buttonText="Go 'Wayback'"
      href="https://web.archive.org/web/20120208135528/http://www.jeneth.com/"
      skillList={["HTML", "CSS", "JavaScript"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          In addition to the major project listed in the "Career" page, I
          designed and maintained Jeneth's primary website throughout several
          design revisions.
        </div>
        <div>
          This website gave a central location to Jeneth's regular viewers to
          stream past webinars and sign-up for the next available series. It
          also served as a general landing page when Jeneth was not focusing on
          a specific webinar series.
        </div>
        <div className="text-xs text-center">
          ** The Wayback Machine link is one of many designs applied over the
          years. **
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default JenethWebsite;
