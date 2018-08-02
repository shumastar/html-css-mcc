(function () {
  var setColor = document.querySelectorAll('.color-item');

  function checkColor(event) {
    for (var i = 0; i < setColor.length; i++) {
      setColor[i].classList.remove("color-item_checked");
    }
    var clickedcheck = event.currentTarget;
    clickedcheck.classList.add("color-item_checked");
  }
  for (i = 0; i < setColor.length; i++) {
    setColor[i].addEventListener("click", checkColor);
  }
}());