function doubleIt(number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('I will call the function');
doubleIt(23); //argument

// used variable
const number = 44;
doubleIt(number);
const money = 10;
doubleIt(money);

// difference
function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}

difference(34, 66);