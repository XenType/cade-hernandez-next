import FreelanceTemplate from "../freelance-template";

const JenethWebinars: React.FC = () => {
  return (
    <FreelanceTemplate
      title="Jeneth Webinars"
      year="2011-2012"
      skillList={["HTML", "CSS", "JavaScript"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          Prior to the Brandable Webinar Portal project, I designed and built
          new landing pages and video hosting pages for each of Jeneth's new
          series.
        </div>
        <div>
          The landing pages generally included PayPal payment methods and email
          subscription forms themed around the series. Video hosting pages
          required an access code and were updated weekly to add new content.
        </div>
        <div className="text-xs text-center">
          ** I was unable to locate any artifacts of these older-format pages.
          **
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default JenethWebinars;
