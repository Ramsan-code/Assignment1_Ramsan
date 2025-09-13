document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    clearErrors();

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (nameField.value.trim() === "") {
      showError(nameField, "Full name is required");
      isValid = false;
    } else if (!nameRegex.test(nameField.value.trim())) {
      showError(
        nameField,
        "Name must be at least 2 characters and contain only letters"
      );
      isValid = false;
    } else if (nameField.value.trim().length < 2) {
      showError(nameField, "Name must be at least 2 characters long");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === "") {
      showError(emailField, "Email address is required");
      isValid = false;
    } else if (!emailRegex.test(emailField.value.trim())) {
      showError(emailField, "Please enter a valid email address");
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/;
    if (passwordField.value.trim() === "") {
      showError(passwordField, "Password is required");
      isValid = false;
    } else if (passwordField.value.length < 6) {
      showError(passwordField, "Password must be at least 6 characters long");
      isValid = false;
    } else if (!passwordRegex.test(passwordField.value)) {
      showError(
        passwordField,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
      isValid = false;
    }

    if (isValid) {
      alert("Signup successful! Welcome to ShowTrack!");

      signupForm.reset();
    }
  });

  function showError(field, message) {
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.style.color = "#e74c3c";
    errorElement.style.fontSize = "12px";
    errorElement.style.marginTop = "5px";
    errorElement.style.marginBottom = "10px";
    errorElement.style.fontWeight = "500";
    errorElement.innerText = message;

    field.style.borderColor = "#e74c3c";
    field.style.backgroundColor = "#ffeaea";

    field.parentNode.appendChild(errorElement);
  }

  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());

    const fields = document.querySelectorAll(".form-control");
    fields.forEach((field) => {
      field.style.borderColor = "#ddd";
      field.style.backgroundColor = "#fafafa";
    });
  }

  const formFields = document.querySelectorAll(".form-control");
  formFields.forEach((field) => {
    field.addEventListener("input", function () {
      const errorMessage = this.parentNode.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
        this.style.borderColor = "#ddd";
        this.style.backgroundColor = "#fafafa";
      }

      validateField(this);
    });

    field.addEventListener("focus", function () {
      this.style.borderColor = "#bbb";
      this.style.backgroundColor = "white";
    });

    field.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.style.backgroundColor = "#fafafa";
      }
    });
  });

  function validateField(field) {
    const value = field.value.trim();

    if (field.id === "name" && value) {
      const nameRegex = /^[A-Za-z\s]{2,}$/;
      if (!nameRegex.test(value)) {
        field.style.borderColor = "#f39c12";
      } else {
        field.style.borderColor = "#27ae60";
      }
    }

    if (field.id === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        field.style.borderColor = "#f39c12";
      } else {
        field.style.borderColor = "#27ae60";
      }
    }

    if (field.id === "password" && value) {
      if (value.length < 6) {
        field.style.borderColor = "#f39c12";
      } else {
        field.style.borderColor = "#27ae60";
      }
    }
  }

  const passwordField = document.getElementById("password");
  passwordField.addEventListener("input", function () {
    const password = this.value;
    const strength = getPasswordStrength(password);
  });

  function getPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    return strength;
  }
});
