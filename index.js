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

//hamburger menu functionality. Onclick display = block or none;
//NOTE: move out of way if user scrolls without need to click
var hamburgerMenu1 = document.getElementById("hamburgerMenu1");
var subMenu = document.getElementById("subMenu");
var subMenuDisplayed = false;
hamburgerMenu1.onclick = function() {
  if (!subMenuDisplayed) {
    subMenu.style.display = "block";
    subMenuDisplayed = true;
  } else {
    subMenu.style.display = "none";
    subMenuDisplayed = false;
  }
};

//Projects tab functionality

function openTab(tab) {
  var projectsTabs = document.getElementsByClassName("projectsTab");
  var projectsContent = document.getElementsByClassName("projectsContent");
  var curContent;

  for (i = 0; i < projectsTabs.length; i++) {
    projectsTabs[i].style.backgroundColor = "white";
    projectsTabs[i].style.color = "black";

    projectsContent[i].style.display = "none";

    if (projectsTabs[i].id == tab.id) {
      curContent = projectsContent[i];
    }
  }
  curContent.style.display = "block";
  tab.style.color = "white";
  tab.style.backgroundColor = "8045cf";
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("projectsTab")) {
    openTab(event.target);
  }
});
