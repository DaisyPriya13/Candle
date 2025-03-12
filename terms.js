document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        
        // Hide all other answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) ans.style.display = 'none';
        });

        // Toggle the clicked answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
