// Function submit
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Value dari input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.querySelector("select").value;
  const message = document.getElementById("floatingTextarea2").value.trim();
  console.log(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
  );

  // Success alert
  alert(
    `Thank you, ${name}!\n\nYour message has been received:\n\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
  );

  // Reset form
  document.querySelector("form").reset();
};

// DOM: Add event listener on form submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
});
