//сумма квадратных корней всех четных чисел

console.log(
    [1, 4, 3, 16, 4, 256, 4]
      .filter(element => !(element % 2))
      .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
);
