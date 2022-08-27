window.onload = function() {
    var tens = 00
    var seconds = 00
    var minutes = 00

    var appendtens = document.getElementById("tens")
    var appendseconds = document.getElementById("seconds")
    var appendminutes = document.getElementById("minutes")

    var start = document.getElementById("start")
    var stop = document.getElementById("stop")
    var reset = document.getElementById("reset")

    var interval  

    start.onclick = function() {
        clearInterval(interval)
        interval =setInterval(starttimer, 10)
    }

    stop.onclick = function() {
        clearInterval(interval)
    }

    reset.onclick = function() {
        clearInterval(interval)
        tens = "00"
        seconds = "00"
        minutes = "00"

        appendtens.innerHTML = tens

        appendseconds.innerHTML = seconds

        appendminutes.innerHTML = minutes
    }

    function starttimer() {
        tens++

        if (tens <= 9) {
            appendtens.innerHTML = "0" + tens
        }

        if(tens > 9) {
            appendtens.innerHTML = tens
        }

        if(tens > 99) {
            seconds++
            appendseconds.innerHTML = "0" + seconds
            tens = "00"
            appendtens.innerHTML = tens
        }

        if(seconds > 9) {
            appendseconds.innerHTML = seconds
        }

        if(seconds > 59) {
            minutes++
            appendminutes.innerHTML = "0" + minutes
            tens = "00"
            appendtens.innerHTML = tens
            seconds = "00"
            appendseconds.innerHTML = seconds
        }

        if (minutes > 9){
            appendminutes.innerHTML = minutes
        }
    }
}