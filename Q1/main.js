/* 

Using the image displayed in index.html, create the following using JavaScript. 

When the user hovers over the image displayed, the image changes to a img2.jpg 

When the user hovers over the image displayed, a new div is added to the page. Inside the div, there is an H1 that says “Good Luck On Your Final Exam!”.

When the user hovers away from the image, the background colour changes to #C0DE25 and the H1 disappears. 


*/

var img = document.querySelector("body > main > img");

img.addEventListener("mouseover", function (event) {
  event.target.src = "images/img2.jpg";

  var div = document.createElement("div");
  div.id = "new-div";
  var h1 = document.createElement("h1");
  var t = document.createTextNode("Good Luck On Your Final Exam!.");
  h1.appendChild(t);
  div.appendChild(h1);
  document.body.appendChild(div);
});

img.addEventListener("mouseout", function (event) {
  document.body.style.background = "#C0DE25";
  document.querySelector("#new-div").remove();
});
