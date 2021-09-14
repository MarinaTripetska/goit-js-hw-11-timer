


import { CountdownTimer } from './timer-plagin.js';

// const timerStart = new CountdownTimer({
//   selector: '#timer-1',
//   targetTime: new Date( ),
// })
// timerStart.timer()

const createBtn = document.querySelector('[data-btn]')
console.log(createBtn);
const form = document.querySelector('[data-form]');
console.log(form);
let targetDate = '';

form.addEventListener('submit', getTargetValue);



function getTargetValue(e) {
   
    
    e.preventDefault();
    const {  elements: { date }  } = e.currentTarget;
    
    const t = createNewTimer(date.value)
    t.timer()
    
}


function createNewTimer(value) {
    
   

   return  new CountdownTimer(
    {
        selector: `#timer-1`,
        targetTime: new Date(value),
    })
}
  