$(document).ready(function() {
    // Ініціалізація Inputmask з потрібною маскою
    Inputmask({
        mask: "+38 (999) 999 9999",
        showMaskOnHover: false, // Не показувати маску при наведенні
        showMaskOnFocus: true // Показувати маску при фокусі
    }).mask('#phone');

    $('#phoneForm').on('submit', function(event) {
        event.preventDefault(); // Заборонити стандартне надсилання форми
        const phoneInput = $('#phone');
        const phoneValue = phoneInput.val().trim();
        // const digitsOnly = phoneValue.JSON.stringify();
        const phonePattern = /^\+38 \((067|068|096|097|098|050|066|095|099|063|073|093|091)\) \d{3} \d{4}$/; // Регулярний вираз для номера телефону

        if (!phonePattern.test(phoneInput.val())) {
            event.preventDefault(); // Заборонити надсилання форми
            phoneInput.css('border', '1px solid red'); // Змінити бордер на червоний
        } else {
            phoneInput.css('border', ''); // Скинути стиль бордера, якщо введення вірне
        }

        $.ajax({
            type: 'POST', // Використовується POST для відправки даних
            url: '/.netlify/functions/send-messages', // URL вашої Netlify функції
            data: JSON.stringify({ phone: phoneValue }), // Перетворюємо об'єкт у JSON-рядок
            contentType: 'application/json', // Вказуємо, що дані передаються у форматі JSON
            success: function(response) {
                console.log('Повідомлення надіслано успішно:', response);

            // Очищення полів input після успішної відправки
                document.querySelector('.form_fields input[placeholder="Ім\'я"]').value = '';
                document.querySelector('.form_fields input[placeholder="Прізвище"]').value = '';
                document.getElementById('phone').value = '';
            },
            error: function(error) {
                console.log('Помилка при відправці повідомлення:', error);
            }
        });
    });
});

