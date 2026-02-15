import { Hero } from "@/components/ui/hero";
import { VibeSection } from "@/components/ui/vibe-section";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { CTASection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Hero />

      <VibeSection
        title="Immersive Design"
        description="We break the boundaries of traditional web experiences. Our designs float, respond, and captivate."
      />

      <FeatureGrid />

      <VibeSection
        title="Seamless Motion"
        description="Every scroll tells a story. Fluid animations guide the eye and keep the user engaged."
        reversed
      />

      <CTASection />
    </main>
  );
}
