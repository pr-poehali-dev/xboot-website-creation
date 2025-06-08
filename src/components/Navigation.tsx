import { Dock } from "@/components/ui/dock";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dockItems = [
    {
      icon: Icon,
      label: "Главная",
      onClick: () => scrollToSection("hero"),
    },
    {
      icon: Icon,
      label: "Характеристики",
      onClick: () => scrollToSection("specs"),
    },
    {
      icon: Icon,
      label: "История",
      onClick: () => scrollToSection("history"),
    },
    {
      icon: Icon,
      label: "Галерея",
      onClick: () => scrollToSection("gallery"),
    },
  ];

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50">
      <Dock items={dockItems} />
    </div>
  );
};

export default Navigation;
