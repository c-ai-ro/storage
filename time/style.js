const tdisp = document.getElementById('tdisp');

function updateTime() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    tdisp.textContent = `${hours}:${minutes}:${seconds}`;
    if (hours >= 13) {
        hours = hours - 12;
    } else if (hours <= 0) {
        hours = hours + 1;
    };
}

updateTime();
setInterval(updateTime, 1000);
