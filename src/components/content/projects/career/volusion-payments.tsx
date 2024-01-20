import CareerTemplate from "../career-template";

const VolusionPayments: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="Volusion Payments"
      company="Volusion LLC"
      buttonText="Feature Page"
      href="https://volusion.com/payments/volusion-payments-stripe/"
      position="Technical Lead"
      year="2023"
      skillList={[
        "ASP Classic",
        "T-SQL",
        "TypeScript",
        "ExpressJS",
        "NodeJS",
        "React",
      ]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          In a major shift in the way card processing was handled in the core V1
          software, I worked on a small team of our company's best engineers
          that replaced the existing in-house PCI handling system in exchange
          for a platform-level integration with Stripe. This required full-stack
          capabilities as it affected almost every part of the core system in
          addition to adding a new payments microservice.
        </div>
        <div>
          The Volusion Payments update provided merchants/clients with a
          multitude of new payment methods for their shoppers to use on
          checkout, including buy-now-pay-later offerings like Affirm and modern
          payment wallets like Apple Pay. For Volusion, it meant not only better
          revenue from increased checkout conversions but also the ability to
          save on expenses by no longer hosting PCI data internally.
        </div>
        <div className="text-xs text-center">
          ** See the feature page for more information. **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default VolusionPayments;
