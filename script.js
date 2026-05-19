// script.js

// Dark Mode

let darkBtn = document.querySelector("#darkModeBtn");

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});


// Typing Effect

let text = "Python Developer | Frontend Learner | Web Developer";

let index = 0;

function typeEffect(){

  if(index < text.length){

    document.querySelector("#typing").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect,100);

  }

}

typeEffect();