let isRunning = false;
let startTime;
let interval;

const timeDisplay = document.querySelector(".time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapTimes = document.querySelector(".lap-times");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", recordLap);

function start() {
    if (!isRunning) {
        isRunning = true;
        startButton.disabled = true;
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateTime, 10);
    }
}

function pause() {
    isRunning = false;
    startButton.disabled = false;
    clearInterval(interval);
}

function reset() {
    isRunning = false;
    startButton.disabled = false;
    clearInterval(interval);
    timeDisplay.textContent = "00:00:00";
    lapTimes.innerHTML = "";
}

function updateTime() {
    const elapsedTime = new Date(Date.now() - startTime);
    timeDisplay.textContent = elapsedTime.toISOString().substr(11, 8);
}

let lapCount = 1;
function recordLap() {
    if (isRunning) {
        const lapTime = timeDisplay.textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapTimes.appendChild(lapItem);
        lapCount++;
    }
}
