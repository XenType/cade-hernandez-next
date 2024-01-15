import FreelanceTemplate from "../freelance-template";

const ThisWebsite: React.FC = () => {
  return (
    <FreelanceTemplate
      title="CadeHernandez.org"
      year="2023-2024"
      buttonText="View Source"
      href="https://github.com/XenType/cade-hernandez-next"
      skillList={[
        "NodeJS",
        "TypeScript",
        "React",
        "NextJS",
        "Tailwind CSS",
        "CI/CD",
        "Google Cloud Platform",
      ]}
      isActive
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          Before getting into examples from long-ago, the best example of my
          current front-end development skills would be this website! It serves
          its obvious purpose as an online portfolio but also as sections geared
          toward prospective collaborators and employers.
        </div>
        <div>
          It is built with React & TypeScript and deploys on-demand from its
          GitHub repo as a NextJS application in a container hosted on the
          Google Cloud Platform. I've selected TailwindCSS for its powerful CSS
          utilities and Material Icons to help provide a standardized user
          experience throughout.
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default ThisWebsite;
