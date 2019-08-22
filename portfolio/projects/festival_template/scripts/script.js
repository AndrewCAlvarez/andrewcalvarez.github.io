function hamburger_animation() {
  var id = setInterval(frame, 5);
  var menu_bar = document.getElementById("menu-bar");
  var menu_bar2 = document.getElementById("menu-bar2");
  var rotate_deg = 0;
  var rotate_param = "";

  function frame() {
    if (rotate_deg == 45) {
      clearInterval(id);
    } else {
      rotate_deg++;
      rotate_param = "rotate(" + rotate_deg + "deg)";
      menu_bar.style.transform = rotate_param;
      rotate_param = "rotate(-" + rotate_deg + "deg)";
      menu_bar2.style.transform = rotate_param;
      menu_bar2.style.top = "1.5em";
      menu_bar2.style.left = "1.2em"; //tried to move them manually but there has to be a better way to move them left and right
    }
  }
}

var nav_bar = document.getElementById("nav-bar");
nav_bar.addEventListener("click", hamburger_animation);
