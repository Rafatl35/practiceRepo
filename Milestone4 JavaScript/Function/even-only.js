/**
 * create function that will return only the even numbers
 * return the  sum of even numbers
 */

function evenNumbersOnly(numbers){
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
        }
    }
}
const numbers = [2, 5, 6, 3, 10, 8]
evenNumbersOnly(numbers);