import ComponentViewer from "../../common/component-viewer";
import GoogleCloudEngineer from "./google-cloud-engineer";
import GoogleMachineLearning from "./google-machine-learning";
import IbmAiFundamentals from "./ibm-ai-fundamentals";
import IbmFitCyberSecurity from "./ibm-fit-cyber-security";
import IbmFitItDesign from "./ibm-fit-it-design";
import IbmFitLinuxAdmin from "./ibm-fit-linux-admin";
import IbmFitWebDeveloper from "./ibm-fit-web-developer";
import CertificationPreface from "./preface";

const ResumeCertifications: React.FC = () => {
  return (
    <div className="max-w-[1000px] m-auto mt-4 mb-16 md:-mt-2 xl:mt-0 xl:pb-4 xl:min-h-[575px] flex flex-col">
      <ComponentViewer
        title="Certification Viewer"
        defaultPath="Preface"
        defaultComponent={<CertificationPreface />}
        componentMenu={[
          {
            title: "Preface",
            component: <CertificationPreface />,
          },
          {
            title: "General",
            menuItems: [
              {
                title: "Fit: Web Developer",
                component: <IbmFitWebDeveloper />,
              },
              {
                title: "Fit: Cybersecurity",
                component: <IbmFitCyberSecurity />,
              },
              { title: "Fit: IT Design", component: <IbmFitItDesign /> },
              { title: "Fit: Linux Admin", component: <IbmFitLinuxAdmin /> },
            ],
          },
          {
            title: "Artificial Intelligence",
            menuItems: [
              {
                title: "Fundamentals",
                component: <IbmAiFundamentals />,
              },
            ],
          },
          {
            title: "In Progress",
            menuItems: [
              {
                title: "Cloud Engineer",
                component: <GoogleCloudEngineer />,
              },
              {
                title: "Machine Learning",
                component: <GoogleMachineLearning />,
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ResumeCertifications;