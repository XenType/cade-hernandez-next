import Indentation from "../common/indentation";
import AboutMeStoryCard from "./story-card";

const AboutMeWacoAustinStory: React.FC = () => {
  return (
    <AboutMeStoryCard title="Waco & Austin, TX" className="austin-background">
      <div className="flex flex-col space-y-2 md:space-y-4 xl:space-y-8 text-sm md:text-base">
        <div>
          <Indentation />I worked for a year in Waco before enrolling at the
          local community college. I did well balancing my full course load with
          a part-time job with a single, terrible exception: I slept through an
          important test and got a D in a very easy introductory course. Lesson
          learned!
        </div>
        <div>
          <Indentation />
          My love of gaming continued through college and beyond. Whenever I
          could afford the newest console system, I would buy it and a few games
          to start. I also bought my first PC at 21 and joined the common
          struggle to keep it up-to-date for the latest games!
        </div>
        <div>
          <Indentation />I also discovered more and more about myself while
          living in this mid-sized city. I came out to my friends first, and
          eventually my family. I also found that I wanted to have more freedom
          than a 7 to 4 office job allowed, so I tried out freelance work and
          did some restaurant work to fill in the gaps in income that come from
          contract work.
        </div>
        <div>
          <Indentation />
          At 29 I decided I needed more than Waco could offer and i moved to
          Austin, TX where I lived for over a decade. I tried out some new
          career paths and enjoyed an exciting job in catering that allowed me
          to attend some truly memorable events. I met famous bands at SXSW,
          served drinks at lavish fundraisers and managed the food and bar
          service for a wedding with 1200+ guests.
        </div>
        <div>
          <Indentation />
          Before long though, I felt the pull to return a tech career. It took
          some effort but I brought my skills up-to-date and worked my way from
          fixing bugs to serving as a Technical Lead on major projects. I also
          began to realize what an asset my time spent working outside of the
          tech world was. I naturally assumed mentoring and leadership roles
          because of my previous experience.
        </div>
        <div>
          <Indentation />
          But I still wasn't quite where I wanted to be...
        </div>
      </div>
    </AboutMeStoryCard>
  );
};

export default AboutMeWacoAustinStory;
