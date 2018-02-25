// Store the data of inputs
    // var billAmount = document.getElementById("billAmount").value;
    // var serviceQuality = document.getElementById("serviceQuality").value;
    // var numPeople = document.getElementById("totalPeople").value;
// Calculate tip function
var total = 0;
function calculateTip() {
    
    // Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    // Quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter both the bill amount and the level of service quality to continue!");
        return; // this will prevent the function from continuing
    }
    
    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
        
    } else {
        
        document.getElementById("each").style.display = "block";
        
    }
    
    // Do some math!
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    

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
    if(billAmount <1 || serviceQuality == 0) {
        window.alert("Please enter both the bill amount and the level of service quality to move forward!");
        return; // this will prevent the function from continuing
    }
    
    if(numPeople <=1) {
    window.alert("Please enter the number of guests or the total bill is on you");
    return; // this will prevent the function from continuing
    }
    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
        
    } else {
        
        document.getElementById("each").style.display = "block";
        
    }
    
    // Do some math!
    console.log("about to do the math");
    var mealshare = (billAmount /numPeople);
    console.log("bill/people " + mealshare);
    var tipShare = (billAmount * serviceQuality)/numPeople;
    console.log("bill x serv /people " + tipShare);

    mealshare += tipShare;
    mealshare = Math.round(mealshare * 100) / 100;
    console.log(mealshare);

    mealshare = mealshare.toFixed(2);
    console.log(mealshare);


    // Display the split!
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("splitBill").style.display = "block";
    document.getElementById("split").innerHTML = mealshare;
    // document.getElementById("split").innerHTML = "hey ho";

        console.log("math is done, display");

}
// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Hide the split amount on load
document.getElementById("splitBill").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };

// Clicking the button calls our custom function
document.getElementById("calcSplit").onclick = function() { calcSplitBill(); };


    // calculate total bill plus tip divided by num people








