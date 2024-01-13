import Headline from "@/components/content/common/headline";
import VerticalSlideshow from "@/components/content/common/vertical-slideshow";
import CareerTemplate from "@/components/content/projects/career-template";
// TODO:
// 1. Finish navigation (first, end, styling)
// 2. Create a card template for projects
// 3. Refactor into a re-usable carrosel
// 4. Implementations / content

const CareerProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-cade-blue-dark flex flex-col px-16">
      <div className="flex flex-col m-auto mt-20 space-y-14">
        <Headline className="text-center text-6xl text-white">
          Career Projects
        </Headline>
        <VerticalSlideshow
          slides={[
            <CareerTemplate
              projectTitle="Test Title"
              company="Test Company"
              position="Test Position"
              details="Some details about this project will be here. Some details about this project will be here.  Some details about this project will be here.  Some details about this project will be here.  Some details about this project will be here.  Some details about this project will be here.  Some details about this project will be here. Some details about this project will be here. Some details about this project will be here. Some details about this project will be here. Some details about this project will be here. Some details about this project will be here. Some details about this project will be here. Some details about this project will be here."
              href="https://www.google.com"
              skillList={[
                "skill1",
                "tech1",
                "skill2",
                "skill3",
                "skill4",
                "tech2",
              ]}
            />,
            <div>Test2</div>,
            <div>Test3</div>,
            <div>Test4</div>,
          ]}
        />
      </div>
    </div>
  );
};

export default CareerProjectsPage;
