import FreelanceTemplate from "../freelance-template";

const KmcbWebsite: React.FC = () => {
  return (
    <FreelanceTemplate
      title="KMCB.org"
      year="2004-2006"
      skillList={["HTML", "CSS", "JavaScript"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          The third website I developed for an organization in my community was
          for Keep McLennan County Beautiful. This non-profit did a lot of work
          to help maintain a healthy, vibrant environment and a good friend of
          mine was on the board of directors.
        </div>
        <div>
          Keep McLennan County Beautiful used their website to advertise
          fundraising initiatives and projects from used tire disposal drives to
          a veteran's memorial installment. This website has basic PayPal
          checkout capabilities to allow online donations.
        </div>
        <div className="text-xs text-center">
          ** I was unable to find any surviving artifacts of this website. **
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default KmcbWebsite;
