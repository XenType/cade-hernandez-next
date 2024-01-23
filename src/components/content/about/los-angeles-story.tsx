import AboutMeStoryCard from "./story-card";

const AboutMeLosAngelesStory: React.FC = () => {
  return (
    <AboutMeStoryCard title="Los Angeles Area" className="la-background">
      <div className="flex flex-col space-y-2 md:space-y-4 xl:space-y-8 text-sm md:text-base">
        <div>
          We began scouting for a home in the suburbs of Los Angeles in the
          summer of 2023. I honestly had no idea how big the LA area was...wow!
          We originally thought Irvine might be a fit, then WeHo but finally
          settled in a little community on the very edge of northern LA near
          Calabasas. In September we made the move and have been loving it
          since.
        </div>
        <div>
          In a bit of a twist of fate, I lost my job to a company-wide layoff
          just days after our move. I had a serious moment of panic at first,
          but then I realized that my life had prepared me for such things. I
          also realized that this was an opportunity to grow again, having
          fallen into a bit of a comfortable groove previously.
        </div>
        <div>
          Since then, I've started building up current certifications and I am
          seeking position at a company that is doing a bit more than helping
          people sell goods online. I hope to bring fresh, new knowledge in the
          area of Machine Learning to an organization that is changing our world
          to be the best it can be.
        </div>
      </div>
    </AboutMeStoryCard>
  );
};

export default AboutMeLosAngelesStory;
