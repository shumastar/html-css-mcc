(function () {
  var tabs = document.querySelectorAll('.tab-list__item');
  var reviewLink = document.getElementsByClassName('product-links__item_link')[0];

  function tabClicks(event) {
    var clickedTab = event.currentTarget;
    var tabContent = document.querySelectorAll(".tab-list__content");
    var anchorReference = event.target;
    var activeContentId = anchorReference.getAttribute("href");
    var activeTabContent = document.querySelector(activeContentId);

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("tab-list__item_active");
    }

    clickedTab.classList.add("tab-list__item_active");
    event.preventDefault();

    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("tab-list__content_active");
    }

    activeTabContent.classList.add("tab-list__content_active");
  }

  function makeReviewTabActive() {
    var tabContent = document.querySelectorAll(".tab-list__content");
    var activeReviewTab = document.getElementsByClassName('tab-list__item')[4];
    var activeReviewTabContent = document.getElementById('reviews-tab');

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("tab-list__item_active");
    }

    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("tab-list__content_active");
    }

    activeReviewTab.classList.add("tab-list__item_active");
    activeReviewTabContent.classList.add("tab-list__content_active");
  }


  for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabClicks);
  }
  
  reviewLink.addEventListener("click", makeReviewTabActive);
}());