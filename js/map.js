ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map("map", {
    // Центр карты, указываем коордианты
    center: [59.939790284666586, 30.328592760604845],
    // Масштаб, тут все просто
    zoom: 16,
    // Отключаем все элементы управления
    controls: []
  });

  let myGeoObjects = [];

  // Наша метка, указываем коордианты
  myGeoObjects[0] = new ymaps.Placemark([59.938631, 30.323055], {
    balloonContentBody: 'Текст в балуне',
  }, {
    iconLayout: 'default#image',
    // Путь до нашей картинки
    iconImageHref: 'img/svg/pin.svg',
    // Размер по ширине и высоте
    iconImageSize: [80, 140],
    // Смещение левого верхнего угла иконки относительно
    // её «ножки» (точки привязки).
    iconImageOffset: [-40, -140]
  });

  myGeoObjects[1] = new ymaps.Placemark([59.9384534096579, 30.324985690490724], {
    balloonContentBody: 'Текст в балуне',
  }, {
    iconLayout: 'default#image',
    // Путь до нашей картинки
    iconImageHref: 'img/content/shadow-pin.png',
    // Размер по ширине и высоте
    iconImageSize: [182, 110],
    // Смещение левого верхнего угла иконки относительно
    // её «ножки» (точки привязки).
    iconImageOffset: [-90, -125]
  });

  let clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  // Отлючаем возможность изменения масштаба
  myMap.behaviors.disable('scrollZoom');

}
