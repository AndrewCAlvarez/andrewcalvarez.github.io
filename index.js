function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["femail"].value;
  var z = document.forms["myForm"]["fmessage"].value;
  if (x == "" || x == "Name") {
    alert("Name field is required");
    return false;
  } else if (y == "" || y == "Email") {
    alert("Email field is required");
    return false;
  } else if (z == "" || z == "Message...") {
    alert("Message field is required");
    return false;
  }
}

var fname = document.getElementById("fname");

fname.onclick = function() {
  fname.value = "";
};

var femail = document.getElementById("femail");

femail.onclick = function() {
  femail.value = "";
};

var fmessage = document.getElementById("fmessage");

fmessage.onclick = function() {
  fmessage.value = "";
};

var hamburgerMenu = document.getElementById("hamburgerMenu");
var menuItems = document.getElementsByClassName("collapsableNav");
var navBar = document.getElementById("navBar");
var navBar2 = document.getElementById("navBar2");
var lastScrollPosition = 0;
var firstPass = false;

document.body.onscroll = function() {
  var curScrollPos = document.body.scrollTop;
  console.log(curScrollPos);
  if (curScrollPos < lastScrollPosition) {
    navBar2.style.display = "block";
    navBar2.style.zIndex = 1;
    navBar2.style.top = "0";
    lastScrollPosition = curScrollPos;
    if (curScrollPos == 0 && firstPass) {
      navBar2.style.display = "none";
      navBar2.style.zIndex = -2;
      navBar2.style.top = "-50px";
      firstPass = false;
    }
  } else {
    navBar2.style.top = "-50px";
    lastScrollPosition = curScrollPos;
    navBar2.style.display = "block";
  }
  if (curScrollPos > 100) {
    firstPass = true;
  }
};
