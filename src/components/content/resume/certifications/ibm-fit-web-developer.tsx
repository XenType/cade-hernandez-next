"use client";

import CertificationTemplate from "./template";
import { useEffect } from "react";

const IbmFitWebDeveloper: React.FC = () => {
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
      title="Web Developer"
      skills={["Website Design", "UI / UX"]}
      certification={
        <div>
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="9469f257-a6df-47bf-8ee6-670e8fe6e7c2"
            data-share-badge-host="https://www.credly.com"
          />
        </div>
      }
    >
      This certification comes as part of the IBM SkillsBuild onboarding process
      and demonstrates skills and knowledge necessary to persue a career in Web
      Development.
    </CertificationTemplate>
  );
};

export default IbmFitWebDeveloper;
