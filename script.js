// Function to handle form submission
function handleSubmit(event) {
	event.preventDefault(); // Prevent default form submission

	// Retrieve form values
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	// Simple form validation (optional)
	if (!name || !email || !message) {
		alert("Please fill out all fields.");
		return;
	}

	// Show success message
	document.getElementById("form-message").classList.remove("hidden");

	// Clear form after submission
	document.getElementById("contact-form").reset();
}
