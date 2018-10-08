var numSquares = 6
var colors = generateColors(numSquares)

var squares = document.querySelectorAll(".square");
var picked = randColor();


var header = document.querySelector("#colorDisplay");
var message = document.querySelector("#message")
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
  easy.classList.add("selected");
  medium.classList.remove("selected");
  hard.classList.remove("selected");
  numSquares = 3
  colors = generateColors(numSquares);
  picked = randColor();
  header.textContent = picked;
  h1.style.backgroundColor = "maroon";
  reset.textContent = "New Colors";
  message.textContent = "";
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
})

medium.addEventListener("click", function(){
  easy.classList.remove("selected");
  medium.classList.add("selected");
  hard.classList.remove("selected");
  numSquares = 6
  colors = generateColors(numSquares);
  picked = randColor();
  header.textContent = picked;
  h1.style.backgroundColor = "maroon";
  reset.textContent = "New Colors";
  message.textContent = "";
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
    else{
      squares[i].style.display = "none";
    }
  }
})

hard.addEventListener("click", function(){
  easy.classList.remove("selected");
  medium.classList.remove("selected");
  hard.classList.add("selected");
  numSquares = 9
  colors = generateColors(numSquares);
  picked = randColor();
  header.textContent = picked;
  reset.textContent = "New Colors";
  message.textContent = "";
  h1.style.backgroundColor = "maroon";
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
})

header.textContent = picked;

reset.addEventListener("click", function(){
  colors = generateColors(numSquares);
  picked = randColor();
  header.textContent = picked;
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "maroon";
  reset.textContent = "New Colors";
  message.textContent = "";
})

for (var i = 6; i < squares.length; i++){
  squares[i].style.display = "none";
}

for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === picked){
      message.textContent = "Correct!";
      change(clickedColor);
      h1.style.backgroundColor = picked;
      reset.textContent = "Play Again!";
    }
    else{
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  })
}

function change(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function randColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num){
  var result = [];
  for (var i = 0; i < num; i++){
    result.push(createColors())
  }

  return result;
}

function createColors(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
