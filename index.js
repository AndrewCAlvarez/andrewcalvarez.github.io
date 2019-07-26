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

//Functionality for sliding content over navbar and then having nav bar drop down
var navBar = document.getElementById("navBar");
var navBar2 = document.getElementById("navBar2");
var lastScrollPosition = 0;
var firstPass = false;

//firstPass is used to determine if the user has scrolled past the navbar. if true,
//then the second nav bar used as a drop down when a user scrolls up will move behind
//the first, allowing the user to scroll content over the nav bar again
//NOTE: CURRENTLY shows both bars on actual mobile devices when scrolling up to top quickly,
//and when user pulls content down the second bar is shown hiding above the first
document.body.onscroll = function() {
  var curScrollPos = document.body.scrollTop;
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
  } else if (curScrollPos > lastScrollPosition && curScrollPos != 0) {
    navBar2.style.top = "-100px";
    lastScrollPosition = curScrollPos;
    navBar2.style.display = "block";
  }
  if (curScrollPos > 100) {
    firstPass = true;
  }
};

//hamburger menu functionality. Onclick display = block or none;
//NOTE: move out of way if user scrolls without need to click
var hamburgerMenu1 = document.getElementById("hamburgerMenu1");
var hamburgerMenu2 = document.getElementById("hamburgerMenu2");
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
hamburgerMenu2.onclick = function() {
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
