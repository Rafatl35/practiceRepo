/**
 * create function that will return only the even numbers
 * return the  sum of even numbers
 */

function evenNumbersOnly(numbers){
    const events = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            events.push(number)
        }
    }
    return events;
}
const numbers = [2, 5, 6, 3, 10, 8]
const events = evenNumbersOnly(numbers);
console.log('event numbers are :', events);

console.log('Sum of Even Numbers------------------------------');

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('sum of the even numbers is :', sum);