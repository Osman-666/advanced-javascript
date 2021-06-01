const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     let result = element*element;
//     output.push(result);
// }

// const result = numbers.map(function(element){
//     return element*element;
// })

// const result = numbers.map(x=>x*x);
// console.log(result);

// const bigger = numbers.filter(x => x>5);
// console.log(bigger);

const isThere = numbers.find(x => x>9);
console.log(isThere);