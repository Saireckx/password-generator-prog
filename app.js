const symbolsArr = {
    numbers: '0123456789',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

const output = document.getElementById("output-field")

function getRandomPassword(length) {
    let password = ''
    let allCharters = ''


    const uppercaseCheckbox = document.getElementById("uppercase-checkbox")
    const numbersCheckbox = document.getElementById("numbers-checkbox")
    const symbolsCheckbox = document.getElementById("symbols-checkbox")


    allCharters += symbolsArr.lowercase


    if (uppercaseCheckbox.checked) {
        allCharters += symbolsArr.uppercase
    }


    if (numbersCheckbox.checked) {
        allCharters += symbolsArr.numbers
    }


    if (symbolsCheckbox.checked) {
        allCharters += symbolsArr.symbols
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharters.length)
        password += allCharters[randomIndex]
    }

    output.innerHTML = password;
    return password
}
const rangeInput = document.getElementById("range-input");
const rangeInputTitle = document.querySelector(".lenght-subtitle");


function updateLength() {
    const currentValue = rangeInput.value;
    rangeInputTitle.innerHTML = "Длинна: " + currentValue;
}


rangeInput.addEventListener('input', updateLength);


updateLength();


output.innerHTML = getRandomPassword(parseInt(rangeInput.value));
