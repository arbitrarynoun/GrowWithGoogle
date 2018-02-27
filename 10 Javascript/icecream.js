/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

var flavorTest
var vesselTest
var toppingTest

// Add your code here
if ( flavor === "vanilla" || flavor === "chocolate" || flavor === "strawberry" ) {
    flavorTest = true;
} else {
    flavorTest = false;
}

if ( vessel === "cone" || vessel === "bowl" ) {
    vesselTest = true;
} else {
    vesselTest = false;
}

if ( toppings === "sprinkles" || toppings === "peanuts" ) {
    flavorTest = true;
} else {
    flavorTest = false;
}


console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + ".");
