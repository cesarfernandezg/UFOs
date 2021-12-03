// align the code

// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

function printhHello() {
    console.log("Hello there");
}

// takes two numbers and adds them
function addition(a, b) {
    return a + b;
}

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// iterate through a list and then print each item within it individually
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 // var i = 0 iterable variable and set its value to zero
 // i < userList.lenght 
 // i++ increase the iterable by 1

 // create a for loop to iterate through an array
 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 }

 // loop through numbers without using an array
 for (var i = 0; i < 5; i++) {
     console.log("I am " + i);
 }


// introduction to dynamic tables
function buildTable(data) {
     tbody.html(""); // use an empty string when creating the table
                     // standar way to clear data
     
 

 // Add the forEach Function
 data.forEach((dataRow) => {
     let row = tbody.append("tr"); // use let because the variable is
                    // limited to this block of code
                    // <t> tags are used for each row in a table
     // add code to loop through each field in the dataRow argument              
     Object.values(dataRow).forEach((val) => {
     // Object.values reference one object from the array of UFO sightings
     // dataRow as the argument, we want the values to fo into dataRow
        let cell = row.append("td");
        cell.text(val);
     }
    );
 });
}

// with the last function do the following:
// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell


