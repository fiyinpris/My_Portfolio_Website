import { BackgroundDecor } from "../components/BackgroundDecor";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="btn btn-invert sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      {/*for the background grid and glow */}
      <BackgroundDecor />
      {/*NavBar (includes the light/dark mode toggle) */}
      <NavBar />

      {/*Main Section*/}
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/*Footer Section */}
      <Footer />
    </div>
  );
};
