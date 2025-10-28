import { ThemeToggle } from "../components/ThemeToggle";
import { Shimmerbackground } from "../components/Shimmerbackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* for Toggle Effect(light mode and dark mode) */}
      <ThemeToggle />

      {/*for the background animation effect */}
      <Shimmerbackground />
      {/*NavBar */}
      <NavBar />

      {/*Main Section*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/*Footer Section */}
      <Footer />
    </div>
  );
};
