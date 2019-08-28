var bc = document.getElementById("body");

function color() {
    bc.style.backgroundColor = "blue";
}
color();

bc.onclick = function() {
    bc.style.backgroundColor = "green";
};

var para = document.createElement("img");
var node = document.createTextNode("New p text");
para.appendChild(node);

var element = document.getElementById("body");
element.appendChild(para);
