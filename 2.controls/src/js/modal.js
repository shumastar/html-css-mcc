// (function () {
//   var modalWindow = document.getElementById('modal-window');
//   var orderButton = document.getElementById("open-modal");
//   var closeModal = document.getElementsByClassName("modal__close")[0];
//   var sendButton = document.getElementsByClassName("button-send")[0];

//   function orderButtonClick() {
//     modalWindow.classList.add("layout__modal_active");
//   }

//   function closeButttonClick() {
//     modalWindow.classList.remove("layout__modal_active");
//   }

//   function sendOrder() {
//     modalWindow.classList.remove("layout__modal_active");
//     alert("Thank you for your order!");
//   }

//   orderButton.addEventListener("click", orderButtonClick);
//   closeModal.addEventListener("click", closeButttonClick);
//   sendButton.addEventListener("click", sendOrder);
// }());



function Modal(modalId, openButtonId, closeButtonId) {
  this.modal = document.getElementById(modalId);
  this.openButton = document.getElementById(openButtonId);
  this.closeButton = document.getElementById(closeButtonId);

  this.openModal = function () {
    this.modal.classList.add("layout__modal_active");
  };

  this.closeModal = function () {
    this.modal.classList.remove("layout__modal_active");
  };

  this.openButton.addEventListener("click", this.openModal.bind(this));
  this.closeButton.addEventListener("click", this.closeModal.bind(this));
}


var orderModal = new Modal('order-modal-window', 'open-order-modal', 'close-order-modal');
if (sessionStorage.getItem('review')) {
  var addedReviewModal = new Modal('added-review-modal-window', 'open-review-modal', 'close-added-review-modal');
} else {
  var reviewModal = new Modal('review-modal-window', 'open-review-modal', 'close-review-modal');
}

