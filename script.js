// Change text in paragraph to something else.
const buttonHandle = document.getElementById("btn1"); // Get a handle on the button
const textHandle = document.querySelector(".p");
buttonHandle.addEventListener('click', () =>{
    textHandle.textContent = "You clicked on the button!";
})