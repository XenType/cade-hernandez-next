interface StandardFormatProps {
  title?: string;
  subTitle?: string;
  information?: string | React.ReactNode;
  notes?: string | React.ReactNode;
}
interface PanelProps extends StandardFormatProps {
  children?: React.ReactNode;
}

const PanelContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col items-center drop-shadow-md rounded-md bg-white/20 py-4 px-6 border border-white/30 min-w-[275px] justify-around text-center">
      {children}
    </div>
  );
};

const StandardFormat: React.FC<PanelProps> = ({
  title,
  subTitle,
  information,
  notes,
}): React.ReactNode => {
  return (
    <PanelContainer>
      <div className="text-xl font-bold">{title}</div>
      <div>{subTitle}</div>
      <div className="text-sm">{information}</div>
      <div className="text-xs italic">{notes}</div>
    </PanelContainer>
  );
};

const Panel: React.FC<PanelProps> = ({
  children,
  title,
  subTitle,
  information,
  notes,
}) => {
  return children ? (
    <PanelContainer>{children}</PanelContainer>
  ) : (
    <StandardFormat
      title={title}
      subTitle={subTitle}
      information={information}
      notes={notes}
    />
  );
};

export default Panel;
