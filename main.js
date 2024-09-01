// Отримуємо всі елементи повзунків
const rangeInput = document.querySelector('#input');
const rangeValueDisplay = document.querySelector('#sum');
const rangeInputSecond = document.querySelector('#input_second');
const rangeValueDisplaySecond = document.querySelector('#sum_second');

rangeInput.addEventListener('input', function() {
    const value = rangeInput.value;
    rangeValueDisplay.textContent = value;
});

rangeInputSecond.addEventListener('input', function() {
    const value = rangeInputSecond.value;
    rangeValueDisplaySecond.textContent = value;
});

// Отримуємо кнопку за її класом
const redirectButton = document.querySelector('.calculator__button');
const redirectButton2 = document.querySelector('.calc2');

// Додаємо обробник події для кліку на кнопку
redirectButton.addEventListener('click', function() {
    // Переадресовуємо користувача на іншу сторінку
    window.location.href = './pages/form_page.html';
});

// Додаємо обробник події для кліку на кнопку
redirectButton2.addEventListener('click', function() {
    // Переадресовуємо користувача на іншу сторінку
    window.location.href = './pages/form_page.html';
});
