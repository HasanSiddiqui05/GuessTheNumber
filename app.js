const num = Math.ceil(Math.random() * 10);
let tries = 3;

function NumberGuess() {
    const guessInput = document.getElementById("num");
    const response = document.getElementById("response");
    const livesDisplay = document.getElementById("lives");
    const guess = parseInt(guessInput.value, 10);

    response.innerHTML = "";

    if (tries > 0) {
        if (guess >= 1 && guess <= 10) {
            if (guess === num) {
                response.innerHTML = `<p style="color: green;">🎉 Congratulations! You guessed the number!</p>`;
                guessInput.disabled = true;
                document.getElementById("guess").disabled = true;
                livesDisplay.innerHTML = "❤️".repeat(tries);
            } else {
                tries--;
                response.innerHTML = `<p>❌ Incorrect guess. ${tries} attempts left.</p>`;
                livesDisplay.innerHTML = "❤️".repeat(tries);
            }
        } else {
            response.innerHTML = `<p>❌ Invalid input. Please enter a number between 1 and 10.</p>`;
        }
    }

    if (tries === 0 && guess !== num) {
        response.innerHTML += `<p>💔 Game over! The correct number was ${num}.</p>`;
        guessInput.disabled = true;
        document.getElementById("guess").disabled = true;
        livesDisplay.innerHTML = "";
    }
}
