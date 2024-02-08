/**
 * Looping Technique
 * 1. for loop
 * 2. while loop 
 * 3. do while --> ignore
 * 4. for of -->using for array loop
 * 5. for in --> using for object loop
 */

const friends = ['Elon', 'Jadu', 'Madu', 'kadu', 'Alu', 'Kalu'];
for(const friend of friends){
    // console.log(friend);
}

for(let i=0; i < friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}

// let i= 0;
// while(i<friends.length){
//     console.log(friends[i]);
//     i++;
// }

const numbers = [23, 345, 54, 66, 4, 23, 6, 9, 10];

let n = 0;
while(n < numbers.length){
    console.log(numbers[n])
    n++;
}
