let values = [];

document.getElementById('addButton').addEventListener('click', () => {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue) {
        values.push(+(inputValue));
        document.getElementById('inputValue').value = '';
    }
});

    document.getElementById('calculateButton').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    if (values.length > 0) {
        let max = values[0];
        let min = values[0];
        let sum = 0;
        
        for (let i = 0; i < values.length; i++) {
            if (values[i] > max) {
                max = values[i];
            }
            if (values[i] < min) {
                min = values[i];
            }
            sum += values[i];
        }
        outputDiv.innerHTML += `
        <li>max: ${max}
        min: ${min}
        sum: ${sum}
        ${values}</li>
        `;
    }
});