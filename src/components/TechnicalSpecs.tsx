import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TechnicalSpecs = () => {
  const specs = [
    {
      icon: "Ruler",
      title: "Длина",
      value: "67,1 м",
      description: "Общая длина корпуса",
    },
    {
      icon: "Weight",
      title: "Водоизмещение",
      value: "769 т",
      description: "В надводном положении",
    },
    {
      icon: "Gauge",
      title: "Глубина погружения",
      value: "230 м",
      description: "Рабочая глубина",
    },
    {
      icon: "Users",
      title: "Экипаж",
      value: "44 человека",
      description: "Стандартный состав",
    },
    {
      icon: "Zap",
      title: "Скорость",
      value: "17,7 узлов",
      description: "В надводном положении",
    },
    {
      icon: "Target",
      title: "Вооружение",
      value: "14 торпед",
      description: "Стандартный боекомплект",
    },
  ];

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Подводная лодка типа VIIC — самый массовый тип немецких субмарин
          </p>
        </div>

        {/* Сетка спецификаций */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specs.map((spec, index) => (
            <Card
              key={index}
              className="bg-slate-700 border-slate-600 hover:bg-slate-650 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-600 rounded-lg">
                    <Icon name={spec.icon} size={24} className="text-black" />
                  </div>
                  <CardTitle className="text-white text-lg font-semibold">
                    {spec.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {spec.value}
                </div>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-oswald text-2xl font-bold mb-4 text-yellow-300">
              ТАКТИКО-ТЕХНИЧЕСКИЕ ДАННЫЕ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-gray-300">
                  Двигательная установка:
                </h4>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• 2 дизеля MAN M6V 40/46</li>
                  <li>• 2 электромотора SSW GU 460/8-276</li>
                  <li>• Мощность: 2800/750 л.с.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-300">
                  Автономность:
                </h4>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• Дальность: 8500 миль</li>
                  <li>• Под водой: 80 миль</li>
                  <li>• Продовольствие на 56 дней</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
