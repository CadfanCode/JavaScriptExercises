// Exercise 1: Change text in the paragraph to something else.
const buttonHandle = document.getElementById("btn1");
const textHandle = document.querySelector("#p1");
buttonHandle.addEventListener('click', () =>{
    textHandle.textContent = "You clicked on the button!";
})

// Change the colour of the background.
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change the colour of the background.
const backgroundButton = document.getElementById("btn2");
const backgroundHandle = document.querySelector("body");

backgroundButton.addEventListener('click', () => {
    // 1. Use .style.backgroundColor (not .style.color)
    // 2. Call the function to get a valid random hex color string
    backgroundHandle.style.backgroundColor = getRandomColor();
});