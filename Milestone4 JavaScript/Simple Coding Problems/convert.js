function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch'
    return result;
}

const abcHight = inchToFeet(72);
console.log(abcHight);
//
const abcHight2 = inchToFeet2(75);
console.log(abcHight2);

function kiloMeterToMIles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const kilomiter = kiloMeterToMIles(5);
console.log(kilomiter);