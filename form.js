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
        const digitsOnly = phoneValue.replace(/\D/g, '');
        const phonePattern = /^\+38 \((067|068|096|097|098|050|066|095|099|063|073|093|091)\) \d{3} \d{4}$/; // Регулярний вираз для номера телефону

        console.log(phoneValue);
        if (!phonePattern.test(phoneInput.val())) {
            event.preventDefault(); // Заборонити надсилання форми
            phoneInput.css('border', '1px solid red'); // Змінити бордер на червоний
        } else {
            phoneInput.css('border', ''); // Скинути стиль бордера, якщо введення вірне
        }

        $.ajax({
            type: 'POST',
            url: '/.netlify/functions/send-message', // URL скрипта, на який відправляється запит
            data: { phone: digitsOnly },
            success: function(response) {
                console.log('Повідомлення надіслано успішно:', response);
            },
            error: function(error) {
                console.log('Помилка при відправці повідомлення:', error);
            }
        });
    });
});

