/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!

var family1, family2, bruce, madison, hunter;

var family1 = $("#family1");   // all this VAR business is redundant; you already declared them.
var family2 = $("#family2");   // this was the right direction, but you're missing content.
var bruce = $("#bruce");       // you kept thinking "will these make divs?" well no,
var madison = $("#madison");   // because you didn't build them to.
var hunter = $("#hunter");

family1.insertAfter(family2);  // all this was actually right!
family2.append(bruce);
bruce.append(madison, hunter);


// CORRECT solution (which you cheated and watched the video for)

var family1, family2, bruce, madison, hunter;

family1 = $('#family1');
family2 = $('<div id="family2"><h1>Family 2</h1></div>');
bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
madison = $('<div id="madison"><h3>Madison</h3></div>');
hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);