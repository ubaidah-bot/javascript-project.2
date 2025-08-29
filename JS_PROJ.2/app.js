const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const milisecondsLabel = document.getElementById('miliseconds');

const startButton = document.getElementById('startbtn');
const stopButton = document.getElementById('stopbtn');
const resetButton = document.getElementById('resetbtn');


let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let intervel;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer(){
   
    intervel = setInterval(updateTimer, 10);

}
function stopTimer(){
    clearInterval(intervel);
}

function resetTimer(){
    clearInterval(intervel);
    resetTime();
}

function resetTime(){
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    setTime();
}

























function updateTimer(){
    miliseconds++;
    if(miliseconds === 100){
        miliseconds = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    setTime();

}

function setTime(){
    minutesLabel.textContent = padTime(minutes);
    secondsLabel.textContent = padTime(seconds);
    milisecondsLabel.textContent = padTime(miliseconds);
}

function padTime(time){
    return time.toString().padStart(2, '0');
}