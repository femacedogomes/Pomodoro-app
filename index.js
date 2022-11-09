//variables

let workTittle = document.getElementById('Work')
let breakTittle = document.getElementById('Break')

var worktime = 25;
var breaktime = 5;

let seconds = 59;

window.onload = () => {
    document.getElementById('pause').style.display = 'none'
    document.getElementById('reset').style.display = 'none'

    document.getElementById('minutes').innerHTML = worktime;

    workTittle.classList.add('Active')
}
//functions 

function Start() {


    //change button
    document.getElementById('start').style.display = "none"

    document.getElementById('pause').style.display = ''
    document.getElementById('reset').style.display = ''




    let workMinutes = worktime - 1;
    let breakMinutes = breaktime - 1;

    breakCount = 0;

    var timerFunction = setInterval(() => {
        let showseconds = seconds
        if (seconds < 10) {
            showseconds = '0' + seconds
        }

        document.getElementById('minutes').innerHTML = workMinutes
        document.getElementById('seconds').innerHTML = showseconds

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
    }, 1000);

    document.getElementById('reset').addEventListener('click', resetfunction)

    function resetfunction() {
        clearInterval(timerFunction)

        document.getElementById('start').style.display = ""
        document.getElementById('pause').style.display = 'none'
        document.getElementById('reset').style.display = 'none'

        worktime = 25;
        breaktime = 5;
        seconds = 59;

        document.getElementById('minutes').innerHTML = worktime
        document.getElementById('seconds').innerHTML = '00'

    }

    document.getElementById('pause').addEventListener('click', pausefunction)

    function pausefunction() {

        worktime = workMinutes + 1
        breaktime = breakMinutes + 1

        clearInterval(timerFunction)

        document.getElementById('start').style.display = ""
        document.getElementById('pause').style.display = 'none'
        document.getElementById('reset').style.display = ""
    }
}