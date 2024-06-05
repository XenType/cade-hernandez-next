"use client";
import LinkCard from "@/components/content/link-card";
import StandardButton from "@/components/content/standard-button";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface HomePageProps {
  //
}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const [viewMode, setViewMode] = useState<"explore" | "collaborate">(
    "explore"
  );
  const router = useRouter();
  return (
    <div className="flex flex-col w-full items-center py-8 space-y-8 overflow-hidden">
      <div className="text-fill-gray-dark font-medium text-lg">
        Hi, I&apos;m Cade. Thanks for visiting!
      </div>
      <div className="flex flex-row w-full md:max-w-[600px] justify-around space-x-2">
        <StandardButton
          type={viewMode === "explore" ? "primary" : "secondary"}
          onClick={() => setViewMode("explore")}
        >
          Explore
        </StandardButton>
        <StandardButton
          type={viewMode === "collaborate" ? "primary" : "secondary"}
          onClick={() => setViewMode("collaborate")}
        >
          Collaborate
        </StandardButton>
      </div>
      <AnimatePresence mode="wait">
        {viewMode === "explore" ? (
          <div
            className="flex flex-col space-y-6 px-6 md:max-w-[600px]"
            key="explore-cards"
          >
            <LinkCard
              title="Experiences"
              description="Browse my skills, training and career experience."
              onClick={() => router.push("/resume")}
              motionKey="explore-experience-card"
            />
            <LinkCard
              title="Examples"
              description="See descriptions and code examples for past projects."
              onClick={() => router.push("/projects")}
              motionKey="explore-example-card"
            />
          </div>
        ) : (
          <div
            className="flex flex-col space-y-6 px-6 md:max-w-[600px]"
            key="collaborate-cards"
          >
            <LinkCard
              title="Take a Peek..."
              description="...at some of my past project and see if my skills are a match for your needs."
              onClick={() => router.push("/projects")}
              motionKey="collaborate-project-card"
            />
            <LinkCard
              title="Make a Connection..."
              description="...by email or phone and let me know a bit about you or your company."
              onClick={() => router.push("/connect")}
              motionKey="collaborate-connect-card"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
