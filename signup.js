document.getElementById("signupform").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userPswd = document.getElementById("userPswd");

  // Get error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const pswdError = document.getElementById("pswdError");

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  pswdError.textContent = "";

  let isValid = true;

  // Validate username
  if (userName.value.trim() === "") {
      nameError.textContent = "Username is required.";
      isValid = false;
  } else if (userName.value.length < 3) {
      nameError.textContent = "Username must be at least 3 characters long.";
      isValid = false;
  }

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (userEmail.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
  } else if (!emailPattern.test(userEmail.value)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
  }

  // Validate password
  if (userPswd.value.trim() === "") {
      pswdError.textContent = "Password is required.";
      isValid = false;
  } else if (userPswd.value.length < 6) {
      pswdError.textContent = "Password must be at least 6 characters long.";
      isValid = false;
  }

  // Submit the form if all fields are valid
  if (isValid) {
      alert("Form submitted successfully!");
      this.submit(); // You can also handle the form data submission here
      window.location.href="../login/login.html"
  }
});