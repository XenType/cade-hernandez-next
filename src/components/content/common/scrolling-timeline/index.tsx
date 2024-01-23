import ScrollingTimelineLifeEvent from "./life-event";

const ScrollingTimeline: React.FC = () => {
  return (
    <div className="relative flex flex-row justify-center grow h-full w-full">
      <div className="flex flex-col overflow-y-auto w-full items-center">
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent className="top-[0px]" year={1977}>
          I was born in a small Texas town. Also the Atari 2600 was released and
          Star Wars: A New Hope made its theatrical debut. Coincidence?
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent
          className="top-[50px]"
          year={1983}
          orientation="left"
        >
          My life-long quest to learn begins in Kindergarten when I discovered
          that there was <span className="italic underline">math</span> behind
          the colors in my crayon box.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent className="top-[100px]" year={1996}>
          I leave my home town for Waco, TX to find work and discover my real
          interests before enrolling in college.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent
          className="top-[180px]"
          year={1997}
          orientation="left"
        >
          I started college and persue a career in Software Engineering. I was
          certain I would be a game developer in no-time.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent className="top-[240px]" year={1999}>
          I received an Associate's Degree in Computer Science and quickly found
          that I wasn't going to be making video games in Waco.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent
          className="top-[300px]"
          year={2003}
          orientation="left"
        >
          After a speding 4 years with an e-commerce company, I struck out on my
          own to become a freelance website developer.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent className="top-[360px]" year={2004}>
          I became involved with several non-profit organizations benefiting the
          LGBTQ+ community. Even made the news once!
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent
          className="top-[420px]"
          year={2007}
          orientation="left"
        >
          I AM HATING THIS - too similar to the experience timelines How about a
          verticle scrolling series of hero images and stories. Multipe scroll
          effects could work here.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent className="top-[480px]" year={1977}>
          I was born in a small Texas town. Also the Atari 2600 was released and
          Star Wars: A New Hope made its theatrical debut. Coincidence?
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent
          className="top-[540px]"
          year={1983}
          orientation="left"
        >
          My life-long quest to learn begins in Kindergarten when I discovered
          that there was <span className="italic underline">math</span> behind
          the colors in my crayon box.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent className="top-[600px]" year={1977}>
          I was born in a small Texas town. Also the Atari 2600 was released and
          Star Wars: A New Hope made its theatrical debut. Coincidence?
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
        <ScrollingTimelineLifeEvent
          className="top-[660px]"
          year={1983}
          orientation="left"
        >
          My life-long quest to learn begins in Kindergarten when I discovered
          that there was <span className="italic underline">math</span> behind
          the colors in my crayon box.
        </ScrollingTimelineLifeEvent>
        <div className="min-h-screen" />
      </div>
      <div className="absolute bg-cade-blue-dark w-px h-full" />
    </div>
  );
};

export default ScrollingTimeline;
