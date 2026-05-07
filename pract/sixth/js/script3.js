function checkQuizAnswer() {
    const selectElement = document.getElementById('answer-select');
    const selectedValue = selectElement.value;

    if (selectedValue === "none") {
        alert("Будь ласка, оберіть варіант відповіді зі списку!");
    } else if (selectedValue === "correct") {
        alert("Правильно! Птах дійсно літає.");
    } else {
        alert("Помилка! Подумай ще раз, цей варіант не літає.");
    }
}