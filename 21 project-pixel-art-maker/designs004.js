// Grabbing things from the DOM and Universal Stuff
var submitButton = $("#submit");
var grid = $("#pixelCanvas");
var colorPicker = $("#colorPicker");

//SECTION Set the Color
$("#colorPicker").change(function(){
  $(this).attr('value', $(this).val());
});


//SECTION When size is submitted by the user, call makeGrid()
function makeGrid() {
	grid.children().remove();
	var	rows = $('#inputHeight').val();  // When these weren't in the function their
	var	cols = $('#inputWidth').val();   // new values weren't being called
	for (var i = 0; i < rows; i++) {
		var tr = $("<tr></tr>");
		grid.append(tr);
		for (var j = 0; j < cols; j++) {
			var td = $("<td></td>");
			tr.append(td);
		}
	}
	console.log("line 37");
}

$("#sizePicker").submit(function(event) {
  event.preventDefault();
  makeGrid();
  console.log("line 44");
});


// SECTION Paint the thing already!
function draw() {
  let isMouseDown = false;

  grid.on('mousedown mouseover mouseup', 'td', function(event) {
    if (event.type === 'mousedown') {
      $(this).css('background-color', $("#colorPicker").val());
      isMouseDown = true;
    } else if (event.type === 'mouseover') {
      if (isMouseDown) {
        $(this).css('background-color', $("#colorPicker").val());
      };
    } else if (event.type === 'mouseup') {
      isMouseDown = false;
    }
  });
};

//Continuously calls draw()
setInterval(draw, 1000);

