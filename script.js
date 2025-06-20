const submitBtn = document.getElementById("submit-btn");
const email = document.getElementById("email");
const labelContainer = document.querySelector(".label");
const thankYouCard = document.getElementById("thank-you-card");
const newsletterCard = document.getElementById("newsletter-card");
const subscriberEmail = document.getElementById("subscriber-email");
const dismissBtn = document.getElementById("dismiss-btn");

submitBtn.addEventListener("click", (e) => {
     e.preventDefault();
     handleError();
});

// Handle Error and Submission
function handleError() {
     // Remove previous error if it exists
     const existingError = labelContainer.querySelector(".error-msg");
     if (existingError) existingError.remove();

     // Remove previous error state
     email.classList.remove("error-state");

     // Basic email format validation
     const emailValue = email.value.trim();
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailValue || !emailRegex.test(emailValue)) {
          const errMessage = document.createElement("p");
          errMessage.className = "error-msg";
          errMessage.textContent = "Valid email required!";
          labelContainer.append(errMessage);
          email.classList.add("error-state");
          return;
     }

     // Proceed if valid
     handleSubmission(emailValue);
}

// Handle Submission
function handleSubmission(emailValue) {
     newsletterCard.classList.add("hidden");
     thankYouCard.classList.remove("hidden");
     subscriberEmail.textContent = emailValue;
}

// Dismiss thank you message
dismissBtn.addEventListener("click", () => {
     window.location.reload();
});
