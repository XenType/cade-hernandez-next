import FreelanceTemplate from "../freelance-template";

const GlactWebsite: React.FC = () => {
  return (
    <FreelanceTemplate
      title="GLACT.org"
      year="2003-2006"
      buttonText="Go 'Wayback'"
      href="https://web.archive.org/web/20040613033002/http://glact.org/index.asp"
      skillList={["HTML", "CSS", "JavaScript"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          This website (as well as the others I created for non-profits) was
          created by building a basic framework in Dreamweaver then enhancing
          the scripts and behaviors as needed. I also managed their domain and
          hosting as well as providing a new design twice / year.
        </div>
        <div>
          The Gay and Lesbian Alliance of Central Texas provided resources
          along-side other similar organizations like PFLAG in the greater Waco
          area. Having a website allowed them additional options in advertising
          and scheduling events and increased membership as well.
        </div>
        <div className="text-xs text-center">
          ** The Wayback Machine image of this site is not 100% complete. **
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default GlactWebsite;
