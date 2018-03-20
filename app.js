var successSound = new Audio("sounds/cash-register.wav");
var beep = new Audio("sounds/coin-01.wav");

// Calculate tip function

function calculateTip() {

    // Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    // Quick validation
    if (billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter both the bill amount and the level of service quality to continue!");
        return; // this will prevent the function from continuing
    }

    // Check to see if this input is empty or less than or equal to 1
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";

    } else {

        document.getElementById("each").style.display = "block";

    }

    // calculate tip per person
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    beep.play()

    // Display the tip!
    document.getElementById("splitBill").style.display = "none";
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//-------
// Calculate split the bill function
function calcSplitBill() {

    // Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    // Quick validation
    if (billAmount < 1 || serviceQuality == 0) {
        window.alert("Please enter both the bill amount and the level of service quality to move forward!");
        return; // this will prevent the function from continuing
    }

    if (numPeople === "" || numPeople < 1) {
        numPeople = 1;
        window.alert("Please enter the number of guests or the total bill is on you");
        return; // this will prevent the function from continuing
    }

    // Check to see if this input is empty or less than or equal to 1, then do NOT display 'each'
    if (numPeople === 1) {
        window.alert("Looks like you are the only one footing the bill");
        document.getElementById("person_people").innerHTML = "person";
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("person_people").innerHTML = "people";
        document.getElementById("each").style.display = "block";

    }

    // Calculate mealshare and meal share incl tip
    var mealshare = (billAmount / numPeople);
    var tipShare = (billAmount * serviceQuality) / numPeople;

    mealshare += tipShare;
    mealshare = Math.round(mealshare * 100) / 100;

    mealshare = mealshare.toFixed(2);
    console.log(mealshare);
    successSound.play();

    // Display the split!
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("splitBill").style.display = "block";
    document.getElementById("split").innerHTML = mealshare;
}
// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Hide the split amount on load
document.getElementById("splitBill").style.display = "none";
document.getElementById("each").style.display = "none";

// on click calculate the tip
document.getElementById("calculate").onclick = function() { calculateTip(); };

// on click calculate total bill plus tip divided by num people
document.getElementById("calcSplit").onclick = function() { calcSplitBill(); };