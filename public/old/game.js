
SRisk = window.SRisk || {};

SRisk.setBoard = function (boardDescription) {
	this.board = boardDescription;
};

SRisk.getCountry = function (name) {
	return this.board.countries[name];
};

SRisk.getCountryNode = function (name) {
	return this.getCountry(name).node;
};

SRisk.setupCountryConnections = function () {
	_.each(this.board.connections, function (connection) {
		var fromCountry = this.getCountry(connection.from),
			toCountry = this.getCountry(connection.to);

		fromCountry.connections = fromCountry.connections || [];
		fromCountry.connections.push(connection.to);

		toCountry.connections = toCountry.connections || [];
		toCountry.connections.push(connection.from);
	}, this);
};

SRisk.createViewPane = function () {
	this.viewPane = $('<div class="viewPane">');
	$("body").append(this.viewPane);
};

SRisk.toggleAllCountries = function () {
	_.each(this.board.countries, function (country) {
		country.toggled = false;
		$(country.node).css('box-shadow', '');
	}, this);
};

SRisk.drawCountries = function () {
	_.each(this.board.countries, function (country, name) {
		country.node = createNode(name, country);
		country.node.country = country;
		this.viewPane.append(country.node);

		$(country.node).on('click', function () {
			if (country.toggled) {
				SRisk.toggleAllCountries();
			}
			else {
				SRisk.toggleAllCountries();
				country.toggled = true;
				$(country.node).css('box-shadow', highlightStyle(country.color));
			}
		});
	}, this);
};

SRisk.drawConnection = function(connection) {
	if (!connection.wraparound) {
		var fromPosition = this.getCountry(connection.from),
			toPosition = this.getCountry(connection.to),
			connectionLength = calculateDistance(fromPosition, toPosition),
			connectionAngle = calculateAngle(fromPosition, toPosition);

		var connection = connectionDiv(fromPosition, connectionLength, connectionAngle);
		this.viewPane.append(connection);
	}
};

SRisk.drawWraparoundConnection = function (connection) {
	var fromCountry = this.getCountry(connection.from),
		toCountry = this.getCountry(connection.to),
		offscreenLeft = calculateOffscreenLeftPosition(fromCountry),
		offscreenRight = calculateOffscreenRightPosition(toCountry),
		leftLength = calculateDistance(offscreenLeft, fromCountry),
		rightLength = calculateDistance(toCountry, offscreenRight),
		connectionAngle = 0,
		connectionLeft = connectionDiv(offscreenLeft, leftLength, connectionAngle),
		connectionRight = connectionDiv(toCountry, rightLength, connectionAngle);

	this.viewPane.append(connectionLeft);
	this.viewPane.append(connectionRight);
};

SRisk.drawConnections = function () {
	_.each(this.board.connections, function (connection) {
		if (connection.wraparound) {
			this.drawWraparoundConnection(connection);
		} else {
			this.drawConnection(connection);
		}
	}, this);
};

SRisk.styleContinents = function () {
	_.each(this.board.continents, function (continent) {
		_.each(continent.countries, function (countryName) {
			var country = this.getCountry(countryName),
				node = this.getCountryNode(countryName);

			country.color = continent.color;
			$(node).css('border-color', continent.color);
		}, this);
	}, this);
};

SRisk.bootstrap = function () {
	this.setupCountryConnections();
	this.createViewPane();
	this.drawConnections();
	this.drawCountries();
	this.styleContinents();
};

// helpers

var calculateDistance = function (from, to) {
	var xDist = to.x - from.x,
		yDist = to.y - from.y;

	return Math.sqrt(xDist * xDist + yDist * yDist);
};

var calculateAngle = function (from, to) {
	var xDist = to.x - from.x,
		yDist = to.y - from.y;

	return Math.atan(yDist / xDist);
};

var calculatePositionCSS = function (position) {
	return {
		top: position.y - 50,
		left: position.x - 50
	};
};

var calculateOffscreenLeftPosition = function (country) {
	return {
		x: 0,
		y: country.y
	};
};

var calculateOffscreenRightPosition = function (country) {
	return {
		x: 1500,
		y: country.y
	};
};

var createNode = function (name, position) {
	var jqueryDiv = $('<div>')
		.addClass('node')
		.css(calculatePositionCSS(position))
		.append($('<div>')
			.addClass('nodeLabel')
			.text(name));

	return jqueryDiv[0];
};

var highlightStyle = function (color) {
	return '0px 0px 20px 10px ' + color;
};

var connectionDiv = function (origin, length, angle) {
	return $('<div>')
			.addClass('connection')
			.css({
				width: length,
				top: origin.y,
				left: origin.x,
				WebkitTransform: "rotate(" + angle + "rad)"
			});
};
