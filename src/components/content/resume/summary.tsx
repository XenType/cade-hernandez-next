import Indentation from "../common/indentation";

const ResumeSummary: React.FC = () => {
  return (
    <div className="m-auto bg-white max-w-[1000px] h-full rounded-md border-2 border-cade-blue-lite shadow-md shadow-cade-blue-dark py-4 px-8 flex flex-col space-y-4 font-semibold text-justify">
      <div>
        <Indentation spaces={3} />I consider myself an exceptional candidate for
        both contributor and leadership roles within any Engineering
        organization. I have been successful in more than one career path in my
        life, and I bring valuable experience from them all. Within the tech
        sector, I've served as a major contributor on business-critical
        projects, a technical leader on teams replacing aging infrastructure and
        a mentor to junior developers. From a career in catering and hospitality
        I bring additional leadership experience as well.
      </div>
      <div>
        <Indentation spaces={3} />
        My skillset includes a wide variety of toolkits, environments and
        languages with my most recent projects being built in various frameworks
        running in NodeJS. I have experience designing and creating single-page
        apps, microservices, RESTful APIs and many more modern software
        patterns. I'm also versed in setting up projects in GitHub and Google
        Cloud Platform to create fast, safe and effective CI/CD pipelines.
      </div>
      <div>
        <Indentation spaces={3} />
        Currently, I'm taking courses to learn more about the emerging field of
        Artificial Intellegence. I've completed an IBM fundamentals course and
        am working through the Google Machine Learning Engineer learning plan.
        I'm very excited to work with a company that is putting AI to use in new
        and exciting ways!
      </div>
    </div>
  );
};

export default ResumeSummary;
