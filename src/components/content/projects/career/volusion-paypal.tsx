import CareerTemplate from "../career-template";

const VolusionPayPal: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="PayPal PPCP"
      company="Volusion LLC"
      buttonText="Documentation"
      href="https://helpcenter.volusion.com/s/article/Accepting-Payments-with-PayPal-on-Volusion"
      position="Senior Developer"
      year="2021"
      skillList={[
        "T-SQL",
        "ASP (Classic)",
        "ASP.NET",
        "C#",
        "JavaScript",
        "HTML",
      ]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          Having worked extensively on the existing PayPal integration, I was
          put on a small team in charge of updating Volusions V1 software to use
          PayPal's new PPCP platform. I was responsible for updating the
          onboarding and checkout experiences as well as end-2-end integration
          testing.
        </div>
        <div>
          This project provided enhanced revenue to both Volusion and its
          merchants/clients by giving shoppers a faster, more streamlined
          payment portal that supports Venmo, PayPal Credit and PayPal Pay
          Later. Most importantly, this update enabled PayPal's Advanced Card
          Processing feature, allowing merchants without an existing card
          processor to take card payments directly on their checkout page.
        </div>
        <div className="text-xs text-center">
          ** The linked documentation covers these new features and more. **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default VolusionPayPal;
