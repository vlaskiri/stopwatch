let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let timerValue = document.getElementById('timer');

let startTime = null;
let elapsedTime = 0;
let timerInterval = null;
let isTimerRunning = false; // Отслеживание состояния таймера

function timer() {
    let currentDate = new Date().getTime();
    elapsedTime = currentDate - startTime;

    let hours = Math.floor((elapsedTime % (1000 * 3600 * 24)) / (1000 * 3600));
    let minutes = Math.floor((elapsedTime % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000));

//функция для часов, минут и секунд
    function pad(unit) {
        return unit < 10 ? '0' + unit : unit;
    }

//Функция для миллисекунд//
    function padms(unitms) {
        return unitms < 100 ? '0' + unitms : unitms;

    }

    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);
    milliseconds = padms(milliseconds);

    timerValue.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function start() {
    if (isTimerRunning) {
        pause();
    } else {
        startTime = new Date().getTime() - elapsedTime;
        timerInterval = setInterval(timer, 10);
        isTimerRunning = true;
        startBtn.innerText = 'Pause';
    }
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
    isTimerRunning = false;
    startBtn.innerText = 'Start';
}

function reset() {
    pause();
    elapsedTime = 0;
    timerValue.innerText = '00:00:00:000';
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);

// startBtn.onclick = () => {
//     if (startBtn === 'start') {
//         startBtn = 'stop';
//     }
//     else {
//         startBtn = ();
//     }
// }