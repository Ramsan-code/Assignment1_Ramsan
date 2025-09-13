document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    clearErrors();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === "") {
      showError(emailField, "Email is required");
      isValid = false;
    } else if (!emailRegex.test(emailField.value.trim())) {
      showError(emailField, "Please enter a valid email address");
      isValid = false;
    }
    if (passwordField.value.trim() === "") {
      showError(passwordField, "Password is required");
      isValid = false;
    } else if (passwordField.value.length < 6) {
      showError(passwordField, "Password must be at least 6 characters long");
      isValid = false;
    }
    if (isValid) {
      alert("Login successful!");
    }
  });

  function showError(field, message) {
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.style.color = "#dc3545";
    errorElement.style.fontSize = "12px";
    errorElement.style.marginTop = "5px";
    errorElement.innerText = message;
    field.style.borderColor = "#dc3545";
    field.parentNode.appendChild(errorElement);
  }
  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());
    const fields = document.querySelectorAll(".form-control");
    fields.forEach((field) => {
      field.style.borderColor = "#e0e0e0";
    });
  }
  const formFields = document.querySelectorAll(".form-control");
  formFields.forEach((field) => {
    field.addEventListener("input", function () {
      const errorMessage = this.parentNode.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
        this.style.borderColor = "#e0e0e0";
      }
    });
    field.addEventListener("focus", function () {
      this.style.borderColor = "#ddd";
    });
  });
});
