/**
 * year will be leap year if the year is divisible by 4
 */

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = isLeapYear(2020);
console.log(isLipi);

/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4; then it will be a leap year
 * 2.
 */
console.log('-----------------------------------')
function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeep = isLeapYear2(2100);
const isLeep2 = isLeapYear2(2400);
const isLeep3 = isLeapYear2(1900);
const isLeep4 = isLeapYear2(2052);
console.log(isLeep,isLeep2,isLeep3,isLeep4);