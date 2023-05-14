// Define a variable to store the student results
var studentResults = [];

// Get references to the HTML elements we need to interact with
var nameInput = document.getElementById("name");
var markInput = document.getElementById("mark");
var addButton = document.getElementById("Add");
var clearButton = document.getElementById("Clear");
var displayButton = document.getElementById("Display");
var averageButton = document.getElementById("Average");
var resultOutput = document.getElementById("result");

// Add an event listener to the Add button
addButton.addEventListener("click", function() {
  // Get the name and mark from the input fields
  var name = nameInput.value;
  var mark = Number(markInput.value);

  // Input validation: check that both fields have values
  if (name === "" || isNaN(mark) || mark == "") {
    resultOutput.innerHTML = "Please enter a name and a valid mark";
    return;
  }

  // Check for duplicates
  for (var i = 0; i < studentResults.length; i++) {
    if (studentResults[i].name === name) {
      resultOutput.innerHTML = "That student is already in the list";
      return;
    }
  }

  // Add the student result to the list
  studentResults.push({ name: name, mark: mark });

  // Reset the input fields
  nameInput.value = "";
  markInput.value = "";

  // Display a success message
  resultOutput.innerHTML = "Student result added successfully";
});

// Add an event listener to the Display button
displayButton.addEventListener("click", function() {
  // Check if there are any results
  if (studentResults.length === 0) {
    resultOutput.innerHTML = "No results to display";
    return;
  }

  // Build a string containing the results
  var resultString = "";
  for (var i = 0; i < studentResults.length; i++) {
    resultString += studentResults[i].name + " - " + studentResults[i].mark + "<br>";
  }

  // Display the results
  resultOutput.innerHTML = resultString;
});

// Add an event listener to the Clear button
clearButton.addEventListener("click", function() {
  // Clear the results array
  studentResults = [];

  // Display a success message
  resultOutput.innerHTML = "All results cleared";
});

// Add an event listener to the Average button
averageButton.addEventListener("click", function() {
  // Check if there are any results
  if (studentResults.length === 0) {
    resultOutput.innerHTML = "No results to calculate average";
    return;
  }

  // Calculate the average mark
  var totalMarks = 0;
  for (var i = 0; i < studentResults.length; i++) {
    totalMarks += studentResults[i].mark;
  }
  var averageMark = totalMarks / studentResults.length;

  // Display the average mark
  resultOutput.innerHTML = "Average mark: " + averageMark.toFixed(2);
});
