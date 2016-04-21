var source_filename = 'stars_empty.svg';
var source_path = 'source_files/';
var source_file = source_path + source_filename;
var file;

getTextWithAJAX(source_file, function(result){

	var xmlDoc = parseXMLString(result);

	var XMLDocResult = transform(xmlDoc);

	var new_string = serialize(XMLDocResult);
	new_string = vkbeautify.xml(new_string, "\t");

	var blob = new Blob([new_string], {type: 'image/svg+xml'});
	file = window.URL.createObjectURL(blob);

	document.body.style.background = "url(" + file + "), black";

});
