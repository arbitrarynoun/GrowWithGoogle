/*
 * Programming Quiz: Facebook Friends (7-5)
 
 * Directions:
 * Create an object called facebookProfile. The object should have 3 properties:
 * 
 * your name
 * the number of friends you have, and
 * an array of messages you've posted (as strings)
 * The object should also have 4 methods:
 * 
 * postMessage(message) - adds a new message string to the array
 * deleteMessage(index) - removes the message corresponding to the index provided
 * addFriend() - increases the friend count by 1
 * removeFriend() - decreases the friend count by 1
 */

// your code goes here
var facebookProfile = {
	name: "Sam",
	friends: 25,
	messages: ["Sup?", "Hey buddy.", "Hey.", "Hi.", "What's going on?"],
	postMessage: function youSay(chat) {
		facebookProfile.messages.push(chat);
	},
	deleteMessage: function unSay(x) {
		facebookProfile.messages.splice(x,1);
	},
	addFriend: function () {
		facebookProfile.friends += 1;
		return facebookProfile.friends;
	},
	removeFriend: function () {
		facebookProfile.friends -= 1;
		return facebookProfile.friends;
	}
}

// passed in 3 attempts.
// remember to define your variables within the context of the object; calling "friends" in the functions wasn't good enough. You had to call facebookProfile.friends.