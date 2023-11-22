import FormattedLink from "../common/formatted-link";

const ByEmail: React.FC = () => {
  return (
    <div className="bg-white/70 border border-gray-300 drop-shadow grow flex flex-col space-y-2 md:min-h-[175px] pb-2 rounded-sm drop-shadow-md">
      <div className="border-l-4 border-cyan-700 py-1 px-3 font-bold text-gray-600">
        By Email
      </div>
      <div className="px-4 flex flex-col items-center pb-2 md:pb-0">
        <div className="flex flex-col items-center md:mt-4 mb-2">
          <div>
            <FormattedLink
              href="mailto:info@cadehernandez.com"
              title="Professional Email"
              newTab
            >
              info@cadehernandez.com
            </FormattedLink>
          </div>
          <div className="text-xs">(Professional)</div>
        </div>
        <div className="flex flex-col items-center mb-2">
          <div>
            <FormattedLink
              href="mailto:c.cade.hernandez@gmail.com"
              title="Personal Email"
              newTab
            >
              c.cade.hernandez@gmail.com
            </FormattedLink>
          </div>
          <div className="text-xs">(Personal)</div>
        </div>
      </div>
    </div>
  );
};

export default ByEmail;
