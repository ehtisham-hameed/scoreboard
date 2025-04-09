
let num1 = 0
let num2 = 0
document.getElementById("house-board").textContent = num1
document.getElementById("guest-board").textContent = num2

function hadd1() {
   num1 +=1
   document.getElementById("home-board").textContent = num1
   console.log(num1)
}

function hadd2() {
   num1 +=2
   document.getElementById("home-board").textContent = num1
   console.log(num1)
}

function hadd3() {
   num1 +=3
   document.getElementById("home-board").textContent = num1
}

function gadd1() {
   num2 +=1
   document.getElementById("guest-board").textContent = num2
}

function gadd2() {
   num2 +=2
   document.getElementById("guest-board").textContent = num2
}

function gadd3() {
   num2 +=3
   document.getElementById("guest-board").textContent = num2
}

/*
let num1 = 0
let num2 = 0
document.getElementById("board1").textContent = num1
document.getElementById("board2").textContent = num2

function hadd1(){
    num1 += 1
    document.getElementById("board1").textContent = num1
    
}

function hadd2(){
    num1 += 2
    document.getElementById("board1").textContent = num1
}

function hadd3(){
    num1 += 3
    document.getElementById("board1").textContent = num1
}

function gadd1(){
    num2 += 1
    document.getElementById("board2").textContent = num2
}

function gadd2(){
    num2 += 2
    document.getElementById("board2").textContent = num2
}

function gadd3(){
    num2 += 3
    document.getElementById("board2").textContent = num2
}
*/