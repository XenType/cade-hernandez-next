import Indentation from "../../common/indentation";

const CareerIntro: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 md:space-y-4 p-2 md:px-8">
      <div className="text-center text-lg md:text-2xl font-semibold">
        My E-Commerce Journey
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4 overflow-y-auto h-[560px] px-2">
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          From my beginnings at a small ACH processing company in Waco, TX to
          working on one of the world's largest online sales platforms, my
          career has had an e-commerce theme throughout.
        </div>
        <div className="text-justify text-sm font-semibold">
          <Indentation />I had the good fortune to work for a small company that
          was attempting to blaze new trails in the budding e-commerce domain.
          The leadership team had a steady flow of innovative new products for
          us to create and our small team of very green developers (myself
          included!) rose to each challenge using every tool at our disposal.
        </div>
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          During a period of time when I was more focused on a career in
          hospitality and management - only taking on small website contracts -
          I did complete a large project that I consider a career milestone:
          Creating a customizable webinar platform for a very interesting
          client.
        </div>
        <div className="text-justify text-sm font-semibold">
          <Indentation />
          Just under a decade ago, I decided to transition back into a
          tech-focused career. I found an amazing company in Austin, TX that
          allowed me to grow from a Support Engineer that mostly fixed bugs to a
          Full-Stack Senior Engineer serving as both a Technical Lead and major
          code contributor to the company's core product.
        </div>
      </div>
    </div>
  );
};

export default CareerIntro;
