function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message");

  if (name == "" || email == "") {
    message.innerHTML = "Please fill in all fields.";
    message.style.color = "red";
    return false;
  } else {
    message.innerHTML = "Form submitted successfully!";
    message.style.color = "green";
    return false;
  }
}
