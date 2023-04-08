let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let timerValue = document.getElementById('timer');

let startTime = null;
let elapsedTime = 0;
let timerInterval = null;

function timer() {
    let currentDate = new Date().getTime();
    elapsedTime = currentDate - startTime;

    let hours = Math.floor((elapsedTime % (1000 * 3600 * 24)) / (1000 * 3600));
    let minutes = Math.floor((elapsedTime % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000));

    function pad(unit) {
        return unit < 10 ? '0' + unit : unit;
    }

    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);
    milliseconds = pad(milliseconds);

    timerValue.innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function start() {
    if (timerInterval) {
        return;
    }

    startTime = new Date().getTime() - elapsedTime;
    timerInterval = setInterval(timer, 10);
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    stop();
    elapsedTime = 0;
    timerValue.innerText = '00:00:00.000';
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);