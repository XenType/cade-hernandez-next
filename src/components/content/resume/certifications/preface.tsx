import Indentation from "../../common/indentation";
import CertificationTemplate from "./template";

const CertificationPreface: React.FC = () => {
  return (
    <CertificationTemplate title="Preface">
      <div className="flex flex-col space-y-2">
        <div className="italic font-semibold z-1">Certifications!?!?!?!</div>
        <div>
          <Indentation spaces={2} />
          As I venture out into the job market, I can't help but regret the fact
          that I haven't kept up with certifications during my most recent role
          as a Senior Full-Stack Engineer.
        </div>
        <div>
          <Indentation spaces={2} />
          All too often, it was enough to learn a new process or framework I
          needed for a project and then move on to the next challenge. I didn't
          give much thought to the future need to{" "}
          <span className="font-semibold italic">prove</span> these new skills!
        </div>
        <div>
          <Indentation spaces={2} />
          While this preface is active, the list of certifications displayed
          will be a bit meager...but please check back! I'll be adding more as I
          complete them.
        </div>
      </div>
    </CertificationTemplate>
  );
};

export default CertificationPreface;
