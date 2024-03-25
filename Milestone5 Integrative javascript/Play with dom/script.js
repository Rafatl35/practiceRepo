console.log("connection");

// const title = document.getElementById('title');
// title.innerText = 'My Js power';
// title.style.color = "red"
// console.log(title.innerText);

// const title2 = document.querySelector("p");
// title2.textContent = "I am done by selector";
// console.log(title2);

// const items = document.getElementsByClassName("li-items");
// console.log(items.length);

// const myArr = Array.from(items);
// console.log(myArr);

// for(let index = 0; index < items.length; index++){
//     const element = items[index];
//     element.style.color = "green";
//     // console.log(element);
// }

// const items2 = document.getElementsByTagName("li");
// console.log(items2);

// for(const iterator of items2){
//     console.log(iterator);
// }

// const items3 = document.querySelectorAll("li");
// console.log(items3);

// const bodyName = document.querySelector("body");
// console.log(bodyName.children);

// const ul = document.getElementById("li-container");
// console.log(ul.previousElementSibling.nextElementSibling);

// const ul = document.querySelector('ul');
// ul.innerHTML = "<p>hello</p>"

// document.querySelector("h2").removeAttribute("class");
// document.querySelector("h2").setAttribute("class", "first-heading");

// const att = document.querySelector("h2").getAttribute("id");
// console.log(att);

// const ul = document.querySelector("ul");

// const li = document.createElement('li');
// li.innerText = "Added by Js";
// console.log(li)

// ul.appendChild(li);

// const h2 = document.querySelector("h2");
// h2.classList.add("first", "second");
// h2.classList.remove("second")

const ul = document.querySelector("ul");
const second = document.getElementById("second");

const li = document.createElement("li");
li.innerText = "Hello"

ul.insertBefore(li, second);