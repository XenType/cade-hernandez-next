import { ExternalLinks } from "@/components/constants";
import FormattedLink from "../common/formatted-link";
import { ExternalLinkNames } from "@/components/enum";

const BySocial: React.FC = () => {
  return (
    <div className="bg-white/70 border border-gray-300 drop-shadow grow flex flex-col space-y-2 pb-2 rounded-sm drop-shadow-md">
      <div className="border-l-4 border-amber-700 py-1 px-3 font-bold text-gray-600">
        On Social Media
      </div>
      <div className="px-4 flex flex-col items-center">
        <div className="flex flex-col items-center mb-2 md:mt-4">
          <div>
            <FormattedLink
              href={ExternalLinks[ExternalLinkNames.LINKEDIN]}
              title="FormattedLinked In"
              newTab
            >
              Connect on FormattedLinkedIn
            </FormattedLink>
          </div>
          <div className="text-xs">(cade-hernandez-9a9572264)</div>
        </div>
        <div className="flex flex-col items-center mb-2">
          <div>
            <FormattedLink
              href={ExternalLinks[ExternalLinkNames.INSTAGRAM]}
              title="Instagram"
              newTab
            >
              Find me on Instagram
            </FormattedLink>
          </div>
          <div className="text-xs">(c_cade_hernandez)</div>
        </div>
      </div>
    </div>
  );
};

export default BySocial;
