$(document).ready(function () {
  let currentFloor = 2; // переменная, где хранится текущий этаж
  let counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  let counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  let floorPath = $(".home-image path"); // каждый отдельный этаж в svg
  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");
  let viewFlatsButton = $(".view-flats");
  let currentFlat = 1;
  let flatPath = $(".modal-image path");
  let flatList = $(".flat-list a");


  // функция наведения мыши на этаж
  floorPath.on('mouseover', function (){
    floorPath.removeClass('current-floor'); // удаление активного класса у этажей
    currentFloor = $(this).attr("data-floor"); // получение значения текущего этажа
    $(".counter" ).text(currentFloor) // записываем значение этажа в счетчик справа
  });

  floorPath.on('click', toggleModal); // при клике на этаж вызвать окно
  modalCloseButton.on('click', toggleModal); // при клике на кнопку закрыть закрыть окно
  viewFlatsButton.on('click', toggleModal);

    
  counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 02, а не 2
      $(".counter" ).text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем код этажа
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGroupping: false });
      $(".counter" ).text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  function toggleModal(){ // функция открыть-закрыть окно
    modal.toggleClass('is-open')
  }

    flatPath.on("mouseover", function () {
        $(".current-flat").removeClass("current-flat");
        currentFlat = $(this).attr("data-flat");
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
    });

    flatList.on("mouseover", function () {
        $(".current-flat").removeClass("current-flat");
        currentFlat = $(this).attr("data-flat");
        console.log(currentFlat)
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
    });
});
  