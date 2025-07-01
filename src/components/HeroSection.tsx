import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { memo } from "react";

const SUBMARINE_ASCII = `    ___________________
   |___________________|
  /                     \\
 |  ●     DAS BOOT     ● |
  \\___________________/
       |           |
       |___________|`;

const GLASSMORPHISM_BASE =
  "backdrop-blur-md font-semibold px-8 py-3 text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none";
const GLASSMORPHISM_PRIMARY =
  "bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:border-white/50 focus:ring-2 focus:ring-white/50";
const GLASSMORPHISM_SECONDARY =
  "bg-yellow-400/20 border border-yellow-400/40 text-yellow-100 hover:bg-yellow-400/30 hover:border-yellow-400/60 hover:text-white focus:ring-2 focus:ring-yellow-400/50";

const DecorationBubbles = memo(() => (
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
    <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
    <div className="absolute top-60 left-1/3 w-3 h-3 bg-blue-200 rounded-full animate-pulse delay-500"></div>
  </div>
));

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Подводные пузыри - декоративный элемент */}
      <DecorationBubbles />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Главный заголовок */}
          <h1 className="font-oswald text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            DAS <span className="text-yellow-300">xBOOT</span>
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Легендарная немецкая подводная лодка времен Второй мировой войны
          </p>

          {/* Описание */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-gray-400 leading-relaxed">
              Погрузитесь в историю самой известной подводной лодки, воспетой в
              культовом фильме Вольфганга Петерсена. Узнайте технические
              характеристики, боевой путь и судьбы экипажа.
            </p>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className={`${GLASSMORPHISM_BASE} ${GLASSMORPHISM_PRIMARY}`}
              aria-label="Перейти к разделу с историей подводной лодки"
              onClick={() => scrollToSection("history")}
            >
              <Icon name="Anchor" className="mr-2" />
              Исследовать историю
            </Button>

            <Button
              size="lg"
              className={`${GLASSMORPHISM_BASE} ${GLASSMORPHISM_SECONDARY}`}
              aria-label="Перейти к техническим характеристикам лодки"
              onClick={() => scrollToSection("specs")}
            >
              <Icon name="Settings" className="mr-2" />
              Технические данные
            </Button>
          </div>
        </div>

        {/* Субмарина - ASCII арт стилизация */}
        <div className="mt-16 text-center">
          <div className="text-gray-600 font-mono text-xs md:text-sm leading-tight">
            <pre className="inline-block">{SUBMARINE_ASCII}</pre>
          </div>
        </div>
      </div>

      {/* Волны внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
