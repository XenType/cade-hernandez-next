import Indentation from "../../common/indentation";

const FreelanceIntro: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 md:space-y-4 p-2 md:px-8">
      <div className="text-center text-lg md:text-2xl font-semibold">
        Freelancing On The Side
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4 overflow-y-auto h-[560px] px-2">
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          When I first started working as a freelance website designer, I looked
          to my community for organizations that could benefit from an online
          presence. I created and maintained three websites for non-profits in
          my area that were doing work to which I felt connected.
        </div>
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          Using these websites as a starter-portfolio, I picked up a number of
          small - usually 2 to 4 page - website contracts while working
          full-time as a catering manager. This was a great way to earn a little
          extra money and keep at least a portion of my skill set up-to-date.
        </div>
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          Currently, as I focus on expanding my skill set and acquiring
          certifications related to Artificial Intelligence and Machine
          Learning, the ability to fall back on freelance work has been
          invaluable. I've been able to balance contributing to my family's
          needs and developing the skills I will need as the world adopts AI
          more fully.
        </div>
        <div className="text-justify text-xs font-semibold italic">
          <Indentation />
          Like many of the projects in my early career, some of these projects
          exist only as fragments within the Wayback Machine archives. Their
          designs are also quite dated, but they serve as examples of my drive
          to maintain a foothold in the world of software development even when
          focused on a career in a different field.
        </div>
      </div>
    </div>
  );
};

export default FreelanceIntro;
