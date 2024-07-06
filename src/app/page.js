import BannerSection from "@/components/BannerSection/BannerSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import NavbarSection from "@/components/NavbarSection/NavbarSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";

const HomePage = () => {
  return (
    <main>
      <NavbarSection />
      <BannerSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
};

export default HomePage;
