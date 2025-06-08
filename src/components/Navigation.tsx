import { Dock } from "@/components/ui/dock";
import { Home, Settings, History, Image } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dockItems = [
    {
      icon: Home,
      label: "Главная",
      onClick: () => scrollToSection("hero"),
    },
    {
      icon: Settings,
      label: "Характеристики",
      onClick: () => scrollToSection("specs"),
    },
    {
      icon: History,
      label: "История",
      onClick: () => scrollToSection("history"),
    },
    {
      icon: Image,
      label: "Галерея",
      onClick: () => scrollToSection("gallery"),
    },
  ];

  return (
    <div className="fixed bottom-2 left-0 right-0 z-50">
      <Dock items={dockItems} />
    </div>
  );
};

export default Navigation;
