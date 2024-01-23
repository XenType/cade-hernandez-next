"use client";

import { useEffect } from "react";
import CertificationTemplate from "./template";

const IbmFitLinuxAdmin: React.FC = () => {
  useEffect(() => {
    const existingScript = document.getElementById("credly-script");
    if (!existingScript) {
      const newScript = document.createElement("script");
      newScript.id = "credly-script";
      newScript.src = "//cdn.credly.com/assets/utilities/embed.js";
      newScript.async = true;
      document.body.appendChild(newScript);
    }

    return () => {
      const targetScript = document.getElementById("credly-script");
      targetScript?.remove();
    };
  });
  return (
    <CertificationTemplate
      title="Linux System Administrator"
      skills={["Linux OS", "System Admin"]}
      certification={
        <div>
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="ce62b3d0-a9a1-4c0e-842e-c457080884f4"
            data-share-badge-host="https://www.credly.com"
          />
        </div>
      }
    >
      This certification comes as part of the IBM SkillsBuild onboarding process
      and demonstrates skills and knowledge necessary to pursue a career as a
      Linux System Administrator.
    </CertificationTemplate>
  );
};

export default IbmFitLinuxAdmin;
