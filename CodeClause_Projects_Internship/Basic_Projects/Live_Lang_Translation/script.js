document.getElementById('translateButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const languageSelect = document.getElementById('languageSelect').value;
    const outputText = document.getElementById('outputText');

    if (inputText.trim() === '') {
        alert('Please enter text to translate.');
        return;
    }

    googleTranslate(inputText, languageSelect).then(translatedText => {
        outputText.textContent = translatedText;
    }).catch(err => {
        console.error(err);
        alert('Error: Failed to translate the text.');
    });
});

function googleTranslate(text, target) {
    return new Promise((resolve, reject) => {
        translate(text, { to: target }, (err, translation) => {
            if (err) {
                reject(err);
            } else {
                resolve(translation.translatedText);
            }
        });
    });
}