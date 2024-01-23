interface SlideFrameProps {
  position: number;
  children: React.ReactNode;
}

const SlideFrame: React.FC<SlideFrameProps> = ({ position, children }) => {
  return (
    <div
      id={`slide-${position}`}
      className="min-w-[275px] md:min-w-[640px] max-h-[620px] md:h-[520px] shadow bg-white/80 rounded-md snap-center snap-always slide-element flex"
    >
      <div className="w-full p-px md:p-8">{children}</div>
    </div>
  );
};

export default SlideFrame;
