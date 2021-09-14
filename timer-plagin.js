
export class CountdownTimer{
    constructor({selector,targetTime}) {
        this.selector = document.querySelector(selector);
        this.targetTime = targetTime;
        this.intervalId = null;
    }

    start() {
        const {daysContent, hoursContent, minutesContent, secondsContent}  = this.getRefs();
        this.intervalId = setInterval(() => {
            let currentTime = Date.now()
            const time = this.targetTime - currentTime;
            
            const days = this.getDaysCount(time);
            const hours = this.getHoursCount(time);
            const minutes = this.getMinutesCount(time);
            const seconds = this.getSecondsCount(time);
            
            this.writeContentHTML(daysContent, days);
            this.writeContentHTML(hoursContent, hours);
            this.writeContentHTML(minutesContent, minutes);
            this.writeContentHTML(secondsContent, seconds);
            
        }, 1000);
        
    }
    reset() {
        clearInterval(this.intervalId);
                const {daysContent, hoursContent, minutesContent, secondsContent}  = this.getRefs();

        this.writeContentHTML(daysContent, '00');
            this.writeContentHTML(hoursContent, '00');
            this.writeContentHTML(minutesContent, '00');
            this.writeContentHTML(secondsContent, '00');
        
        
    }
    writeContentHTML(place, value) {
        place.textContent = value;
    };

    getPadStart(value, num, symb) {
    return String(value).padStart(num, symb);
    };
    
    getDaysCount(timeMSec) {
        return this.getPadStart(Math.floor(timeMSec / (1000 * 60 * 60 * 24)), 2, '0')
    };

    getHoursCount(timeMSec) {
        return this.getPadStart(Math.floor((timeMSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2, '0')
    };
    getMinutesCount(timeMSec) {
        return this.getPadStart(Math.floor((timeMSec % (1000 * 60 * 60)) / (1000 * 60)), 2, '0')
    };
     getSecondsCount(timeMSec) {
        return this.getPadStart(Math.floor((timeMSec % (1000 * 60)) / 1000), 2, '0')
    };

     getRefs() {
        const daysContent = this.selector.querySelector('[data-value="days"]');
        const hoursContent = this.selector.querySelector('[data-value="hours"]');
        const minutesContent = this.selector.querySelector('[data-value="mins"]');
        const secondsContent = this.selector.querySelector('[data-value="secs"]');
        
         return { daysContent, hoursContent, minutesContent, secondsContent };
    };
   
};