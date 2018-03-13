// Grabbing things from the DOM
var submitButton = $("#submit");
var pixelCanvas = $("#pixelCanvas");

// Select color input


// Select size input

// this thing grabs the values of the inputs and
// (hopefully) iterates rows with cells based equal 
// to the values entered
function makeGrid(height, width) {
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	var row = document.createElement("tr");
	var column = document.createElement("td");

	pixelCanvas.append( function () {
		for (i = 0; i < height; i++) {
			document.createElement("td");
			for (j = 0; j < width; j++) {
				document.createElement("tr");
			}
		}
	});
}

// When size is submitted by the user, call makeGrid()

submitButton.click( function () {
	alert( makeGrid() );	
});



// Old Stuff I Ditched

/* 
/  submitButton.click( function() {
/  	alert( $('#inputHeight').val() );
/  	pixelCanvas.append(
/  		"<tr><td><p>hi</p></td></tr>"
/  	); 
/  });
*/