const countdownElement = document.getElementById('countdown');

// Función para obtener o establecer la fecha de finalización en localStorage
function getOrCreateEndDate() {
    let endDate = localStorage.getItem('countdownEndDate');
    if (!endDate) {
        const targetDate = new Date('2024-08-27T00:00:00').getTime();
        localStorage.setItem('countdownEndDate', targetDate);
        endDate = targetDate;
    }
    return endDate;
}

// Obtener la fecha de finalización de localStorage o crear una nueva
const endDate = getOrCreateEndDate();

// Actualiza la cuenta regresiva cada segundo
const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    // Calcula los días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra la cuenta regresiva
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Cuando la cuenta regresiva termine
    if (distance < 0) {
        clearInterval(interval);
        localStorage.removeItem('countdownEndDate'); // Elimina la fecha de finalización del localStorage
        // countdownElement.innerHTML = "¡Tiempo finalizado!";
        location.href = "luz.html";
    }
}, 1000);
