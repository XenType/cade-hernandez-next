interface HeaderIconWrapperProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

const HeaderIconWrapper: React.FC<HeaderIconWrapperProps> = ({
  children,
  size = "large",
}) => {
  //
  return (
    <div
      className={`absolute text-white drop-shadow-lg
    ${
      size === "large"
        ? "top-0 left-8 md:left-auto md:right-52 lg:right-96 text-[144px]"
        : ""
    }
    ${
      size === "medium"
        ? "top-10 left-8 md:left-auto md:right-56 lg:right-96 text-9xl"
        : ""
    }
    ${
      size === "small"
        ? "top-0 left-8 md:left-auto md:right-52 lg:right-96 text-8xl"
        : ""
    }
    `}
    >
      {children}
    </div>
  );
};

export default HeaderIconWrapper;
