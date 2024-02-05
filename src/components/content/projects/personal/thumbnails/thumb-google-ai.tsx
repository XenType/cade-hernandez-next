import Image from "next/image";

const ThumbGoogleAi: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md shadow-cade-blue-lite flex">
      <Image
        src="/images/google-ai-platform.png"
        alt="Google AI"
        width={75}
        height={75}
      />
    </div>
  );
};

export default ThumbGoogleAi;
