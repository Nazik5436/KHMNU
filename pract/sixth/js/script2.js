function checkAnswer(rowName, correctValue) {
    const radioButtons = document.getElementsByName(rowName);
    let selectedValue = null;
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedValue = parseInt(radioButtons[i].value, 10);
            break;
        }
    }
    
    if (selectedValue === null) {
        alert("Спочатку оберіть відповідь 1 або 0");
    } else if (selectedValue === correctValue) {
        alert("Правильно! Відмінний результат");
    } else {
        alert("Помилка! Згадайте таблицю істинності для ВИКЛЮЧАЮЧЕ АБО НЕ.");
    }
}