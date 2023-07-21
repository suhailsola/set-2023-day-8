console.log("javascript is loaded");

let animals = ["lion", "tiger", "dophin", "snake", "ant"];

let fruits = ["appple", "pear", "grapes", "avocado", "orange"];
// for (let i = 0; i < animals.length; i = i + 1) {
//   console.log(animals[i]);
// }

let h1ArrayDom = document.querySelectorAll("h1");
let renderAnimalsDom = document.querySelector("#renderAnimals");
let renderFruitsDom = document.querySelector("#renderFruits");
// console.dir(h1ArrayDom.length);

// for (let i = 0; i < h1ArrayDom.length; i = i + 1) {
//   h1ArrayDom[i].setAttribute("style", "background-color:red;");
// }

// for (let i = 0; i < h1ArrayDom.length; i = i + 1) {
//   if (i % 2 == 0) {
//     h1ArrayDom[i].setAttribute("style", "background-color:red;");
//   } else {
//     h1ArrayDom[i].setAttribute("style", "background-color:yellow;");
//   }
// }

for (let i = 0; i < animals.length; i = i + 1) {
  let newH1Dom = document.createElement("h1");
  newH1Dom.innerText = animals[i];
  renderAnimalsDom.appendChild(newH1Dom);
}

for (let i = 0; i < fruits.length; i++) {
  let html = `<h1>${fruits[i]}</h1>`;
  //   renderFruitsDom.insertAdjacentHTML("beforeend", html);
  renderFruitsDom.innerHTML = html;
}
