import HeroSection from "@/components/HeroSection";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import HistorySection from "@/components/HistorySection";
import ImageGallery from "@/components/ImageGallery";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="specs">
        <TechnicalSpecs />
      </div>
      <div id="history">
        <HistorySection />
      </div>
      <div id="gallery">
        <ImageGallery />
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
