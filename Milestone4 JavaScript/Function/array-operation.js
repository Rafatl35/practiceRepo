/**
 * Objective: write a function to give me the sum of all numbers in an array
 */

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;

}
const numbs = [45, 34, 23, 55, 2];
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is :', sum);