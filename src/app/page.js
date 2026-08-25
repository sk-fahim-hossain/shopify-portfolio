import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const TechMarque = dynamic(() => import("@/components/TechMarque"), { ssr: true });
const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const Skills = dynamic(() => import("@/components/Skills"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Services = dynamic(() => import("@/components/Services"));
const FooterCTA = dynamic(() => import("@/components/Footer"));
const FooterBottom = dynamic(() => import("@/components/FooterBottom"));

export default function Home() {
  const accentColor = "#50a2ff";
  return (
    <div>
      <Hero accentColor={accentColor} />
      <TechMarque />
      <BentoGrid accentColor={accentColor} />
      <Skills />
      <RecentProjects />
      <Services />
      <FooterCTA />
      <FooterBottom />
    </div>
  );
}
