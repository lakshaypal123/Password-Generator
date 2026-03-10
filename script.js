function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]<>?";

    let charPool = "";
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool === "") {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");

    const copyBtn = document.getElementById("copy-btn");
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
}

function checkStrength() {
    const password = document.getElementById("password-strength-check").value;
    checkPasswordStrength(password);
}

function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const strengthText = document.getElementById("strength-text");
    const strengthBar = document.getElementById("strength-bar");

    let strengthTextContent = "";
    let strengthBarColor = "";
    let strengthBarWidth = "";

    switch (strength) {
        case 1:
            strengthTextContent = "Very Weak";
            strengthBarColor = "red";
            strengthBarWidth = "20%";
            break;
        case 2:
            strengthTextContent = "Weak";
            strengthBarColor = "orange";
            strengthBarWidth = "40%";
            break;
        case 3:
            strengthTextContent = "Moderate";
            strengthBarColor = "yellow";
            strengthBarWidth = "60%";
            break;
        case 4:
            strengthTextContent = "Strong";
            strengthBarColor = "lightgreen";
            strengthBarWidth = "80%";
            break;
        case 5:
            strengthTextContent = "Very Strong";
            strengthBarColor = "green";
            strengthBarWidth = "100%";
            break;
        default:
            strengthTextContent = "Very Weak";
            strengthBarColor = "red";
            strengthBarWidth = "20%";
            break;
    }

    strengthText.textContent = strengthTextContent;
    strengthBar.style.width = strengthBarWidth;
    strengthBar.style.backgroundColor = strengthBarColor;
}

document.getElementById("check-strength-btn").addEventListener("click", checkStrength);

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
}
