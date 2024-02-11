/**
 * array has some duplicate elements
 */

const personName = ['abu', 'kabu', 'tabu', 'habu', 'abu', 'tabu', 'habu'];
const number = [1, 3, 5, 6, 99, 23, 55, 4];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) == false){
            unique.push(item);
        }
    }
    return unique;
    console.log(array);
}

const uniqueArray = noDuplicate(personName);
console.log(uniqueArray);