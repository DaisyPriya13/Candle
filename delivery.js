document.addEventListener("DOMContentLoaded", function () {
    const contactUsLink = document.getElementById("contact-us-link");
    const socialMediaIcons = document.getElementById("social-media-icons");

    contactUsLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (socialMediaIcons.style.display === "none") {
            socialMediaIcons.style.display = "block";
        } else {
            socialMediaIcons.style.display = "none";
        }
    });

    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === "block";

            // Hide all answers
            document.querySelectorAll(".faq-answer").forEach(answer => {
                answer.style.display = "none";
            });

            // Show the clicked answer if it was not already visible
            if (!isVisible) {
                answer.style.display = "block";
            }
        });
    });
});