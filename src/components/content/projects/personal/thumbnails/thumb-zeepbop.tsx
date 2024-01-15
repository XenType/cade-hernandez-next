import Image from "next/image";

const ThumbZeepBop: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md shadow-cade-blue-lite">
      <Image
        src="/images/zeepbop-idle.png"
        alt="Stellaformer Star"
        width={75}
        height={75}
      />
    </div>
  );
};

export default ThumbZeepBop;
