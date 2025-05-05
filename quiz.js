function submitQuiz() {
    const resultDiv = document.getElementById('result');
    let score = 0;
    let results = [];

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'b') score += 1;
    results.push({
        question: "1. Correct Answer: To analyze and optimize web performance.",
        selected: q1 ? q1.nextSibling.textContent.trim() : "No answer",
        correct: "To analyze and optimize web performance"
    });

    // Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'c') score += 1;
    results.push({
        question: "2. Correct Answer: Font Size.",
        selected: q2 ? q2.nextSibling.textContent.trim() : "No answer",
        correct: "Font Size"
    });

    // Question 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'b') score += 1;
    results.push({
        question: "3. Correct Answer: Users are leaving quickly.",
        selected: q3 ? q3.nextSibling.textContent.trim() : "No answer",
        correct: "Users are leaving quickly"
    });

    // Question 4 (fill in the blank)
    const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
    if (q4 === 'session') score += 1;
    results.push({
        question: "4. Correct Answer: session.",
        selected: q4 || "No answer",
        correct: "session"
    });

    // Question 5 (multiple correct)
    const q5 = document.querySelectorAll('input[name="q5"]:checked');
    const selected = Array.from(q5).map(q => q.value);
    const correctAnswers = ['a', 'b', 'd'];
    const isCorrect = correctAnswers.every(val => selected.includes(val)) && selected.length === correctAnswers.length;
    if (isCorrect) score += 1;
    results.push({
        question: "5. Correct Answers: Google Analytics, Adobe Analytics, Matomo.",
        selected: selected.length ? selected.join(', ') : "No answer",
        correct: "Google Analytics, Adobe Analytics, Matomo"
    });

    // Score summary
    const passMessage = score >= 3
        ? `<p style="color: green;"><strong>You passed the quiz!</strong></p>`
        : `<p style="color: red;"><strong>You did not pass the quiz.</strong></p>`;

    // Build feedback HTML
    let feedback = results.map((r, i) => {
        return `<p>${r.question} Your answer: ${r.selected}</p>`;
    }).join('');

    resultDiv.innerHTML = `<h3>Your Score: ${score}/5</h3>${passMessage}${feedback}<button onclick="restartQuiz()">Restart Quiz</button>`;
}

function restartQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('result').innerHTML = '';
}
