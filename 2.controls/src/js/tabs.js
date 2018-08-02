(function () {
  var tabs = document.querySelectorAll('.tab-list__item');

  function tabClicks(event) {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("tab-list__item_active");
    }
    var clickedTab = event.currentTarget;
    clickedTab.classList.add("tab-list__item_active");
    event.preventDefault();

    var tabContent = document.querySelectorAll(".tab-list__content");

    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("tab-list__content_active");
    }
    var anchorReference = event.target;
    var activeContentId = anchorReference.getAttribute("href");
    var activeTabContent = document.querySelector(activeContentId);
    activeTabContent.classList.add("tab-list__content_active");
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabClicks);
  }
}());