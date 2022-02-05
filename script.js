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

