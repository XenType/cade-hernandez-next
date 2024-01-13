import Indentation from "../common/indentation";

const AboutZoCa: React.FC = () => {
  return (
    <div className="bg-white/60 rounded-md max-w-[800px] drop-shadow-lg p-4 border border-white">
      <div className="text-lg md:text-xl font-bold text-gray-600 mb-2">
        About ZoCa, LLC
      </div>
      <div className="w-full">
        <Indentation />
        As passive income and "side-gigs" become more popular - and even
        necessary at times - I created an LLC called "ZoCa" to be prepared for
        <br />
        <br />
        <Indentation />
        Now, I live in the Greater Los Angeles area and I have grown into a
        Full-Stack Software Engineer, Technology Mentor and E-Commerce
        Entrepreneur. I've worked on many exciting projects from early e-check
        processing to integrations with today's biggest payment processors. My
        experience leading others comes from both tech- and non-tech-related
        industries. In all, I've built a well-rounded skill set that is very
        useful in todays internet-driven economy.
      </div>
    </div>
  );
};

export default AboutZoCa;
