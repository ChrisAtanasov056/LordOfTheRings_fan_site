document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const answers = {
        q1: 'c',
        q2: 'b',
        q3: 'c',
        q4: 'c',
        q5: 'b'
    };

    let score = 0;

    Object.keys(answers).forEach(q => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    });

    const resultBox = document.getElementById('quiz-result');
    resultBox.classList.remove('hidden');
    resultBox.textContent = `Твоят резултат: ${score} от 5 верни отговора.`;
});