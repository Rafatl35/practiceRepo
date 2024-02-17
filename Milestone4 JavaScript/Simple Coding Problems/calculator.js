function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'divide'){
        return divide(a, b);
    }
    else{
        return "Only 'add, 'subtract', 'multiply', 'divide', operation are allowed";
    }
}
const result = calculator(4, 2, 'add');
console.log('Result:', result);

const resultsub = calculator(3, 2, 'subtract');
console.log('Result:', resultsub);