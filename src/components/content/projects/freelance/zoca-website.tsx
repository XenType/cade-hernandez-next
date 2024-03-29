import FreelanceTemplate from "../freelance-template";

const ZocaWebsite: React.FC = () => {
  return (
    <FreelanceTemplate
      title="ZoCa Pet Store"
      year="2023-2024"
      buttonText="Visit"
      href="https://zocapet.com"
      skillList={["HTML", "CSS", "Shopify"]}
      isActive
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          Using my years of experience working on a major online shopping
          platform, I created this Shopify store (and a few others) which
          provides steady additional income.
        </div>
        <div>
          While these stores are built using free templates available to anyone
          on the platform, I've customized them using the CSS editor and
          adjusted SEO to boost traffic.
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default ZocaWebsite;
