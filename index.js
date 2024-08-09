const countdownElement = document.getElementById('countdown');
        const countdownContainer = document.getElementById('countdown-container');

        // Establece la fecha de finalización para 19 días a partir de ahora
        const endDate = new Date().getTime() + (19 * 24 * 60 * 60 * 1000);

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
            }
        }, 1000);