/* --------------------------------
Utility functions
----------------------------------- */
function formatAsDollars(numIn){
    return "$"+numIn;
}

function roundToCurrency(numIn){
    return Math.round( parseInt(numIn*100) ) / 100;
}


/* --------------------------------
Inside index.js, create one variable for each of the following real-life examples and 
assign them values:
a. Item price
b. Amount of money in wallet
c. Number of friends
d. Age in years (as a whole number)
e. First name
f. Last name
g. Middle initial
----------------------------------- */

var Person = {
    numAge:25,
    numFriends:25,
    fName:"Fred",
    mInit:"F",
    lName:"Flintstone", 
    walletAmount: 50
};

var Item = {
    name:"Rock",
    price:2.16
}

// Create a string with the values specified in the assignemnt
var strAssignment = "- First name: " + Person.fName;
strAssignment += "\n- Middle initial: " + Person.mInit;
strAssignment += "\n- Last name: " + Person.lName;
strAssignment += "\n- Number of friends: " + Person.numFriends;
strAssignment += "\n- Age in years: " + Person.numAge;


/* --------------------------------
5. Create the following variables by performing operations (addition, subtraction, 
concatenation, etc…) on the variables created in the previous step:
----------------------------------- */
strAssignment += "\n\nCalculated values: ";

// a. New amount of money in wallet after buying the item
// -- Save initial amount in wallet for story.
var initAmount = Person.walletAmount;

// b. Number of friends you!ve made each year based on your age variable and your number of friends variable
var friendsPerYear = Person.numFriends / Person.numAge;
strAssignment += "\n- Number of friends you!ve made each year: " + friendsPerYear;

// c. Full name based on first name, middle initial, and last name
var fullName = Person.fName + " " + Person.mInit + " " + Person.lName
strAssignment += "\n- Full name: " + fullName;

strAssignment += "\n- Amount of money in wallet: " + formatAsDollars( roundToCurrency(Person.walletAmount) ) + " (inital value)";


// Define the order, do the math
var numItems = 7;
var orderCost = roundToCurrency(numItems * Item.price);

// format numeric dollar values to strings.
var strItemCost = formatAsDollars(Item.price);
var strOrderCost = formatAsDollars(orderCost);

strAssignment += "\n- Item Price: " + strItemCost;
strAssignment += "\n- Order Price: " + strOrderCost;


// -- Update wallet for Fred's payment to Mr. Slate
Person.walletAmount = Person.walletAmount - orderCost;
strAssignment += "\n- Amount of money in wallet: " + formatAsDollars(Person.walletAmount) + " (after purchase)";



/* --------------------------------
6. Use console.log() to print out the values of all the variables you!ve created. Provide some
detail as to what the value being printed is
----------------------------------- */
var strMsg = "\n";
strMsg += fullName + " buys some " + Item.name +"s\n";
strMsg += "   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \n";
strMsg += "One day, " + Person.fName + " " + Person.lName + " needed some " + Item.name.toLowerCase() + "s.  So he put " + formatAsDollars(initAmount) + " into his wallet, and drove to work to buy some.\n"
strMsg += "\n";
strMsg += Person.fName + " asked his boss, Mr. Slate, how much a " + Item.name.toLowerCase() + " would cost. \n";
strMsg += "\n";
strMsg += "\"" + Person.fName + ", each " + Item.name.toLowerCase() + " is " + strItemCost + ".  How many do you need?\"\n";
strMsg += "\n";
strMsg += "\"Gee, boss\", " + Person.fName + " said, \"I think " + numItems + " should do the job.\"\n";
strMsg += "\n";
strMsg += "\"Excellent, " + Person.fName + "\" said Mr. Slate. \"That will be " + strOrderCost + ".\", \nThen he called out to the yard to ask Barney to help load the " + Item.name.toLowerCase() +"s into " + Person.fName +"'s car.\n";
strMsg += "\n";
strMsg += "Barney asked, \"You broke now, " + Person.fName + "?\"\n";
strMsg += "\n";
strMsg += "\"No, Barney, ol' pal,\" " + Person.fName + " said.  \"I've still got " + formatAsDollars(Person.walletAmount) + " to take Wilma out to dinner. \"\n";
strMsg += "\n";
strMsg += "    ------ The End -----\n";
strMsg += "\n";
strMsg += "Assignment Variables: \n-----------------------\n" + strAssignment;

console.log(strMsg);

