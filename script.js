function updateClock() {
    const now = new Date();

    // const hour = String(now.getHours()).padStart(2, '0');
    // const min = String(now.getMinutes()).padStart(2, '0');
    // const sec = String(now.getSeconds()).padStart(2, '0');

    // const day = String(now.getDate()).padStart(2, '0');
    // const month = String(now.getMonth() + 1).padStart(2, '0');
    // const year = now.getFullYear();

    const clock = {
        hour: String(now.getHours()).padStart(2, '0'),
        min : String(now.getMinutes()).padStart(2, '0'),
        sec : String(now.getSeconds()).padStart(2, '0'),

        day : String(now.getDate()).padStart(2, '0'),
        month : String(now.getMonth() + 1).padStart(2, '0'),
        year : now.getFullYear()
    }

    document.getElementById('hour').textContent = clock.hour;
    document.getElementById('min').textContent = clock.min;
    document.getElementById('sec').textContent = clock.sec;

    document.getElementById('year').textContent = clock.year;
    document.getElementById('day').textContent = clock.day;
    document.getElementById('month').textContent = clock.month;
}

setInterval(updateClock, 1000);
updateClock();