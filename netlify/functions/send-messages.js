import fetch from 'node-fetch';

exports.handler = async function(event, context) {
    try {
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

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Повідомлення надіслано' }),
        };
    } catch (error) {
        console.error('Помилка у виконанні функції:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Внутрішня помилка сервера' }),
        };
    }
};
