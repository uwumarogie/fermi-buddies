import { AboutSection } from "@/components/landing-page/about-section";
import { FeaturesSection } from "@/components/landing-page/feature-section";
import { Footer } from "@/components/landing-page/footer";
import { Header } from "@/components/landing-page/header";
import { Hero } from "@/components/landing-page/hero";
import { ProblemsSection } from "@/components/landing-page/problem-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ProblemsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
