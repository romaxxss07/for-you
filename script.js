function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const music = document.getElementById('bgMusic');
    
    // Очищаем ввод от пробелов
    const cleanInput = input.replace(/\s/g, '');

    if (cleanInput === '040920') {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        
        // Запуск музыки
        if (music) {
            music.play().catch(error => {
                console.log("Музыка ждет клика:", error);
            });
        }
        
        startCounter();
    } else {
        const errorMsg = document.getElementById('error-msg');
        if (errorMsg) errorMsg.style.display = 'block';
    }
}

function startCounter() {
    // Апрель 2024 (3 — это апрель в JS)
    const startDate = new Date(2024, 3, 1); 
    const counterElement = document.getElementById('love-counter');

    if (!counterElement) return;

    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        counterElement.innerHTML = `Мы вместе: ${days}д ${hours}ч ${mins}м ${secs}с`;
    }, 1000);
}

// Слушатель для клавиши Enter
const passInput = document.getElementById('passwordInput');
if (passInput) {
    passInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
}

// Получаем элементы аудио и видео
const bgMusic = document.getElementById('bgMusic');
const ourVideo = document.getElementById('ourVideo');

// Когда видео начинает играть, можно приглушить фоновую музыку (по желанию)
ourVideo.onplay = function() {
    bgMusic.volume = 0.2; // Делаем тише, чтобы слышать видео
};

// Когда видео ставится на паузу или заканчивается — возвращаем музыку
ourVideo.onpause = function() {
    bgMusic.play();
    bgMusic.volume = 1.0; // Возвращаем громкость
};

ourVideo.onended = function() {
    bgMusic.play();
    bgMusic.volume = 1.0;
};