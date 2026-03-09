// Функция для обновления счетчика времени
function updateCounter() {
    // Устанавливаем дату начала — 22 декабря 2024 года
    const startDate = new Date('2024-12-22T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const counterElement = document.getElementById('love-counter');
    if (counterElement) {
        counterElement.innerHTML = `Мы вместе: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
    }
}

// Функция проверки пароля (040920)
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    const bgMusic = document.getElementById('bgMusic');

    if (passwordInput === '040920') {
        // Скрываем экран входа и показываем основной контент
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        
        // Запускаем музыку и счетчик
        bgMusic.play();
        setInterval(updateCounter, 1000);
        updateCounter();
        
        // Активируем управление звуком для видео
        initVideoMusicControl();
    } else {
        errorMsg.style.display = 'block';
    }
}

// Логика управления музыкой при просмотре видео
function initVideoMusicControl() {
    const bgMusic = document.getElementById('bgMusic');
    // Находим все видео на странице
    const allVideos = document.querySelectorAll('video');

    allVideos.forEach(video => {
        // Когда любое видео начинает играть
        video.onplay = function() {
            bgMusic.volume = 0.1; // Приглушаем фоновую музыку
        };

        // Когда видео на паузе
        video.onpause = function() {
            bgMusic.play(); // Убеждаемся, что музыка играет
            bgMusic.volume = 1.0; // Возвращаем полную громкость
        };

        // Когда видео закончилось
        video.onended = function() {
            bgMusic.play();
            bgMusic.volume = 1.0;
        };
    });
}