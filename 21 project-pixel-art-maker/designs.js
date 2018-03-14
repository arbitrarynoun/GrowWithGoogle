// Grabbing things from the DOM
var submitButton = $("#submit");
var pixelCanvas = $("#pixelCanvas");

// Select color input


// Select size input
var	height = $('#inputHeight').val();
var	width = $('#inputWidth').val();


//SECTION When size is submitted by the user, call makeGrid()

// I expect this to find the table that was already created in the html
var table = document.getElementById(pixelCanvas);

// Declaring common language; not sure I ever use it
var tr = document.createElement("tr");
var td = document.createElement("td");

// Make a number of tr rows equal to the input value "height" from jQuery
function newRow(height) {
	for (var i = 0; i < height; i++) {
		document.createElement("tr");
		}
}

// Make a number of td calls equal to the input value "height" from jQuery
function makeCell(width) {
	for (var j = 0; j < width; j++) {
		document.createElement("td");
	}
}

// make a grid by appending a number of rows with a number of cells per row established by the two earlier methods
function makeGrid() {
	table.append('newRow.append(makeCell)');
}

// trigger the makeGrid function when the submit button is clicked, which should be grabbing the values
submitButton.onClick(table.append(MakeGrid));








// Old Stuff I Ditched, Newest to Oldest


 /* 
 / var table = document.getElementById(pixelCanvas);
 / 
 / var tr = document.createElement("tr");
 / var td = document.createElement("td");
 / 
 / function makeGrid() {
 / 	for (var i = 0; i < height; i++) {
 / 		document.createElement("tr");
 / 		for (var j = 0; j < width; j++)
 / 			document.createElement("td");
 / 	}
 / }
 / 
 / submitButton.onClick(table.append(MakeGrid));  // ERROR: 
Uncaught TypeError: Cannot read property 'append' of null
*/



 /*
 / // this thing grabs the values of the inputs and
 / // (hopefully) iterates rows with cells based equal 
 / // to the values entered
 / function makeGrid(height, width) {
 /	
 /	pixelCanvas.append( function () {
 /		for (i = 0; i < height; i++) {
 /			document.createElement("td");
 /			for (j = 0; j < width; j++) {
 /				document.createElement("tr");
 /			}
 /		}
 /	});
 / }
*/


 /* 
 /  submitButton.click( function() {
 /  	alert( $('#inputHeight').val() );
 /  	pixelCanvas.append(
 /  		"<tr><td><p>hi</p></td></tr>"
 /  	); 
 /  });
*/