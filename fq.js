document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(answer => {
            if (answer !== question.nextElementSibling) {
                answer.style.display = 'none';
            }
        });

        // Toggle the clicked answer
        let answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});