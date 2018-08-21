(function () {
  var orderModal = new Modal('order-modal-window', 'open-order-modal', 'close-order-modal');
  var buttonOrder = document.getElementById('open-order-modal');
  var buttonCloseOrder = document.getElementById('close-order-modal');
  var buttonSendOrder = document.getElementById('send-order');
  var buttonCancelOrder = document.getElementById('cancel-order');

  function createOrder() {
    var qty = document.getElementById("spinner");
    var color = document.getElementById("color");
    var size = document.getElementById("size");
    var mainColor = document.querySelector('.color-item__radio:checked');
    console.log('QTY:' + qty.value);
    console.log('Color:' + color.options[color.selectedIndex].value);
    console.log('SIZE:' + size.options[size.selectedIndex].value);
    console.log('MAIN COLOR:' + mainColor.value);
    var newOrder = {
      productColor: color.options[color.selectedIndex].value,
      productSize: size.options[size.selectedIndex].value,
      productQty: qty.value,
      productMainColor: mainColor.value,
    };
    var serialOrder = JSON.stringify(newOrder);
    return sessionStorage.setItem('order', serialOrder);
  }

  function modalOrder() {
    var qtyOrder = document.getElementsByClassName('modal-form-quontity__input')[0];
    var colorOrder = document.getElementsByClassName('modal-form-color__input')[0];
    var sizeOrder = document.getElementsByClassName('modal-form-size__input')[0];
    var mainColorOrder = document.getElementsByClassName('modal-form-message__input')[0];
    var returnOrder = JSON.parse(sessionStorage.getItem('order'));
    qtyOrder.value = returnOrder.productQty;
    colorOrder.value = returnOrder.productColor;
    sizeOrder.value = returnOrder.productSize;
    mainColorOrder.value = returnOrder.productMainColor;
  }

  function clearOrder() {
    var checkedItem = document.getElementsByClassName('color-item_checked')[0];
    checkedItem.classList.remove('color-item_checked');
    sessionStorage.removeItem('order');
  }

  function sendOrder() {
    alert('Thank YOU!');
    sessionStorage.removeItem('order');
  }

  function cancelOrder() {
    var qtyOrder = document.getElementsByClassName('modal-form-quontity__input')[0];
    var savedOrder = JSON.parse(sessionStorage.getItem('order'));
    savedOrder.productQty = qtyOrder.value;
    var reWrittenOrder = JSON.stringify(savedOrder);
    sessionStorage.setItem('order', reWrittenOrder);
    var newQty = document.getElementById("spinner");
    var newSavedOrder = JSON.parse(sessionStorage.getItem('order'));
    newQty.value = newSavedOrder.productQty;
    orderModal.closeModal();
  }

  function enableButoon() {
    var mainColor = document.querySelector('.color-item__radio:checked');
    var qty = document.getElementById("spinner");
    var color = document.getElementById("color");
    var size = document.getElementById("size");
    console.log(mainColor.value, qty.value, color.value, size.value);
    if (mainColor && (+qty.value > 0) && color.value && size.value) {
      buttonOrder.disabled = false;
    } else {
      buttonOrder.disabled = true;
    }
  }

  buttonOrder.addEventListener("click", createOrder);
  buttonOrder.addEventListener("click", modalOrder);
  buttonCloseOrder.addEventListener("click", clearOrder);
  buttonSendOrder.addEventListener("click", sendOrder);
  buttonCancelOrder.addEventListener("click", cancelOrder);
  document.addEventListener("click", enableButoon);
}());