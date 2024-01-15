import PersonalTemplate from "../personal-template";

const NpmTestLogic: React.FC = () => {
  return (
    <PersonalTemplate
      projectTitle="NPM Test-Logic"
      subtitle="NPM Package"
      year="2019"
      buttonText1="NPM JS Website"
      href1="https://www.npmjs.com/package/test-logic"
      buttonText2="View Source"
      href2="https://github.com/XenType/test-logic"
      skillList={["Jest", "TypeScript", "Unit Testing"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          During a very length uplift project (JavaScript to TypeScript), I
          found the need to reduce some commonly used test patterns into
          smaller, more readable code. "Test-Logic" is an NPM package I created
          that allowed me to refactor unit and integration tests during the
          uplift, reducing the size of most test files by at least 50% by
          eliminating duplication. While not an "earth-shattering" node package,
          it does still average at least 10 downloads / week even though it was
          last updated 4 years ago.
        </div>
      </div>
    </PersonalTemplate>
  );
};

export default NpmTestLogic;
