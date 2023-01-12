let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let timerValue = document.getElementById('difference');
const state = {
    started: null
}

buttonStart.addEventListener('click', () => {
    state.started = new Date().getTime();
    timerValue.innerHTML = state.started;
});

buttonStop.addEventListener('click', () => {
    const nowDate = new Date().getTime();
    const stopWatch = nowDate - state.started;
    const milliseconds = stopWatch % 1000;
    const sec = ((stopWatch - milliseconds) / 1000) % 60;
    const minutes = (((stopWatch - milliseconds) / 1000) - sec) / 60;
    timerValue.innerHTML = `${minutes}:${sec}:${milliseconds}`;
});
