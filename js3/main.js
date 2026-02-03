// Function to calculate total price with tax
function calculateTotal(price, tax) {
  var total = price + (price * tax);
  return total;
}

// Function to display the result
function showTotal() {
  var price = document.getElementById("price").value;
  var tax = document.getElementById("tax").value;

  var totalPrice = calculateTotal(price, tax);

  document.getElementById("result").innerHTML =
    "Total Price: " + totalPrice;
}
