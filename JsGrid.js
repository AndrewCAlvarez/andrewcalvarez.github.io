var gridItem = document.getElementsByClassName("gridItem");
var main = document.getElementById("gridContainer");

for (i = 0; i < 10; i++) {
  main.innerHTML = "hello";
}

for (i = 0; i < gridItem.length; i++) {
  var item = gridItem[i];
  item.onclick = function() {
    var newItem = document.createElement("DIV");
    newItem.setAttribute("class", "gridItem");
    document.body.appendChild(newItem);
  };
}

var btn = document.getElementsByTagName("BUTTON");

btn[0].style.backgroundColor = "black";
