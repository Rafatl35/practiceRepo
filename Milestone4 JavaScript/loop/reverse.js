let reverse = '';
const word = 'hello';
for(const newWord of word){
    // console.log(newWord);
    reverse = newWord + reverse;
}
console.log(reverse);