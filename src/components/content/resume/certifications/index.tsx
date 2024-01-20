import ComponentViewer from "../../common/component-viewer";
import GoogleCloudEngineer from "./google-cloud-engineer";
import GoogleMachineLearning from "./google-machine-learning";
import IbmAiFundamentals from "./ibm-ai-fundamentals";
import IbmFitCyberSecurity from "./ibm-fit-cyber-security";
import IbmFitItDesign from "./ibm-fit-it-design";
import IbmFitLinxAdmin from "./ibm-fit-linux-admin";
import IbmFitWebDeveloper from "./ibm-fit-web-developer";
import CertificationPreface from "./preface";

const ResumeCertifications: React.FC = () => {
  return (
    <div className="max-w-[1000px] m-auto pb-4 min-h-[550px] flex flex-col">
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
              { title: "Fit: Linux Admin", component: <IbmFitLinxAdmin /> },
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
