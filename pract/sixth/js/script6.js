const BOT_TOKEN = '8797623145:AAGpIWu5WMsLVDqXJhrLLWJKfOv6yhs_AE0';
const CHAT_ID = '947589644';

    document.getElementById('tg-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const subject = document.getElementById('mail-subj').value;
        const body = document.getElementById('mail-body').value;
        const submitBtn = document.getElementById('submit-btn');

        const textMessage = `📩 <b>Нове повідомлення з форми!</b>\n\n<b>Тема:</b> ${subject}\n<b>Текст:</b> ${body}`;

        submitBtn.textContent = 'Відправка...';
        submitBtn.disabled = true;

        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: textMessage,
                parse_mode: 'HTML'
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Повідомлення успішно відправлено в Telegram!');
                document.getElementById('tg-form').reset(); 
            } else {
                alert('Сталася помилка при відправці.');
            }
        })
        .catch(error => {
            console.error('Помилка:', error);
            alert('Помилка з\'єднання. Перевірте інтернет.');
        })
        .finally(() => {
            submitBtn.textContent = 'Відправити';
            submitBtn.disabled = false;
        });
    });