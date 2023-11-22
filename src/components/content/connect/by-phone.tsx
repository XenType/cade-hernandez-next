import FormattedLink from "../common/formatted-link";

const ByPhone: React.FC = () => {
  return (
    <div className="bg-white/70 border border-gray-300 drop-shadow grow flex flex-col space-y-2 pb-2 rounded-sm drop-shadow-md">
      <div className="border-l-4 border-lime-700 py-1 px-3 font-bold text-gray-600">
        Send a Text or Call
      </div>
      <div className="px-4 flex flex-col items-center">
        <div className="flex flex-col items-center md:mt-8 mb-4">
          <div>
            <FormattedLink href="tel:4154815756" title="Cell Phone" newTab>
              (415) 481-5756
            </FormattedLink>
          </div>
          <div className="text-xs">(Text preferred)</div>
        </div>
      </div>
    </div>
  );
};

export default ByPhone;
