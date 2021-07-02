let randomNumber1 = Math.floor(1 + 6 * Math.random());
let randomNumber2 = Math.floor(1 + 6 * Math.random());
let image1 = document.getElementsByTagName("img")[0];
let image2 = document.getElementsByTagName("img")[1];



function rollDice1(){
  if(randomNumber1 === 1){
    image1.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2){
      image1.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    image1.setAttribute("src", "images/dice3.png");
  }else if (randomNumber1 === 4) {
    image1.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    image1.setAttribute("src", "images/dice5.png");
  }else{
    image1.setAttribute("src", "images/dice6.png");
  }
}


function rollDice2(){
  if(randomNumber2 === 1){
    image2.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2){
      image2.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    image2.setAttribute("src", "images/dice3.png");
  }else if (randomNumber2 === 4) {
    image2.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    image2.setAttribute("src", "images/dice5.png");
  }else{
    image2.setAttribute("src", "images/dice6.png");
  }
}

function winner(){
  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 has Won!"
  } else if (randomNumber1  === randomNumber2) {
      document.querySelector("h1").innerHTML = "It's a Draw :("
  }else{
      document.querySelector("h1").innerHTML = "Player 2 has Won!"
  }
}
