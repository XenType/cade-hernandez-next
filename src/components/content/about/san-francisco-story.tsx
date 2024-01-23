import Indentation from "../common/indentation";
import AboutMeStoryCard from "./story-card";

const AboutMeSanFranciscoStory: React.FC = () => {
  return (
    <AboutMeStoryCard title="San Francisco Bay" className="sf-background">
      <div className="flex flex-col space-y-2 md:space-y-4 xl:space-y-8 text-sm md:text-base">
        <div>
          <Indentation />
          My journey to California really started at the very end of 2018 when I
          met the man that would eventually become my husband. A year later we
          were engaged and enjoying a Caribbean cruise when we first started
          talking about moving to CA. The events of 2020 would delay our
          marriage plans, but in July we made the move to the San Francisco Bay
          area.
        </div>
        <div>
          <Indentation />
          Yes...the price of rent was a shock to my system. Our first apartment
          in Walnut Creek was almost exactly twice as expensive as the one we
          left behind in Austin...and a few hundred square feet smaller as well.
          Despite that and the general increase in the cost of living, I felt
          more at home than I ever did in Texas.
        </div>
        <div>
          <Indentation />
          After moving a bit closer to San Francisco (just a few city blocks
          away, really) we finally found the time to plan a wedding. On February
          22, 2022 we were married in Golden Gate Park with friends and family
          in attendance. Soon after we were off to Hawaii to enjoy our
          honeymoon!
        </div>
        <div>
          <Indentation />
          We lived for just over 3 years in the SF Bay area, the last 2 with an
          amazing 8th floor view of the Pacific Ocean just beyond a sea of
          unique homes and buildings. It was an incredible place to be, even
          with the decline in population but the endless fog and extremely short
          window of warm weather each year became less and less tolerable over
          time. We started talking about another move...
        </div>
      </div>
    </AboutMeStoryCard>
  );
};

export default AboutMeSanFranciscoStory;
