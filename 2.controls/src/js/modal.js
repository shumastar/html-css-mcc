(function () {
  var modalWindow = document.getElementById('modal-window');
  var orderButton = document.getElementById("open-modal");
  var closeModal = document.getElementsByClassName("modal__close")[0];
  var sendButton = document.getElementsByClassName("button-send")[0];

  function orderButtonClick() {
    modalWindow.classList.add("layout__modal_active");
  }

  function closeButttonClick() {
    modalWindow.classList.remove("layout__modal_active");
  }

  function sendOrder() {
    modalWindow.classList.remove("layout__modal_active");
    alert("Thank you for your order!");
  }
  
  orderButton.addEventListener("click", orderButtonClick);
  closeModal.addEventListener("click", closeButttonClick);
  sendButton.addEventListener("click", sendOrder);
}());