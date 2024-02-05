numbers = [5, 54 , 23 , 53, 33];
numbers[1] = 22; //array is mutable (changeable)
console.log(numbers);



// string is immutable(not changeable)
const capital = 'Dhaka';
console.log(capital);
// capital[0] = 'F';
// console.log(capital);

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLocaleLowerCase() == book.toLocaleLowerCase()){
    console.log('Value Matching...');
}
else{
    console.log('not same value')
}