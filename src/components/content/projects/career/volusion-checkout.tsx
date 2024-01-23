import CareerTemplate from "../career-template";

const VolusionCheckout: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="Premium Checkout"
      company="Volusion LLC"
      buttonText="Feature Page"
      href="https://volusion.com/premium-checkout"
      position="Lead Developer"
      year="2020"
      skillList={[
        "TypeScript",
        "NodeJS",
        "React",
        "CI/CD",
        "Tailwind CSS",
        "MOBX",
        "ASP (Classic)",
      ]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          Given a proof-of-concept design created by the company's founder, I
          lead a small team (and at times was the only contributor) that created
          a new single-page checkout application to replace an aging ASP Classic
          checkout form. The new app is responsive to the user's viewport and
          provides a modern checkout experience that is customizable by the
          merchant.
        </div>
        <div>
          This application served as a strong foundation for future payment
          processing features that would have been difficult to implement in the
          older checkout page. The streamlined design also increased conversions
          for existing merchants as well as trial-to-store conversions for
          Volusion.
        </div>
        <div>
          In addition to all of the above, this was the first enhancement to the
          V1 software that had true CI/CD infrastructure, allowing for automated
          deployments to QA and production environments.
        </div>
        <div className="text-xs text-center">
          ** View the feature page above for more information. **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default VolusionCheckout;
