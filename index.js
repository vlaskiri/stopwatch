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


// const startBtn = document.getElementById('start');
// const stopBtn = document.getElementById('stop');
// const resetBtn = document.getElementById('reset');
// const timerValue = document.getElementById('timer');
//
// let startTime = null;
// let timerId = null;
// let seconds = 0;
//
// function timer() {
//     const elapsedTime = new Date(Date.now() - startTime);
//
//     function pad(unit) {
//         return unit < 10 ? '0' + unit : unit;
//     }
//
//     const hrs = pad(elapsedTime.getUTCHours());
//     const mins = pad(elapsedTime.getUTCMinutes());
//     const secs = pad(elapsedTime.getUTCSeconds());
//
//     timerValue.innerText = `${hrs}:${mins}:${secs}`;
// }
//
// function start() {
//     if (timerId) {
//         return;
//     }
//
//     startTime = Date.now() - seconds * 1000;
//     timerId = setInterval(timer, 1000);
// }
//
// function stop() {
//     clearInterval(timerId);
//     timerId = null;
//     seconds = new Date(Date.now() - startTime).getSeconds();
// }
//
// function reset() {
//     stop();
//     seconds = 0;
//     timerValue.innerText = '00:00:00';
// }
//
// startBtn.addEventListener('click', start);
// stopBtn.addEventListener('click', stop);
// resetBtn.addEventListener('click', reset);


// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop');
// let resetBtn = document.getElementById('reset');
// let timerValue = document.getElementById('timer');
//
// let seconds = 0;
// let interval = null;
//
// function timer () {
//     seconds++
//
//     let hrs = Math.floor(seconds / 3600);
//     let mins = Math.floor((seconds - (hrs * 3600)) / 60);
//     let secs = seconds % 60;
//
//     function pad(unit) {
//         return unit < 10 ? '0' + unit : unit;
//     }
//
//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);
//
//     timerValue.innerText = `${hrs}:${mins}:${secs}`;
// }
//
// function start () {
//     if (interval) {
//         return;
//     }
//
//     interval = setInterval(timer, 1000);
// }
//
// function stop () {
//     clearInterval(interval);
//     interval = null;
// }
//
// function reset () {
//     stop();
//     seconds = 0;
//     timerValue.innerText = '00:00:00'
// }
//
// startBtn.addEventListener("click", start);
// stopBtn.addEventListener("click", stop);
// resetBtn.addEventListener("click", reset);