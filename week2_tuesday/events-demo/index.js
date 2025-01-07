function changeTextInline(element) {
  element.innerHTML = "Yay, nice! 👌";
  element.classList.remove("text-blue-600");
  element.classList.add("text-red-600");
}

function getRandomColor() {
  const colors = [
    "red", "green", "blue", "yellow", "purple", "pink", "gray", "indigo", "teal", "lime"
  ];
  const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomShade = shades[Math.floor(Math.random() * shades.length)];

  return `bg-${randomColor}-${randomShade}`;
}

const body = document.querySelector("#main");
const button = document.querySelector("#eventListenerButton");

button.addEventListener("click", () => {
  // Remove existing background classes
  body.className = ""; // Clears all existing classes
  body.classList.add("flex", "flex-col", "items-center", "justify-center", "h-screen", getRandomColor());
});