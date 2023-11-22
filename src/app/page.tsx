import About from "@/components/content/home/about";
import FeaturedContent from "@/components/content/home/featured";
import WelcomeContent from "@/components/content/home/welcome";

export default function Home() {
  return (
    <div className="flex flex-col">
      <WelcomeContent />
      <FeaturedContent />
      <About />
    </div>
  );
}
