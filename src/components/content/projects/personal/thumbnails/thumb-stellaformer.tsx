import Image from "next/image";

const ThumbStellaformer: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md shadow-cade-blue-lite bg-gray-800">
      <Image
        src="/images/stellaformer-star.png"
        alt="Stellaformer Star"
        width={75}
        height={75}
      />
    </div>
  );
};

export default ThumbStellaformer;
