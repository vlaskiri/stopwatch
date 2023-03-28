//Global variables
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let timerValue = document.getElementById('timer');

let seconds = 0;
let interval = null;

//Event Listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);


//Update the Timer
function timer () {
    seconds++

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) {
        secs = '0' + secs;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (hrs < 10) {
        hrs = '0' + hrs;
    }

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


// const state = {
//     started: null
// }
//
//
// startBtn.addEventListener('click', () => {
//     state.started = new Date().getTime();
//     timerValue.innerHTML = state.started;
// });
//
// stopBtn.addEventListener('click', () => {
//     const nowDate = new Date().getTime();
//     const stopWatch = nowDate - state.started;
//     const milliseconds = stopWatch % 1000;
//     const sec = ((stopWatch - milliseconds) / 1000) % 60;
//     const minutes = (((stopWatch - milliseconds) / 1000) - sec) / 60;
//     timerValue.innerHTML = `${minutes}:${sec}:${milliseconds}`;
// });
