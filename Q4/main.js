var elemt = document.querySelector("body > main > div > div");
var container = document.querySelector("body > main > div.cards");
var btn = document.querySelector("body > main > button");

btn.addEventListener("click", function(event){
  
//Fetch from our url
fetch("https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json").then(
  function (response) {
    response.text().then(function (text) {
      var obj = JSON.parse(text);

      container.style.visibility = "visible";

      //loop through json
      for (let item of obj.cats) {
        let age = item["age"];
        let name = item["name"];
        let species = item["species"];
        let favFoods = item["favFoods"];

        //clone the base node and create products
        var cln = elemt.cloneNode(true);
        //Assign appropriate values
        cln.children[0].innerText = name;
        cln.children[1].innerText = "Species : " + species;

        var favfoodsstr = "";
        for (let favs of favFoods) {
          favfoodsstr += favs;
          favfoodsstr += ",";
        }

        cln.children[2].innerHTML = "Fav Food: " + favfoodsstr;
        cln.children[3].innerText = "Age : " + age;


        //Append our child to document
        container.appendChild(cln);
      }
      //delete our base node
      elemt.remove();
    });
  }
);
});

