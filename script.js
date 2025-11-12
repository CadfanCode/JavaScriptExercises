// Exercise 1: Change text in the paragraph to something else.
const buttonHandle = document.getElementById("btn1");
const textHandle = document.querySelector("#p1");
buttonHandle.addEventListener('click', () =>{
    textHandle.textContent = "You clicked on the button!";
})

// Change the colour of the background.
const backgroundButton = document.getElementById("btn2");
const backgroundHandle = document.querySelector("body");
backgroundButton.addEventListener('click', ()=>{
    backgroundHandle.style.color = Math.random(color);
})