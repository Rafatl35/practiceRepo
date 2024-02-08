// function square (number){
//     console.log(number);
// }
// square(4);

function square(number){
    console.log('value of the number parameter', number);
    const square1 = number * number;
    console.log('squre of the given number is: ', square1);
}
square(4);
square(5);

function add(num1, num2){
    const sum = num1 + num2;
    console.log('total sum:', sum);

}
add(4, 54);

function addAll(a, b, c, d, e){
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log('total sum :',total)

}
addAll(4, 5, 6, 6, 2);
addAll(1, 3, 5, 6); //undefined 

