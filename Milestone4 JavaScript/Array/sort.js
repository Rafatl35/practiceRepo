// const persons = ['rakib', 'tipu', 'kapu', 'habu', 'dabu', 'abuuu'];
// const sortedPersons = persons.sort();
// console.log(sortedPersons);

// const numbers = [4,2,5,9,6,7,8];

const numbers = [4,2,5,22,6,55,8];
// not working properly
// const numbers_asc = numbers.sort()
const numbers_asc = [...numbers].sort(function(a, b){return a - b});
const numbers_dsc = [...numbers].sort(function(a, b){return b - a});
console.log(numbers_asc);
console.log(numbers_dsc);
