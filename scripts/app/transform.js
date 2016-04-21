var transform = function(xmlDoc){

	var resX = 640;
	var resY = 1200;

	var smallStars = 600;
	var mediumStars = 500;
	var bigStars = 50;

	var svg = xmlDoc.children[0];
	svg.setAttribute("width", resX/2);
	svg.setAttribute("height", resY/2);
	svg.setAttribute("viewBox", "0 0 " + resX + " " + resY);

	var g = svg.children[0];

	for (var i = 0; i < smallStars; i++){

		var circle = xmlDoc.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("fill", getRandomColor());
		circle.setAttribute("r", getRandomArbitrary(0.45, 0.85));
		circle.setAttribute("cx", getRandomArbitrary(0, resX));
		circle.setAttribute("cy", getRandomArbitrary(0, resY));
		g.appendChild(circle);

	}


	for (var i = 0; i < mediumStars; i++){

		var circle = xmlDoc.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("fill", getRandomColor());
		circle.setAttribute("r", getRandomArbitrary(0.85, 1.15));
		circle.setAttribute("cx", getRandomArbitrary(0, resX));
		circle.setAttribute("cy", getRandomArbitrary(0, resY));
		g.appendChild(circle);

	}


	for (var i = 0; i < bigStars; i++){

		var circle = xmlDoc.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("fill", getRandomColor());
		circle.setAttribute("r", getRandomArbitrary(1.55, 3));
		circle.setAttribute("cx", getRandomArbitrary(0, resX));
		circle.setAttribute("cy", getRandomArbitrary(0, resY));
		g.appendChild(circle);

	}

	//for debugging
	window.xmlDoc = xmlDoc;

	return xmlDoc;

}
