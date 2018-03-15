// ***** //
// Grabbing things from the DOM
var submitButton = $("submit");
var pixelCanvas = $("pixelCanvas");


// ***** //
// Select color input


// ***** //
// Select size input
submitButton.click( function() {
	var	height = $('#inputHeight').val();
	var	width = $('#inputWidth').val();
});



// ***** //
// Borrowed from https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
function addRow(pixelCanvas) {
	var tableRef = document.getElementById('pixelCanvas');
	var newRow = tableRef.insertRow(0);
	var newCell = newRow.insertCell(0);
}

function makeGrid() {
	for (var i = 0; i < height; i++) {
		pixelCanvas.append(addRow);
	}
}

// ***** //
// Click to do a thing
submitButton.click(addRow(pixelCanvas));