class Time {
    constructor() {
        this.time = 60;
        this.interval = null;
        this.start = false;
    }

    getTime() {
        return this.time;
    }

    setTime(tid) {
        this.time = tid;
    }

    resetTime() {
        this.time = 60;
    }

    countdown() {
        this.time -= 1;
        this.clearTimeInHTML();
        var IdOfTime = document.getElementById("timeID");

        if(this.time > 10){
            IdOfTime.style.color = '#000000';
        }
        else{
            IdOfTime.style.color = '#CC0000';
        }

        if (this.time > 0) {
            this.logToHTML(this.time);
        } 
        else {
            //this.logToHTML("TIMES UP!");
            clearInterval(this.interval); 
        }
    }

    logToHTML(timeLeft) {
        const time = document.getElementById("timeID");
        time.innerHTML = timeLeft;
    }

    clearTimeInHTML() {
        const time = document.getElementById("timeID");
        time.innerHTML = "";
    }

    /*
    The setInterval function in JavaScript is used to repeatedly call a function or execute a code snippet, with a 
    fixed time delay between each cal.

    The clearInterval() method in JavaScript is used to stop a function that was set to execute repeatedly using the 
    setInterval() method. This method takes the interval ID returned by setInterval() as its parameter.
    */

    startCountdown() {
        if (this.interval) {
            clearInterval(this.interval); 
        }
        this.interval = setInterval(() => { this.countdown(); }, 1000);
    }

    countdownTimer(){
        if(this.start){
            this.setTime(60);
        }
        else{
            this.startCountdown();
            this.start = true;
        }
    }
}
