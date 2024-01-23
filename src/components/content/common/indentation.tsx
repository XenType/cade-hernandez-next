interface IndentationProps {
  spaces?: number;
}

const Indentation: React.FC<IndentationProps> = ({ spaces = 6 }) => {
  return <span dangerouslySetInnerHTML={{ __html: "&nbsp;".repeat(spaces) }} />;
};

export default Indentation;
