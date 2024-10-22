class Time {
    constructor() {
        this.time = 30;
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
        this.time = 30;
    }

    countdown() {
        this.time -= 1;
        this.clearTimeInHTML();
        var idOfTime = document.getElementById("timeID");

        if(this.time > 6){
            idOfTime.style.color = '#000000';
        }
        else{
            idOfTime.style.color = '#CC0000';
            idOfTime.style.fontSize = 'x-large';
            idOfTime.style.fontWeight = 'bold';
        }

        if (this.time > 0) {
            this.logToHTML(this.time);
        } 
        else {
            this.logToHTML("TIMES UP!");
            clearInterval(this.interval); 
            this.endQuiz();
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
            this.setTime(30);
        }
        else{
            this.startCountdown();
            this.start = true;
        }
    }
    
    endQuiz() {
        const mainElement = document.getElementById("main");
        const endElement = document.getElementById("endBox");

        endElement.children[0].innerHTML = "Your time is up! ";
        endElement.children[1].innerHTML = "Reload the page to try again";
        endElement.children[4].remove();
        endElement.children[4].remove();

        mainElement.classList.remove("main");
        mainElement.classList.add("mainHidden");
        endElement.classList.remove("endHidden");
        endElement.classList.add("end");
    }
}
