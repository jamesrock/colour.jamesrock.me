(function() {

	app = {
		items: []
	};

	var
	colours = [
		["Pink", 255, 192, 203],
		["LightPink", 255, 182, 193],
		["HotPink", 255, 105, 180]
	],
	getNode = function(id) {

		return document.getElementById(id);

	},
	getColor = function() {

		return ("rgb(" + [(inputRedOn?255:0), (inputGreenOn?255:0), (inputBlueOn?255:0)].join(", ") + ")");

	},
	setColor = function() {

		outputNode.style.backgroundColor = getColor();

	},
	inputRed = getNode("inputRed"),
	inputRedOn = false,
	inputGreen = getNode("inputGreen"),
	inputGreenOn = false,
	inputBlue = getNode("inputBlue"),
	inputBlueOn = false,
	outputNode = getNode("output");

	inputRed.addEventListener("click", function() {

		inputRedOn = !inputRedOn;
		setColor();
		return false;

	});

	inputGreen.addEventListener("click", function() {

		inputGreenOn = !inputGreenOn;
		setColor();
		return false;

	});

	inputBlue.addEventListener("click", function() {

		inputBlueOn = !inputBlueOn;
		setColor();
		return false;

	});

})();
