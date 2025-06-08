import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HistorySection = () => {
  const events = [
    {
      year: "1940",
      title: "Начало строительства",
      description: "Закладка субмарин типа VIIC на верфях Германии",
      icon: "Hammer",
    },
    {
      year: "1941",
      title: "Боевые походы",
      description: "Активные действия в Атлантике против конвоев союзников",
      icon: "Ship",
    },
    {
      year: "1981",
      title: "Фильм 'Das Boot'",
      description: "Выход культового фильма Вольфганга Петерсена",
      icon: "Film",
    },
    {
      year: "1985",
      title: "Режиссерская версия",
      description: "Выпуск расширенной 6-часовой версии фильма",
      icon: "Clock",
    },
  ];

  const facts = [
    "693 подводные лодки типа VIIC были построены",
    "Самый массовый тип немецких субмарин в истории",
    "Фильм номинирован на 6 премий 'Оскар'",
    "Съемки проходили в реальных декорациях субмарины",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
            ИСТОРИЯ И НАСЛЕДИЕ
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            От реальных боевых операций до культового произведения кинематографа
          </p>
        </div>

        {/* Временная линия */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-oswald text-2xl font-bold mb-8 text-center text-yellow-300">
            КЛЮЧЕВЫЕ СОБЫТИЯ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-slate-700 border-slate-600 hover:bg-slate-650 transition-all hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon
                        name={event.icon}
                        size={24}
                        className="text-black"
                      />
                    </div>
                    <div className="text-2xl font-bold text-yellow-300 mb-2">
                      {event.year}
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Интересные факты */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-oswald text-2xl font-bold mb-8 text-center text-yellow-300">
            ИНТЕРЕСНЫЕ ФАКТЫ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-900 p-6 rounded-lg"
              >
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Info" size={16} className="text-black" />
                </div>
                <p className="text-gray-300">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Цитата из фильма */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-lg p-8 max-w-3xl mx-auto border-l-4 border-yellow-600">
            <Icon
              name="Quote"
              size={32}
              className="text-yellow-600 mx-auto mb-4"
            />
            <blockquote className="text-xl italic text-gray-300 mb-4">
              "Мы - волки моря. Охотимся стаей, но каждый сам за себя."
            </blockquote>
            <cite className="text-gray-500">— из фильма "Das Boot" (1981)</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
