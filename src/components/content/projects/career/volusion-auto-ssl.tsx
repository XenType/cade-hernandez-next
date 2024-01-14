import CareerTemplate from "../career-template";

const VolusionAutoSSL: React.FC = () => {
  return (
    <CareerTemplate
      projectTitle="Auto SSL"
      company="Volusion LLC"
      buttonText="Documentation"
      href="https://helpcenter.volusion.com/s/article/HowtoInstallYourVolusionSSL"
      position="Project Developer"
      year="2019"
      skillList={["ASP.NET", "T-SQL", "C#"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          My first solo project at Volusion was integrating a new SSL-on-demand
          service into the core "V1" software. When a merchant/client moves
          their store onto its custom domain an SSL certificate is automatically
          requisitioned and installed. This process is repeated on a regular
          basis to keep the certificate up-to-date and recognizes situations
          where a custom SSL certificate was installed on a store.
        </div>
        <div>
          Prior to this feature merchants/clients were required to purchase an
          SSL certificate from a 3rd party, contact the billing support team,
          and wait up to 24 hours for manual installation.
        </div>
        <div className="text-xs text-center">
          ** In the documentation linked, see step 3. This was an entire process
          of it's own before. **
        </div>
      </div>
    </CareerTemplate>
  );
};

export default VolusionAutoSSL;
