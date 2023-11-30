import { ExternalLinks } from "@/components/constants";
import FormattedLink from "../common/formatted-link";
import { ExternalLinkNames } from "@/components/enum";

const Zoca: React.FC = () => {
  return (
    <div className="bg-white/70 border border-gray-300 drop-shadow grow flex flex-col space-y-2 pb-2 rounded-sm drop-shadow-md">
      <div className="border-l-4 border-indigo-700 py-1 px-3 font-bold text-gray-600">
        Looking for ZoCa?
      </div>
      <div className="px-4 flex flex-col items-center">
        <div className="flex flex-col items-center mb-2 md:mt-4">
          <div>
            <FormattedLink
              href={ExternalLinks[ExternalLinkNames.ZOCAPET]}
              title="Visit ZoCaPet.com"
              newTab
            >
              ZoCa Pet Online Store
            </FormattedLink>
          </div>
          <div className="text-xs">(Sales and Order Status)</div>
        </div>
        <div className="flex flex-col items-center mb-2">
          <div>
            <FormattedLink
              href={ExternalLinks[ExternalLinkNames.EMAIL_ZOCAPET]}
              title="Contact ZoCa Pet"
              newTab
            >
              Contact by Email
            </FormattedLink>
          </div>
          <div className="text-xs">(Administrative Email)</div>
        </div>
      </div>
    </div>
  );
};

export default Zoca;
