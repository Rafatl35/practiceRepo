const a = 12;
const b = 34;
if(a > b){
    console.log('a is gatter than b', a);
}
else{
    console.log('b is gatter than a', b);
}

// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max = getMax(45, 23);
console.log(max);

//----------------------------------------

const a1 = 13;
const b1 = 2;
const c = 6;

if(a1>b1 && a1>c){
    console.log('a is largest value', a1);
}
else if(b1 > c && b1 > a1){
    console.log('b is largest value', b1)
}
else{
    console.log('c is largest value');
}
//-------------------------------------------
function maxthree(a, b, c){
    if(a > b && a > c){
        console.log('a is larget value:', a);
    }
    else if(b > c && b > a){
        console.log('b is largest value:', b);
    }
    else{
        console.log('c is largest vaue:',c)
    }
}
const maxth = maxthree(23, 2, 44);
console.log(maxth); 

    