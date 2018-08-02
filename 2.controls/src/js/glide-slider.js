(function () {
  var forward = document.querySelector('#slider-button-forward');
  var backward = document.querySelector('#slider-button-backward');

  var glide = new Glide('.glide', {
    type: 'carousel'
  });

  forward.addEventListener('click', function () {
    glide.go('>')
  });

  backward.addEventListener('click', function () {
    glide.go('<')
  });

  glide.mount();
}());