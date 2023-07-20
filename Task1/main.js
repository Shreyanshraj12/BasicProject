document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Handle form submission here, e.g., send the data to a server using fetch()
        // Display a success message or reset the form after submission.
    });
});
