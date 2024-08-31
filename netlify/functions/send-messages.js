const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const telegramToken = '7194862957:AAHmtFsAwn9KfHCChBfkmTd2Ac3QAI2wdgg'; // Замініть на ваш токен бота
    const chatId = '444476089'; // Замініть на ваш chat ID

    const phoneNumber = JSON.parse(event.body).phone;

    const message = `Новий номер телефону: ${phoneNumber}`;
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Повідомлення надіслано' }),
    };
};