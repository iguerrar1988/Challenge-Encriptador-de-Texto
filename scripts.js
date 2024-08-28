document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    if (isValidInput(inputText)) {
        hideError();
        const encryptedText = encryptText(inputText);
        showOutput(encryptedText);
        document.getElementById("input-text").value = ""; // Limpia el campo
    } else {
        showError("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    if (isValidInput(inputText)) {
        hideError();
        const decryptedText = decryptText(inputText);
        showOutput(decryptedText);
        document.getElementById("input-text").value = ""; // Limpia el campo
    } else {
        showError("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

document.getElementById("copy-btn").addEventListener("click", function() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function showOutput(text) {
    document.getElementById("placeholder-img").style.display = "none";
    const outputText = document.getElementById("output-text");
    outputText.value = text;
    outputText.classList.add("show");
    document.getElementById("copy-btn").classList.add("show");
}

function isValidInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showError(message) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function hideError() {
    const errorElement = document.getElementById("error-message");
    errorElement.style.display = "none";
}
