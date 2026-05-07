function calculateSum() {
        const num1 = Number(document.getElementById('calc-num1').value);
        const num2 = Number(document.getElementById('calc-num2').value);
        const sum = num1 + num2;

        document.getElementById('calc-result').value = sum;
        alert("Сума введених чисел дорівнює: " + sum);
    }