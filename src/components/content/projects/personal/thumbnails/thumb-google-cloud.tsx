import Image from "next/image";

const ThumbGoogleCloud: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md shadow-cade-blue-lite flex">
      <Image
        src="/images/google-cloud.png"
        alt="Google Cloud"
        width={100}
        height={100}
        className="py-4"
      />
    </div>
  );
};

export default ThumbGoogleCloud;
