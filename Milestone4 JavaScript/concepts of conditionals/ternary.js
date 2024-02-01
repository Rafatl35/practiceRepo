/**
 * Ternary --> three parts
 * 
 * condition ? do something when true : do something when false 
 */

const age = 18;
// if(age >= 18){
//     console.log('you can vote');
// }
// else{
//     console.log('you are not able to vote')
// }

//simple tarnary
// age >= 18 ? console.log('you can vote') : console.log('you are not able to vote') 

let price = 1500;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price);

// tarnary
// price = isLeader === true ? 0 : price + 100;
// console.log(price);

// if(isLeader === true){
//     if(price > 1000){
//         price = price/2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price+100;
// }
// console.log(price)

// tarnary

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 100;
console.log(price)