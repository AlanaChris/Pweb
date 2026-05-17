document.addEventListener('DOMContentLoaded', function() {
    
    const textInput = document.getElementById('textInput');
    const upperRadio = document.getElementById('upperRadio');
    const lowerRadio = document.getElementById('lowerRadio');
    const resultText = document.getElementById('resultText');
    
    function updateText() {
        const inputValue = textInput.value;
        
        if (upperRadio.checked) {
            resultText.textContent = inputValue.toUpperCase();
        } else if (lowerRadio.checked) {
            resultText.textContent = inputValue.toLowerCase();
        } else {
            resultText.textContent = inputValue || '-';
        }
    }
    
    textInput.addEventListener('input', updateText);
    upperRadio.addEventListener('change', updateText);
    lowerRadio.addEventListener('change', updateText);
    
    updateText();
});