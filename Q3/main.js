// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); 

submitButton.addEventListener('click', function(e) { 
  e.preventDefault();  
  let personName = document.querySelector("body > div > main > form > input[type=text]:nth-child(1)").value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main[0].appendChild(para);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^='); 
}); 