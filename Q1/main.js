/* When the button displayed in the browser is clicked, the following should happen:

1.) the background colour of the page changes to  #BADA55
2.) an H1 is created and added to the page that contains the text ‘Thanks for a fun semester!”
3.) The button text changes to clicked 
4.) Good luck on your final exam is removed from the page. 

*/

var button = document.querySelector("body > button");

button.addEventListener("click", function (event) {
  document.body.style.background = "#BADA55";
  event.target.innerText = "Clicked";



  var h1 = document.createElement("h1");
  var t = document.createTextNode("Thanks for a fun semester!");
  h1.appendChild(t);

  document.body.appendChild(h1);

  document.querySelector("body > p").remove();
});
