"use client";
import LinkCard from "@/components/content/link-card";
import ConnectCellPhone from "@/components/pages/connect/call-me";
import ConnectSendEmail from "@/components/pages/connect/send-email";
import Link from "next/link";
import { useState } from "react";

interface ConnectPageProps {
  //
}

const ConnectPage: React.FC<ConnectPageProps> = ({}) => {
  const [viewMode, setViewMode] = useState<"phone" | "email" | "start">(
    "start"
  );
  return (
    <div className="w-full flex flex-col items-center h-full w-full pt-4 space-y-4">
      <div className="text-xl md:text-4xl text-accent-blue-dark">
        I would love to hear from{" "}
        <span className="underline decoration-accent-blue-light">you!</span>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <LinkCard
          motionKey="email"
          title="By Email"
          description="Send me an email."
          onClick={() => setViewMode("email")}
          arrowDirection="down"
        />
        <LinkCard
          motionKey="phone"
          title="By Phone"
          description="Send a text or give me a call."
          onClick={() => setViewMode("phone")}
          arrowDirection="down"
        />
      </div>
      <div className="flex flex-col w-[360px] md:w-[500px] overflow-hidden scroll-smooth p-2">
        {viewMode === "phone" ? <ConnectCellPhone /> : null}
        {viewMode === "email" ? <ConnectSendEmail /> : null}
      </div>
    </div>
  );
};

export default ConnectPage;
