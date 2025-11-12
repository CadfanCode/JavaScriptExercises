// Exercise 1: Change text in the paragraph to something else.
const buttonHandle = document.getElementById("btn1");
const textHandle = document.querySelector("#p1");
buttonHandle.addEventListener('click', () =>{
    textHandle.textContent = "You clicked on the button!";
});

// Exercise 2: Change the colour of the background.
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const backgroundButton = document.getElementById("btn2");
const backgroundHandle = document.querySelector("body");

backgroundButton.addEventListener('click', () => {
    backgroundHandle.style.backgroundColor = getRandomColor();
});

// Excercise 3: Write out users input.
const submitButton = document.getElementById("btn3");
const inputTextfield = document.getElementById("textfield");

submitButton.addEventListener('click',() => {
    const outputTextfield = document.getElementById("p2");
    outputTextfield.textContent = inputTextfield.value;
});

// Exercise 4: Switch themes
const themeButton = document.getElementById("btn4");
const themeHandle = document.querySelector("body");

themeButton.addEventListener('click', () =>{
    themeHandle.classList.add('dark');
  /* const randNum = Math.floor(Math.random() * 2);
  if (randNum == 1){
    themeHandle.classList.add('light');
    themeHandle.classList.remove('dark');
  }else{
    themeHandle.classList.add('dark');
    themeHandle.classList.remove('light'); 
    
  }

  */
});