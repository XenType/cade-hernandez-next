"use client";

import { useEffect } from "react";
import CertificationTemplate from "./template";

const IbmFitCyberSecurity: React.FC = () => {
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
      title="Cybersecurity Professional"
      certification={
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="f3950495-8e94-4caf-94f4-7b5cba5eab4b"
          data-share-badge-host="https://www.credly.com"
        />
      }
    >
      This certification comes as part of the IBM SkillsBuild onboarding process
      and demonstrates skills and knowledge necessary to pursue a career in
      Cybersecurity
    </CertificationTemplate>
  );
};

export default IbmFitCyberSecurity;
