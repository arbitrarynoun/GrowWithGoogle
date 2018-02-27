/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */


/*
* Parameters:
* add a printAccountSummary() method that returns the following account message:
* 
* Welcome!
* Your balance is currently $1000 and your interest rate is 1%.
*/


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // beginning of created code
    printAccountSummary: function checkLedger() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent +"%.";
    }
    // end of created code
};

console.log(savingsAccount.printAccountSummary());

// passed in 1 attempt