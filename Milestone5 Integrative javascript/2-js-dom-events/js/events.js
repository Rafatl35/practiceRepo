// option 1: directly set on the HTML element
// button onclick="console.log(556)">Another button</button>

console.log('this is js file');
//option 2 add onclick function
/* <button onclick="makeRed()">Make background Red</button> 
important: we will use this
*/
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
//option 3 add onclick function
const makeBlueButton =document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor='purple';
}

// option 4
const pinkButton = document.getElementById('make-pink');
       pinkButton.addEventListener('click', makePink);
       function makePink(){
            document.body.style.backgroundColor = 'pink';
       }
//option 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// option 4 final
// important: we will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
