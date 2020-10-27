/**
 * Проверяет можно ли итерировать
 * переданный аргумент
 */
function canIterate(value) {
  return Symbol.iterator in Object(value);
}
export default canIterate;
