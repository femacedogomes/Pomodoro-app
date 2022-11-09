//variables

let workTittle = document.getElementById('Work')
let breakTittle = document.getElementById('Break')

let worktime = 25;
let breaktime = 5;

let seconds = '00';

window.onload = () => {
    document.getElementById('pause').style.display = 'none'
    document.getElementById('reset').style.display = 'none'

    document.getElementById('minutes').innerHTML = worktime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('Active')
}
//functions 

function Start() {
    

    //change button
    document.getElementById('start').style.display = "none"

    document.getElementById('pause').style.display = ''
    document.getElementById('reset').style.display = ''


    seconds = 59;

    let workMinutes = worktime - 1;
    let breakMinutes = breaktime - 1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes
        document.getElementById('seconds').innerHTML = seconds

        seconds = seconds - 1;
        if (seconds == -1) {
            workMinutes = workMinutes - 1;
            if (workMinutes == -1) {
                if (breakCount % 2 == 0) {
                    //start break
                    workMinutes = breakMinutes;
                    seconds = 59

                    breakCount++

                    //change painel
                    workTittle.classList.remove('Active')
                    breakTittle.classList.add('Active')

                } else {
                    //start worktime
                    workMinutes = worktime;
                    seconds = 59

                    breakCount++

                    //change painel
                    workTittle.classList.add('Active')
                    breakTittle.classList.remove('Active')
                }
            }
            seconds = 59
            
        }

    }
    
    setInterval(timerFunction, 1000);
   
}


