import Headline from "@/components/content/common/headline";
import VerticalSlideshow from "@/components/content/common/vertical-slideshow";
import EfgChexceptProject from "@/components/content/projects/career/efg-chexcept";
import EfgFirstFreedomProject from "@/components/content/projects/career/efg-first-freedom";
import CareerIntro from "@/components/content/projects/career/intro";
import JenethWebinar from "@/components/content/projects/career/jeneth-webinar";
import VolusionAutoSSL from "@/components/content/projects/career/volusion-auto-ssl";
import VolusionCheckout from "@/components/content/projects/career/volusion-checkout";
import VolusionEmailService from "@/components/content/projects/career/volusion-email-service";
import VolusionPayments from "@/components/content/projects/career/volusion-payments";
import VolusionPayPal from "@/components/content/projects/career/volusion-paypal";
import VolusionUplift from "@/components/content/projects/career/volusion-uplift";

const CareerProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-cade-blue-dark flex flex-col px-4 md:px-16">
      <div className="flex flex-col w-full h-full mt-4 xl:mt-20 space-y-2 xl:space-y-14">
        <Headline className="text-center text-2xl xl:text-6xl text-white">
          Career Projects
        </Headline>
        <div className="flex grow overflow-hidden">
          <VerticalSlideshow
            slides={[
              <CareerIntro key="intro" />,
              <EfgFirstFreedomProject key="fff" />,
              <EfgChexceptProject key="chex" />,
              <JenethWebinar key="jeneth" />,
              <VolusionUplift key="uplift" />,
              <VolusionAutoSSL key="ssl" />,
              <VolusionCheckout key="checkout" />,
              <VolusionPayPal key="ppcp" />,
              <VolusionEmailService key="email" />,
              <VolusionPayments key="pay" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerProjectsPage;
