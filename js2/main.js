// Create an array of items
var items = ["Apple", "Banana", "Mango", "Orange"];

// Variable to store the output
var text = "";

// Loop through the array
for (var i = 0; i < items.length; i++) {
  text = text + items[i] + "<br>";
}

// Display items in HTML
document.getElementById("itemList").innerHTML = text;
