var slideShowBtn = document.getElementById("slideShowBtn");
var headerImages = [{ name: null, id: null, inUse: false }];
for (i = 0; i < 5; i++) {
  var imgName = "imgSlide" + i;
  headerImages[i] = {
    name: imgName,
    id: document.getElementById(imgName)
  };
}

slideShowBtn.onclick = function() {
  for (i = 0; i < headerImages.length; i++) {
    if (!headerImages[i].inUse) {
      headerImages[i].id.style.display = "block";
      headerImages[i].inUse = true;
      break;
    }
  }
};
