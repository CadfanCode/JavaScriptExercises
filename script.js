// Change text in paragraph to something else.
const buttonHandle = document.getElementById("btn1");
const textHandle = document.querySelector("#p1");
buttonHandle.addEventListener('click', () =>{
    textHandle.textContent = "You clicked on the button!";
})