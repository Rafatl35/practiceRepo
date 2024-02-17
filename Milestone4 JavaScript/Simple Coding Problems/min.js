const prices = [20000, 300000, 3300, 24000, 80000, 660000, 55500];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('chepest one is: ', cheap);