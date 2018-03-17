// Grabbing things from the DOM and Universal Stuff
var submitButton = $("#submit");
var grid = $("#pixelCanvas");
var colorPicker = $("#colorPicker");

//SECTION Set the Color



var paintColor = colorPicker.val(); // this works

//SECTION When size is submitted by the user, call makeGrid()
function makeGrid() {
	grid.children().remove();
	var	rows = $('#inputHeight').val();  // When these weren't in the function their
	var	cols = $('#inputWidth').val();   // new values weren't being called
	for (var i = 0; i < rows; i++) {
		var tr = $("<tr></tr>");
		grid.append(tr);
		console.log('line 20');
		for (var j = 0; j < cols; j++) {
			var td = $("<td></td>");
			tr.append(td);
			// console.log("line 24");
		}
	}
}


$("#sizePicker").submit(function(event) {
  event.preventDefault();
  makeGrid();
});