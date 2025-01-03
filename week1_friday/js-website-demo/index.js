// main där nya element ska läggas till
const mainContainer = document.querySelector("#main");
// elems
const addElementButton = document.querySelector("#addElementButton");
const removeLastElementButton = document.querySelector("#removeLastElementButton");
const newElementText = document.querySelector("#newElementText");
const counter = document.querySelector("#counter");

const addElementToMain = () => {
  const textValue = newElementText.value.trim();
  if (!textValue) {
    alert("Skriv något innan du lägger till!");
    return;
  }

  const newParagraph = document.createElement("p");
  newParagraph.className = "mb-2 text-dark bg-white p-2 rounded";
  newParagraph.innerText = textValue;

  mainContainer.appendChild(newParagraph);
  newElementText.value = ""; // rensa inputfältet
}

// lägg till nytt element vid knapptryck
addElementButton.addEventListener("click", function () {
  addElementToMain();
});

// möjliggör att trycka enter på inputfältet
newElementText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addElementToMain();
  }
});

// ta bort sista elementet
removeLastElementButton.addEventListener("click", function () {
  const lastChild = mainContainer.lastElementChild;
  if (lastChild && lastChild.tagName.toLowerCase() === "p") {
    mainContainer.removeChild(lastChild);
  } else {
    alert("Inga fler element att ta bort!");
  }
});

let cntr = 0;
setInterval(() => {
  cntr++;
  counter.textContent = cntr;
}, 1000);