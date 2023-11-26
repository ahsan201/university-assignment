document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("contactEmail");
  const subject = document.getElementById("subject");
  const message = document.getElementById("massage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  }

  function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  }

  function isValidEmail(emailValue) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
  }

  function validateForm() {
    // Reset all previous error/success styles
    const inputControls = document.querySelectorAll(".input-control");
    inputControls.forEach((inputControl) => {
      inputControl.classList.remove("error", "success");
      inputControl.querySelector(".error").innerText = "";
    });

    // Validate Name
    if (name.value.trim() === "") {
      setError(name, "Name is required");
    } else {
      setSuccess(name);
    }

    // Validate Email
    if (email.value.trim() === "") {
      setError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }

    // Validate Subject
    if (subject.value.trim() === "") {
      setError(subject, "Subject is required");
    } else {
      setSuccess(subject);
    }

    // Validate Message
    if (message.value.trim() === "") {
      setError(message, "Message is required");
    } else {
      setSuccess(message);
    }
  }
});
