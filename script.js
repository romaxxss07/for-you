function updateCounter() {
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

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    const bgMusic = document.getElementById('bgMusic');

    if (passwordInput === '040920') {
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        
        bgMusic.play().catch(e => console.log("Audio play blocked by browser"));
        setInterval(updateCounter, 1000);
        updateCounter();
        
        initVideoMusicControl();
    } else {
        errorMsg.style.display = 'block';
    }
}

function initVideoMusicControl() {
    const bgMusic = document.getElementById('bgMusic');
    const ourVideo = document.getElementById('ourVideo');

    if (ourVideo) {
        ourVideo.onplay = function() {
            ourVideo.muted = false; // Убеждаемся, что звук видео ВКЛЮЧЕН
            bgMusic.volume = 0.1;   // Приглушаем фоновую музыку
        };

        ourVideo.onpause = function() {
            bgMusic.play();         // Музыка продолжает играть
            bgMusic.volume = 1.0;   // Возвращаем полную громкость музыки
        };

        ourVideo.onended = function() {
            bgMusic.volume = 1.0;
        };
    }
}