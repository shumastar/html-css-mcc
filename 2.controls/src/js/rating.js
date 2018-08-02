(function () {
  document.getElementById('rating-stars').addEventListener('click', function (event) {
    if (!event.target.classList.contains('rating__star')) return;

    if (event.target.classList.contains('rating__star_rated')) {
      event.target.classList.remove('rating__star_rated');
    } else {
      Array.prototype.forEach.call(document.getElementsByClassName('rating__star_rated'), function (el) {
        el.classList.remove('rating__star_rated');
      });
      event.target.classList.add('rating__star_rated');
    }
  });
}());