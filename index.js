function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["femail"].value;
  var z = document.forms["myForm"]["fmessage"].value;
  if (x == "") {
    alert("Name field is required");
    return false;
  } else if (y == "") {
    alert("Email field is required");
    return false;
  } else if (z == "") {
    alert("Message field is required");
    return false;
  }
}
