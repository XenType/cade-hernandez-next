"use client";

import { useEffect } from "react";
import CertificationTemplate from "./template";

const IbmFitItDesign: React.FC = () => {
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
      title="IT Design Thinking"
      skills={["DevOps"]}
      certification={
        <div>
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="b41f12e0-1b65-4c8a-be19-14f62a8c9d82"
            data-share-badge-host="https://www.credly.com"
          />
        </div>
      }
    >
      This certification comes as part of the IBM SkillsBuild onboarding process
      and demonstrates skills and knowledge necessary to persue a career in IT
      Design.
    </CertificationTemplate>
  );
};

export default IbmFitItDesign;
