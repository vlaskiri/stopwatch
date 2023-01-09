let start = document.getElementById('start');
let stop = document.getElementById('stop');
let nowDate = new Date()
console.log(nowDate)
let newDate = new Date(2023, 0, 10, 22,30)
console.log(newDate)

start.addEventListener('click', () => {
    console.log('start')
});

stop.addEventListener('click', () => {
    console.log('stop')
});


