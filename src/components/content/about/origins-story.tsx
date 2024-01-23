import AboutMeStoryCard from "./story-card";

const AboutMeOriginStory: React.FC = () => {
  return (
    <AboutMeStoryCard title="Origins" className="origins-background">
      <div className="flex flex-col space-y-2 md:space-y-4 xl:space-y-8 text-sm md:text-base">
        <div>
          I was born in a small Texas town of about 3000 people located in a
          dry, dusty part of the state. I lived in the country with no neighbors
          until I was 10 when we moved inside the city limits. My mom taught in
          the small elementary school, so a good portion of the population knew
          who we were.
        </div>
        <div>
          Our family has almost always had some sort of gaming system. I
          remember playing on an early Atari with a few games until I was 9,
          when the Nintendo Entertainment System was released. My world changed
          forever!
        </div>
        <div>
          As far as school went, I was an "A" student throughout (
          <span className="italic">
            except in 1st grade "Handwriting" class...omg
          </span>
          ). I took part in UIL events ranging from individual math and writing
          competitions to group events like marching band and one act play
          performances. My exposure to technology in school was minimal though,
          and often the hardware we had was a bit dated.
        </div>
        <div>
          As I approached 18, I yearned for a bigger city with more to do -
          movie theaters, concerts, anything! I had a small group of friends I
          met through UIL events in Waco, TX and so that is where I went...
        </div>
      </div>
    </AboutMeStoryCard>
  );
};

export default AboutMeOriginStory;
