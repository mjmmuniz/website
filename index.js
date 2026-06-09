// nav bar toggling
const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("navbarNavAltMarkup");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle.classList.contains("show")) {
      menuToggle.classList.remove("show");
    }
  });
});

// form submission
const form = document.getElementById("form");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert("Success! Your message has been sent.");
      form.reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});
