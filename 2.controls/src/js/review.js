(function () {
  var buttonCloseReview = document.getElementById('close-review-modal');
  var buttonSendReview = document.getElementById('send-review');

  function saveNewReview() {
    var textReview = document.getElementById('text-review');
    var newReview = {
      text: textReview.value
    };
    var serialReview = JSON.stringify(newReview);
    var modal = document.getElementById('review-modal-window');
    sessionStorage.setItem('review', serialReview);
    modal.classList.remove('layout__modal_active');
  }

  function cancelReview() {
    var textReview = document.getElementById('text-review');
    var nameReview = document.getElementById('name-review');
    textReview.value = "";
    nameReview.value = "";
  }

  function enableButton() {
    var textReview = document.getElementById('text-review');
    if (textReview.value) {
      buttonSendReview.disabled = false;
    } else {
      buttonSendReview.disabled = true;
    }
  }

  function addNewReviewToList() {
    var returnReview = JSON.parse(sessionStorage.getItem('review'));
    var reviewList = document.getElementById("review-list");
    var newReview = document.createElement("li");
    newReview.innerHTML = returnReview.text;
    reviewList.appendChild(newReview);
    buttonSendReview.removeEventListener('click', addNewReviewToList);
    document.removeEventListener('click', addNewReviewToList);
  }

  buttonSendReview.addEventListener('click', saveNewReview);
  buttonSendReview.addEventListener('click', addNewReviewToList);
  buttonCloseReview.addEventListener('click', cancelReview);
  document.addEventListener('change', enableButton);
  document.addEventListener('click', addNewReviewToList);
}());