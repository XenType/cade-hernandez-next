import Indentation from "../common/indentation";

const About: React.FC = () => {
  return (
    <div className="m-auto bg-white/60 rounded-md max-w-[800px] drop-shadow-lg p-4 border border-white">
      <div className="text-lg md:text-xl font-bold text-gray-600 mb-2">
        About me
      </div>
      <div className="w-full">
        <Indentation />I grew up in a small, Texas town with not much in the way
        of modern tech to keep me entertained. Still, I had a drive to learn and
        a curiosity that demanded I figure out how things work. The VCR, Atari
        (and later Nintendo) nor any of our remote controls were safe, but I
        always seemed to put them back together in working order!
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

export default About;
