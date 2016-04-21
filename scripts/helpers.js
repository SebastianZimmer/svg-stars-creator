function getWithAJAX(url, success_callback){

	var http = new XMLHttpRequest();
	
	http.open("GET", url, true);

	http.onreadystatechange = function() { //Call a function when the state changes.

		if (http.readyState == 4 && http.status == 200) {
			
			console.log("AJAX successful!");
			
			success_callback(http);
			
		}
	};
	
	console.log("Sending ajax request to: " + url);
	
	return http.send();
	
}


function getTextWithAJAX(url, success_callback){

	return getWithAJAX(url, function(http){
		var response = http.responseText;
		success_callback(response);
	});
	
}


var parseXMLString = function(string){

	var parser = new DOMParser();
	var doc = parser.parseFromString(string, "text/xml");

	return doc;

}


var serialize = function(xmlDoc){

    var serializer = new XMLSerializer();
    var xml_string = serializer.serializeToString(xmlDoc);

    return xml_string;

}


var getRandomColor = function(){
	var fillColors = ["#ffcc8a", "#ffe7c7", "#fff1dd", "#ffe7c4", "#aabeff", "#ffddaf", "white"];

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return fillColors[getRandomInt(0, fillColors.length - 1)];

}


var getRandomArbitrary = function(min, max) {
	return Math.random() * (max - min) + min;
}