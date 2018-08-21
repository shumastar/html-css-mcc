(function () {
	var connectedSlider = document.getElementById('slider-handles');

	noUiSlider.create(connectedSlider, {
		start: [30, 60],
		step: 1,
		format: {
			to: function (value) {
				return value;
			},
			from: function (value) {
				return value.replace('', '');
			}
		},
		connect: true,
		tooltips: [true, true],
		range: {
			'min': [0],
			'max': [100]
		}
	});
}());