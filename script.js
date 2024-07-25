           const generateButton = document.getElementById('generateButton');
    const select2 = document.getElementById('select2');
    const secretNumberElement = document.getElementById('secretNumber');
    const guessButton = document.getElementById('guessButton');
    const userInput = document.getElementById('userInput');
    const resultsList = document.getElementById('resultsList');
    let secretNumber = '';

    function generateSecretNumber(numDigits) {
        let digits = '';
        for (let i = 0; i < numDigits; i++) {
            digits += Math.floor(Math.random() * 10).toString();
        }
        return digits;
    }

    generateButton.addEventListener('click', () => {
        alert("da")
        const numDigits = parseInt(select2.value);
        secretNumber = generateSecretNumber(numDigits);
        secretNumberElement.textContent = 'Число загадано! Пробуйте угадать!';
        userInput.maxLength = numDigits;
        alert(secretNumber);
    });

    guessButton.addEventListener('click', () => {
        const userGuess = userInput.value;
        if (userGuess.length === secretNumber.length) {
            let bulls = 0;
            let cows = 0;

            for (let i = 0; i < secretNumber.length; i++) {
                if (userGuess[i] === secretNumber[i]) {
                    bulls++;
                }
            }

            for (let i = 0; i < secretNumber.length; i++) {
                for (let j = 0; j < secretNumber.length; j++) {
                    if (i !== j && userGuess[i] === secretNumber[j]) {
                        cows++;
                        break;
                    }
                }
            }

            resultsList.innerHTML += `<li>${userGuess}: ${bulls} быков, ${cows} коров</li>`;
            userInput.value = '';
            if (userGuess === secretNumber) {
                alert("Победа!");
            }
        } else {
            alert(`Введите ${secretNumber.length} значное число.`);
        }
    });
