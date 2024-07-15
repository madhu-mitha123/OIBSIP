function convertTemperature() {
    const inputScale = document.getElementById('inputScale').value;
    const outputScale = document.getElementById('outputScale').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let outputValue;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    if (inputScale === outputScale) {
        outputValue = inputValue;
    } else {
        if (inputScale === 'celsius') {
            if (outputScale === 'fahrenheit') {
                outputValue = (inputValue * 9/5) + 32;
            } else if (outputScale === 'kelvin') {
                outputValue = inputValue + 273.15;
            }
        } else if (inputScale === 'fahrenheit') {
            if (outputScale === 'celsius') {
                outputValue = (inputValue - 32) * 5/9;
            } else if (outputScale === 'kelvin') {
                outputValue = (inputValue - 32) * 5/9 + 273.15;
            }
        } else if (inputScale === 'kelvin') {
            if (outputScale === 'celsius') {
                outputValue = inputValue - 273.15;
            } else if (outputScale === 'fahrenheit') {
                outputValue = (inputValue - 273.15) * 9/5 + 32;
            }
        }
    }

    document.getElementById('outputValue').value = outputValue;
}
