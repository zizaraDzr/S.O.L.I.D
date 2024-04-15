// Оригинальная функция calculateArea
function calculateArea(width, height) {
    return width * height;
  }
  
  // Новая функция calculateVolume, которая также возвращает результат, но для объема куба
  function calculateVolume(width, height, depth) {
    return width * height * depth;
  }
  
  // Мы можем использовать новую функцию calculateVolume везде, где раньше использовалась calculateArea,
  // потому что она также возвращает результат и принимает те же аргументы
  console.log(calculateVolume(3, 4, 5)); // Выведет: 60
  