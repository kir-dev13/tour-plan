// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
// ymaps.ready(init);

let spinner = $("ymap-container").children(".loader");

let checkIfLoad = false;

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [7.890703, 98.294772],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
  });
  var glyphIcon2 = new ymaps.Placemark(
    [7.890703, 98.294772],
    {},
    {
      preset: "islands#redHomeIcon",
      iconGlyph: "home",
      iconGlyphColor: "red",
      iconColor: "red",
    }
  );
  myMap.geoObjects.add(glyphIcon2);

  let layer = myMap.layers.get(0).get(0);

  waitForTilesLoad(layer).then(function () {
    spinner.removeClass("loader-is-active");
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    let tc = getTileContainer(layer),
      readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function () {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (let k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
        layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback) {
  let script = document.createElement("script");

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;

let ymap = function () {
  $(".ymap-container").mouseenter(function () {
    if (!checkIfLoad) {
      checkIfLoad = true;
      spinner.addClass("loader-d");
      loadScript(
        "https://api-maps.yandex.ru/2.1/?apikey=8aee3e46-5c2e-4c6e-87a5-28c7351d88c7&lang=ru_RU",
        function () {
          ymaps.load(init);
        }
      );
    }
  });
};

$(function () {
  ymap();
});
