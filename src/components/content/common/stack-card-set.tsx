import StackCard, { StackCardProps } from "./stack-card";

interface StackCardSetProps {
  cards: StackCardProps[];
}

const StackCardSet: React.FC<StackCardSetProps> = ({ cards }) => {
  return (
    <div>
      <ul className="list-none grid auto-rows-auto grid-cols-1 gap-[100px] md:gap-[150px]">
        {cards.map(({ title, children }, index) => {
          return (
            <StackCard title={title} key={title} position={index}>
              {children}
            </StackCard>
          );
        })}
      </ul>
    </div>
  );
};

export default StackCardSet;
