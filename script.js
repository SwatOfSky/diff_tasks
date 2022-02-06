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

//сравнивает массивы между собой
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  const compared = firstArray.map((el, id) => secondArray[id] === el);
  return !compared.includes(false);
}
console.log(isEqual(arr1, arr2));
console.log(isEqual(arr1, arr3));
console.log(isEqual(arr1, arr4));

//преобразует глубокий массив в одномерный
const data4 = [1, 2, [3, 4, [5]]];
const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])
console.log(flatten(data4));

//разделяет массив по заданному размеру
const data5 = [1, 2, 3, 4, 5, 6, 7];
const chunk = (array, size) => {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}
console.log(chunk(data5, 2))
console.log(chunk(data5, 3))

//составляет из нескольких массивов один, в котором будут только повторяющиеся значения
const arr6 = [1, 2];
const arr7 = [2, 3];
const arr8 = ['a', 'b'];
const arr9 = ['b', 'c'];
const arr10 = ['b', 'e', 'c'];
const arr11 = ['b', 'b', 'e'];
const arr12 = ['b', 'c', 'e'];
const arr13 = ['b', 'e', 'c'];
const intersection = (...arrays) => {
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element
    }
  });
  if (arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }
  return Array.from(new Set(result));
};
console.log(intersection(arr6, arr7))
console.log(intersection(arr8, arr9, arr10))
console.log(intersection(arr11, arr12, arr13))