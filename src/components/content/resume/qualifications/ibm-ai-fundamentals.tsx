"use client";

import { useEffect } from "react";
import CertificationTemplate from "./template";

const IbmAiFundamentals: React.FC = () => {
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
      title="Artificial Intelligence Fundamentals"
      skills={["Artificial Intelligence", "IBM Watson Studio"]}
      certification={
        <div>
          <div
            data-iframe-width="150"
            data-iframe-height="250"
            data-share-badge-id="71deb4ed-0647-4ec3-b3d5-5beb6e1cfeb5"
            data-share-badge-host="https://www.credly.com"
          />
        </div>
      }
    >
      During this foundational course I gained hands-on experience with IBM's
      Watson Studio and AutoAI feature.
    </CertificationTemplate>
  );
};

export default IbmAiFundamentals;
