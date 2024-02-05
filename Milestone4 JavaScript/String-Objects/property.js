const person ={
    name: 'A. Khan',
    age: 23,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'kuakata']
}

// console.log(person)

// dot notation 

// console.log(person.profession);

// const income = person.salary;
// console.log(income);

console.log(person['age']);
console.log(person['fav places'])

const propName = 'profession';
person[propName] = 'devops'
console.log();