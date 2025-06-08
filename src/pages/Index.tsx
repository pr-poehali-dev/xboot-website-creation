import HeroSection from "@/components/HeroSection";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import HistorySection from "@/components/HistorySection";
import ImageGallery from "@/components/ImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TechnicalSpecs />
      <HistorySection />
      <ImageGallery />
    </div>
  );
};

export default Index;
