function Watch(){
    const data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0"+ min : min;
    sec = sec < 10 ? "0"+ sec : sec;
    let TotalTime = `${hr}:${min}:${sec}`
    let tempo = document.getElementById('PresentTime')
    tempo.innerHTML = TotalTime
    
}
setInterval(Watch, 1000)

function startTimer(duration,display){
    var timer = duration, minutes, seconds;
    
    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;

        display.textContent = `${minutes}:${seconds}`

        if(--timer < 0){
            timer = duration;
        }
    },1000)
}

function Start() {
    var duration = 0.5 * 60;
    var display = document.getElementById('Time');

    startTimer(duration,display)
}