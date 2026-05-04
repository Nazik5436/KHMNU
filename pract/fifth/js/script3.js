        const N = 10; 

        const appContainer = document.getElementById('app');
        let htmlOutput = '';


        htmlOutput += '<div class="section-heading">КОНСТАНТИ</div>';
        htmlOutput += '<ol class="data-list">';
        htmlOutput += `<li>Значення константи е = ${Math.E}</li>`;
        htmlOutput += `<li>Значення константи π = ${Math.PI}</li>`;
        htmlOutput += `<li>Десятковий логарифм постійної Ейлера (е) = ${Math.LOG10E}</li>`;
        htmlOutput += `<li>Двійковий логарифм постійної Ейлера (е) = ${Math.LOG2E}</li>`;
        htmlOutput += `<li>Натуральний логарифм числа 10 = ${Math.LN10}</li>`;
        htmlOutput += `<li>Натуральний логарифм числа 2 = ${Math.LN2}</li>`;
        htmlOutput += `<li>Корінь квадратний із двох = ${Math.SQRT2}</li>`;
        htmlOutput += `<li>Корінь квадратний з однієї другої = ${Math.SQRT1_2}</li>`;
        htmlOutput += '</ol>';


        const allFunctions = [
            `Результат зведення в степінь: 4² = ${Math.pow(4, 2)}`,
            `Результат добування квадратного кореня з 4: y = ${Math.sqrt(4)}`,
            `Результат добування квадратного кореня з -9: y = ${Math.sqrt(-9)}`,
            `Результат обчислення модуля |-9|: y = ${Math.abs(-9)}`,
            `Результат обчислення косинуса нуля радіан: y = ${Math.cos(0)}`,
            `Косинус 180 градусів (π радіан): y = ${Math.cos(Math.PI)}`,
            `Результат обчислення арккосинуса нуля: y = ${Math.acos(0)}`,
            `Результат обчислення синуса нуля радіан: y = ${Math.sin(0)}`,
            `Синус 90 градусів (π /2 радіан): y = ${Math.sin(Math.PI / 2)}`,
            `Результат обчислення арксинуса одиниці: y = ${Math.asin(1)}`,
            `Тангенс 45 градусів (π /4 радіан): y = ${Math.tan(Math.PI / 4)}`,
            `Результат обчислення арктангенса одиниці: y = ${Math.atan(1)}`,
            `Результат зведення e в степінь 2: y = ${Math.exp(2)}`,
            `Натуральний логарифм від e²: y = ${Math.log(Math.exp(2))}`,
            `Результат обчислення десяткового логарифма від числа 100: y = ${Math.log10(100)}`,
            `Результат обчислення двійкового логарифма від числа 8: y = ${Math.log2(8)}`,
            `Тангенс 45 градусів (з округленням): y = ${Math.round(Math.tan(Math.PI / 4))}`,
            `Результат округлення числа 1,00123 у більшу сторону: y = ${Math.ceil(1.00123)}`,
            `Результат округлення числа -3.1234 у більшу сторону: y = ${Math.ceil(-3.1234)}`,
            `Результат округлення числа 1,00123 у меншу сторону: y = ${Math.floor(1.00123)}`,
            `Результат округлення числа -3.1234 у меншу сторону: y = ${Math.floor(-3.1234)}`,
            `Результат округлення числа 1,44 за правилами арифметики: y = ${Math.round(1.44)}`,
            `Результат округлення числа 1,54 за правилами арифметики: y = ${Math.round(1.54)}`,
            `Вибір найбільшого із двох чисел 4 й 2: y = ${Math.max(4, 2)}`,
            `Вибір найменшого із двох чисел 4 й 2: y = ${Math.min(4, 2)}`
        ];

        htmlOutput += '<div class="section-heading">ФУНКЦІЇ</div>';
        htmlOutput += `<ol class="data-list" start="${N}">`;
        
        for (let i = N - 1; i < N + 4; i++) {
            if (allFunctions[i]) {
                htmlOutput += `<li>${allFunctions[i]}</li>`;
            }
        }
        htmlOutput += '</ol>';
        htmlOutput += '<div class="section-heading">ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ</div>';
        htmlOutput += `<div class="result-text">Формування випадкових чисел в інтервалі [0;1]: y = ${Math.random()}</div>`;

        appContainer.innerHTML = htmlOutput;
    