/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
function laugh(num) {
     for (x = 0 ; x <= num ; x++) {
         var message = "ha";
         return message.repeat(num) + "!";
     }
 }
 
console.log(laugh(5));


/*  The following was sent by Hutch.

here’s a few things:
[10:34 AM]
1. always var your variables. the way you’re using x here, it hasn’t been declared first. which is a problem for two reasons.
[10:38 AM]
The first is sort of a looser best practices/stylistic reason: you should declare your vars used in the function at the top of the function. This improves readability, by letting someone else (or you, 6 months later after you’ve completely forgotten ever writing this fn) quickly glance at the fn definition and the declared vars underneath to get a quick sense of what you’ll be working with in the code below. It also has the benefit of giving you a snapshot of the “state” of the fn at init. You don’t have to read down into the for loop itself to see what the message is. And if you want to change the message, you know it’s going to be set at the top of the fn (more useful with a longer fn, but you get the idea). It’s sort of a SSoT (Single Source of Truth) for how your fn starts, and it should be all laid out at the top.

This is also particularly relevant here, because you are redeclaring the message var with every loop, which isn’t hurting anything, but it’s an extra command running every time, and thus, less efficient. If you moved the var up to the top of the fn, above the for loop, you’d declare the message once, and then just… use it when you use it. If this were es6, you’d probably even make it a const, cause there’s no reason this variable should change during the runtime of this fn. (edited)
[10:39 AM]
Granted, an iterator like your x here (convention alert: typically the for loop iterator variable is i, j, and k, not x) is rarely if ever declared at the top of a fn, because it’s just an iterator, but it DOES STILL NEED TO BE VAR’d!
[10:41 AM]
The way you’re declaring it now, you’re setting the GLOBAL X to 0. The X used by the entirety of the browser’s javascript state, which includes plugins or whatever. By putting a var in front of that x, you declare that x to be “in scope” to the fn it’s in. Once you’re out of the fn, that x ceases to exist. You should, in 99% of cases, never use plain unvar’d variables that touch the global scope, because you risk collision with EVERYTHING else going on in the browser
[10:43 AM]
2. no spaces between vars and semicolons.
[10:46 AM]
and that’s it. I dig the return line, nice and compact (even though I confess to personally always defaulting to setting my return value to a variable, then returning the variable, this is less in line with more modern functional programming, and I’m trying to change. just don’t mimic me if you see me do that in the future)
[10:46 AM]
so, the rewritten code would look like:
*/

    /* repeats "ha" a given number of times, followed by "!"
     * params {integer} num - number of ha's to output
     * return {string} "ha" spit out num number of times + "!"
     */
     
     function laugh(num) {
         var message = "ha";
         for (var i = 0; i <= num; i++) {
             return message.repeat(num) + "!";
         }
     }
     
     console.log(laugh(5));



*/