$(function () {
  $(".input").checkboxradio();

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 100,
    values: [10, 25],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0] + "%" + "-" + ui.values[1] + "%");
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0) + "%" +
    "-" + $("#slider-range").slider("values", 1) + " %");

  $("#color").selectmenu();
  $("#qty")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow");

  $("#size").selectmenu();

  $("#spinner").spinner({
    spin: function (event, ui) {
      if (ui.value > 10) {
        $(this).spinner("value", 0);
        return false;
      } else if (ui.value < 0) {
        $(this).spinner("value", 0);
        return false;
      }
    }
  });
});