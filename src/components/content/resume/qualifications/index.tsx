import ComponentViewer from "../../common/component-viewer";
import GoogleCloudDeveloper from "./google-cloud-developer";
import GoogleCloudEnvironments from "./google-cloud-environments";
import GoogleCloudFoundationalTasks from "./google-cloud-foundational-tasks";
import GoogleCloudManageResources from "./google-cloud-manage-resources";
import GoogleCloudTerraform from "./google-cloud-terraform";
import GoogleMachineLearning from "./google-machine-learning";
import IbmAiFundamentals from "./ibm-ai-fundamentals";
import IbmFitCyberSecurity from "./ibm-fit-cyber-security";
import IbmFitItDesign from "./ibm-fit-it-design";
import IbmFitLinuxAdmin from "./ibm-fit-linux-admin";
import IbmFitWebDeveloper from "./ibm-fit-web-developer";
import CertificationPreface from "./preface";

const ResumeQualifications: React.FC = () => {
  return (
    <div className="max-w-[1000px] m-auto my-2 md:mt-4 md:mb-12 md:-mt-2 xl:mt-0 xl:pb-4 xl:min-h-[575px] flex flex-col">
      <ComponentViewer
        title="Qualifications Viewer"
        defaultPath="Preface"
        defaultComponent={<CertificationPreface />}
        componentMenu={[
          {
            title: "Preface",
            component: <CertificationPreface />,
          },
          {
            title: "Prerequisite",
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
            title: "Cloud Platforms",
            menuItems: [
              {
                title: "Infrastructure",
                component: <GoogleCloudFoundationalTasks />,
              },
              { title: "Resources", component: <GoogleCloudManageResources /> },
              { title: "Environments", component: <GoogleCloudEnvironments /> },
              { title: "Terraform", component: <GoogleCloudTerraform /> },
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
                title: "Cloud Developer",
                component: <GoogleCloudDeveloper />,
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

export default ResumeQualifications;
