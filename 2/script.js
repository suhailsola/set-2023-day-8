console.log("Halo");
let choresListDom = document.querySelector("#choresList");
let insertTextDom = document.querySelector("#list");
let insertButtonDom = document.querySelector("#insertList");

let deleteBtnDom = document.querySelector("#deleteBtn");

let checkIndex = document.querySelectorAll("h3");

// let chores = [
//   "Water plants",
//   "Bring food to grandma",
//   "Buy grocery",
//   "Watch fireship.io",
// ];

let chores = getChores() || [];
// loopChores();

function loopChores() {
  for (let i = 0; i < chores.length; i++) {
    // create new div
    let newCardDom = document.createElement("div");
    //   newCardDom.classList.add("card");
    newCardDom.classList.add("task");

    //   newCardDom.setAttribute('class','card');

    // create new h4
    let newH4Dom = document.createElement("h3");
    newH4Dom.innerText = `${i + 1}. ${chores[i]}`;

    let newBtnDom = document.createElement("button");
    newBtnDom.setAttribute("id", "deleteBtn");
    newBtnDom.setAttribute("onclick", "popChores()");
    newBtnDom.innerText = "Del";

    //  append chores into card, card into choresListDom
    newH4Dom.appendChild(newBtnDom);
    newCardDom.appendChild(newH4Dom);
    choresListDom.appendChild(newCardDom);
  }
}

function addList() {
  let newList = insertTextDom.value;
  if (newList === "") return;
  choresListDom.innerHTML = "";
  chores.push(newList);
  //   console.log(chores);
  storeChores(chores);
  loopChores();
  insertTextDom.value = "";
}

window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    console.log("User pressed enter");
    addList();
  }
});

// Stores chores array in local storage
function storeChores(newArray) {
  localStorage.setItem("chores", newArray);
}

// get the stored value

function getChores() {
  let storedChores = localStorage.getItem("chores");
  //   console.log(storeChores.split(","));
  if (!storedChores) return;
  return storedChores.split(",");

  //   it returns back as a string
}

window.addEventListener("load", function () {
  loopChores();
});

// add edit and delete button on card

function popChores(index) {
    console.log(checkIndex);
//   let i = chores.length;
  //   console.log(choresListDom.value[i]);
  //   chores.pop();
  chores.splice(index, 1);
  choresListDom.innerHTML = "";
  loopChores();
}
