
import refs from './refs.js';
const {form, createBtn, resetBtn } = refs;

import { CountdownTimer } from './timer-plagin.js';

// const createBtn = document.querySelector('[data-btn]')

// const form = document.querySelector('[data-form]');

// let targetDate = '';
let timer = null;
form.addEventListener('submit', startTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer(e) {
    createBtn.disabled = true;
    e.preventDefault();
    
    const { elements: { date } } = e.currentTarget;
   
    if (new Date(date.value) > Date.now()) {
        timer = createNewTimer(date.value)
        timer.start()
     }
}

function resetTimer() {
    createBtn.disabled = false;
    if (timer !== null) {
        timer.reset()
        
         console.log(timer);
    }
};

function createNewTimer(value) {
   return  new CountdownTimer(
    {
        selector: `#timer-1`,
        targetTime: new Date(value),
    })
}
  