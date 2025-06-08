import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ImageGallery = () => {
  const images = [
    {
      title: "Подводная лодка U-96",
      description: "Реальная субмарина, послужившая прототипом",
      imageUrl:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      title: "Интерьер субмарины",
      description: "Тесные отсеки и сложное оборудование",
      imageUrl:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    },
    {
      title: "Перископ",
      description: "Основной инструмент наблюдения под водой",
      imageUrl:
        "https://images.unsplash.com/photo-1551731847-1c1a0c6e5e9e?w=400&h=300&fit=crop",
    },
    {
      title: "Торпедный отсек",
      description: "Главное оружие подводной лодки",
      imageUrl:
        "https://images.unsplash.com/photo-1578662017032-3c5e3b2ce10c?w=400&h=300&fit=crop",
    },
    {
      title: "Кадр из фильма",
      description: "Напряженная атмосфера военного времени",
      imageUrl:
        "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=400&h=300&fit=crop",
    },
    {
      title: "Океанские глубины",
      description: "Среда обитания подводных охотников",
      imageUrl:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-slate-700 text-white">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
            ГАЛЕРЕЯ
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Погрузитесь в атмосферу подводной войны
          </p>
        </div>

        {/* Сетка изображений */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-600 overflow-hidden group hover:scale-105 transition-transform"
            >
              {/* Изображение */}
              <div className="relative overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Icon name="Camera" size={16} className="text-black" />
                  </div>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white">
                  {image.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {image.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <Icon name="Eye" size={16} className="mr-2" />
                  Рассмотреть
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Кнопка загрузить больше */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-8"
          >
            <Icon name="Plus" className="mr-2" />
            Загрузить больше фотографий
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
