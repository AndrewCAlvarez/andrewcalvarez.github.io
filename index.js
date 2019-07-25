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
