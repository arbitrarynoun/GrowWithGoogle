/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var timer = 60 ;

while ( timer >= 0 ) {
    (timer >= 1) && !(timer === 50) && !(timer === 31) && !(timer === 16) && !(timer === 10) && !(timer === 6) && !(timer === 0) ? console.log("T-" + timer + " seconds") :
    timer === 50 ? console.log("Orbiter transfers from ground to internal power") :
    timer === 31 ? console.log("Ground launch sequencer is go for auto sequence start") :
    timer === 16 ? console.log("Activate launch pad sound suppression system") :
    timer === 10 ? console.log("Activate main engine hydrogen burnoff system") :
    timer === 6 ? console.log("Main engine start") :
    timer === 0 ? console.log("Solid rocket booster ignition and liftoff!") :
    undefined ;

    timer = timer - 1;
}

/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
*/
