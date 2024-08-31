<?php
// Дані бота
$telegramToken = '7194862957:AAHmtFsAwn9KfHCChBfkmTd2Ac3QAI2wdgg'; // Замініть на ваш токен бота
$chatId = '444476089'; // Замініть на ваш chat ID

// Отримання номера телефону з POST-запиту
$phoneNumber = $_POST['phone'] ?? '';

if ($phoneNumber) {
    $message = "Новий номер телефону: $phoneNumber";
    
    // Формуємо URL для запиту до Telegram API
    $url = "https://api.telegram.org/bot$telegramToken/sendMessage";

    // Параметри запиту
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
    ];

    // Налаштування контексту для запиту
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => http_build_query($data),
        ]
    ];

    // Відправка запиту
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);

    if ($response) {
        echo "Повідомлення надіслано успішно!";
    } else {
        echo "Помилка при відправці повідомлення.";
    }
} else {
    echo "Номер телефону не вказаний.";
}
?>