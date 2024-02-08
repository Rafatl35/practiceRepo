const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

const reverse_numbers = [];

// for(const num of numbers){
//     // console.log(num);
//     // reverse_numbers.push(num);
//     // reverse_numbers.unshift(num);
// }
// console.log(reverse_numbers);

// for(let i = 0; i < numbers.length; i++){
//     const num1 = numbers[i];
//     reverse_numbers.unshift(num1);
// }
// console.log(reverse_numbers);

// array reverse side
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
    reverse_numbers.push(num)
    console.log(reverse_numbers);
}