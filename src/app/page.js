import BentoGrid from "@/components/BentoGrid";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechMarque from "@/components/TechMarque";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import FooterCTA from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";

export default function Home() {
  const accentColor= "#50a2ff";
  return (
    <div>
      <Hero accentColor={accentColor}></Hero>
      <TechMarque ></TechMarque>
      <BentoGrid accentColor={accentColor}></BentoGrid>
     <Skills></Skills>
     <RecentProjects></RecentProjects>
     <Services></Services>
     <FooterCTA></FooterCTA>
     <FooterBottom></FooterBottom>
    </div>
  );
}
