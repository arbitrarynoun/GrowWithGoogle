/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
/*
$( "p" ).each( function () {
    var charCount = $( this ).length;   // this was my first idea
    return charCount;                   // but then it made me rethink what I was doing
});
*/

// This is also wrong!
/*
var charCount;

$( "p" ).each( function() {
    var charCount = $(this).length;
    return charCount;
});

$( "p" ).append(charCount);
*/

// Their solution, which you couldn't figure out or even remember to recreate.
function numberAdder () {			// create the function that does a thing
	var text, number;				// define variables to use in the function

	text = $(this).text();			// .text() Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

	number = text.length;			// .length The number of elements in the jQuery object.

	$(this).text(text + " " + number);	// notice this thing is all built BEFORE mentioning the DOM item <p>
}

$('p').each(numberAdder);  // for each paragraph, run the function numberAdder

