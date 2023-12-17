let inputOne = document.querySelector(".input_one");
let inputTwo = document.querySelector(".input_two");
let inputResult = document.querySelector(".result");

let plus = document.querySelector(".plus");

plus.addEventListener("click" , ()=>{
    inputOne.value + inputTwo.value;
    inputResult.value = (Number(inputOne.value)) + (Number(inputTwo.value));
})

let minus = document.querySelector(".minus");

minus.addEventListener("click" , ()=>{
    inputOne.value - inputTwo.value;
    inputResult.value = (Number(inputOne.value)) - (Number(inputTwo.value));
})

let multiple = document.querySelector(".multiple");

multiple.addEventListener("click" , ()=>{
    inputOne.value * inputTwo.value;
    inputResult.value = (Number(inputOne.value)) * (Number(inputTwo.value));
})

let division = document.querySelector(".division");

division.addEventListener("click" , ()=>{
    inputOne.value / inputTwo.value;
    inputResult.value = (Number(inputOne.value)) / (Number(inputTwo.value));
})

let mudulus = document.querySelector(".mudulus");

mudulus.addEventListener("click" , ()=>{
    inputOne.value % inputTwo.value;
    inputResult.value = (Number(inputOne.value)) % (Number(inputTwo.value));
})

let exponentiation = document.querySelector(".exponentiation");

exponentiation.addEventListener("click" , ()=>{
    inputOne.value ** inputTwo.value;
    inputResult.value = (Number(inputOne.value)) ** (Number(inputTwo.value));
})

let remove = document.querySelector(".remove");

remove.addEventListener("click" , ()=>{
    inputOne.value = " ";
    inputTwo.value = " ";
    inputResult.value = " ";
})
