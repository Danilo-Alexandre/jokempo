
document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("Rock").addEventListener("click", valor)
    document.getElementById("Paper").addEventListener("click", valor)
    document.getElementById("Scissor").addEventListener("click", valor)


})


let restart = document.getElementById("restart").addEventListener("click", volta)

    function volta(){
        score1 = 0
        score2 = 0
        userScore.textContent = 0
        compScore.textContent = 0
        document.getElementById("pl2").innerHTML = " "
        document.getElementById("resultado").innerHTML = ""

    }
let game = ["Rock","Paper","Scissor"]

let score1 = 0, score2 = 0;
let userScore = document.getElementById("score1")
let compScore = document.getElementById("score2")
let scoreboard = document.getElementById("square")




var valor = function gps(i) {


  let find = i.target
  let user = find.id
  let tamanhoArray = game.length
  let comp = Math.floor(Math.random() * tamanhoArray)    
  
 
  document.getElementById("pl2").innerHTML =`${user} <span id="x">X</span> ${game[comp]}`


  if (user == game[comp]) 
  document.getElementById("resultado").innerHTML = "EMPATE"

  else if (user == "Rock" && game[comp] == "Paper" ){
    score2 ++
    compScore.textContent = score2
    document.getElementById("resultado").innerHTML = "PERDEU"
  }

  else if (user == "Rock" && game[comp] === "Scissor" ){
    score1 ++
    userScore.textContent = score1
  document.getElementById("resultado").innerHTML = "GANHOU"
  }

  else if (user == "Paper" && game[comp] == "Scissor" ){
    score2 ++
    compScore.textContent = score2
  document.getElementById("resultado").innerHTML = "PERDEU"
  
  }

  else if (user == "Paper" && game[comp] === "Rock" ){
    score1 ++
    userScore.textContent = score1
  document.getElementById("resultado").innerHTML = "GANHOU"    
  }

  else if (user == "Scissor" && game[comp] == "Rock" ){
    score2 ++
    compScore.textContent = score2
  document.getElementById("resultado").innerHTML = "PERDEU"
  
  }

  else if (user == "Scissor" && game[comp] === "Paper" ){
    score1 ++
    userScore.textContent = score1
  document.getElementById("resultado").innerHTML = "GANHOU"
  }

  


} 









