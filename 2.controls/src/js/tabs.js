function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-list__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-list__item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function setColor(evt, colorName) {
  var i, color;

  color = document.getElementsByClassName("color");
  for (i = 0; i < color.length; i++) {
    color[i].className = color[i].className.replace(" active", "");
  }

  evt.currentTarget.className += " active";
}