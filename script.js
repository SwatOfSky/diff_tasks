//сумма квадратных корней всех четных чисел
console.log(
    [1, 4, 3, 16, 4, 256, 4]
      .filter(element => !(element % 2))
      .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
);

//заполняет массив значениями
const fill = (arraySize, value) => new Array(arraySize).fill(value);
console.log(fill(5, 's'));

//функция, которая разворачивает массив в обратном порядке
console.log(
[1, 2, 3]
.map((el, id, givenArr) => givenArr[givenArr.length - id - 1])
)

//очищает от ненужного массив
const data = [0, 1, false, 2, undefined, '', 3, null];
const compact = (array) => array.filter((el) => el);
console.log(compact(data))

// формирует пары
const data1 = [['a', 1], ['b', 2]];
const fromPairs = (array) => array.reduce((acc, value) => {
  if (Array.isArray(value)) {
    acc[value[0]] = value[1];
  }
  return acc;
}, {});
console.log(fromPairs(data1))

// неважно
const arrayQ = ['test1', 'test2', 'test3'];
console.log(Object.assign({}, arrayQ));

//убирает ненужные занчения из массива
const data2 = [1, 2, 3, 1, 2, 12];
const without = (array, ...args) => {
  let filteredArray = [...array];
  for (let i = 0; i < args.length; i += 1) {
    filteredArray = filteredArray.filter((el) => el !== args[i])
  }
  return filteredArray;
}
console.log(without(data2, 1, 2));

//убирает повторяющиеся
const data3 = [1, 2, 1, 2, 3, 4, 57, 4];

const unique = (array) => array.filter((element, id) => array.indexOf(element) === id);

console.log(unique(data3));