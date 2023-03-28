//Global variables
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let timerValue = document.getElementById('timer');

let seconds = 0;
let interval = null;

//Update the Timer
function timer () {
    seconds++

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    function pad(unit) {
        return unit < 10 ? '0' + unit : unit;
    }

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timerValue.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
    if (interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    timerValue.innerText = '00:00:00'
}

//Event Listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);