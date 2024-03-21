import Indentation from "../common/indentation";

const ResumeSummary: React.FC = () => {
  return (
    <div className="m-auto max-w-[1000px] h-full rounded-md p-2 md:py-4 md:px-8 flex flex-col space-y-2 md:space-y-4 text-sm md:text-base xl:text-lg text-justify text-black font-semibold">
      <div>
        <Indentation spaces={3} />I am an exceptional candidate for both{" "}
        <span className="underline decoration-cade-blue-med decoration-2">
          contributor and leadership roles
        </span>{" "}
        within any Engineering organization. I have been successful in more than
        one career path in my life, and I bring valuable experience from them
        all. Within the tech sector, I've served as a{" "}
        <span className="underline decoration-cade-blue-med decoration-2">
          major contributor
        </span>{" "}
        on business-critical projects, a{" "}
        <span className="underline decoration-cade-blue-med decoration-2">
          technical leader
        </span>{" "}
        on teams replacing aging infrastructure and a{" "}
        <span className="underline decoration-cade-blue-med decoration-2">
          mentor
        </span>{" "}
        to junior developers. From a career in catering and hospitality I bring
        additional leadership experience as well.
      </div>
      <div>
        <Indentation spaces={3} />
        My skill set includes a wide variety of tool kits, environments and
        languages with my most recent projects being built in with NextJS &
        React. I have experience designing and creating{" "}
        <span className="underline decoration-cade-blue-med decoration-2">
          single-page apps, microservices, cloud functions and many more
        </span>{" "}
        modern software patterns. I'm also versed in setting up projects in
        GitHub and Google Cloud Platform to create fast, safe and effective
        CI/CD pipelines.
      </div>
      <div>
        <Indentation spaces={3} />
        I'm very excited to work with a company that is putting cloud
        architecture and AI to use in new and exciting ways! Currently, I'm
        taking courses to enhance my knowledge of cloud platform architecture
        and learn more about the emerging field of{" "}
        <span className="underline decoration-cade-blue-med decoration-2">
          Artificial intelligence.
        </span>{" "}
        Scroll further to view the completion and skill badges I've earned so
        far.
      </div>
    </div>
  );
};

export default ResumeSummary;
