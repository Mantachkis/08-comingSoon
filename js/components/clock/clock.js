import{formatNumber} from './formatNumber.js'
import{calcDeadline} from'./calcDeadline.js'
import{updateClock} from './updateClock.js'
function renderClock(selector, targetDate){
    //validacija


    //logika

    const DOM = document.querySelector(selector);
    
    const time = calcDeadline(targetDate);
    const titles= ['days', 'hours', 'minutes', 'seconds']
    let HTML='';

    for(let i=0; i<4;i++){
     HTML +=`<div class="time">
        <div class="value">${formatNumber(time[i])}</div>
        <div class="title">${titles[i]}</div>
            </div>`;
        }

    //result return

DOM.innerHTML = HTML;

const allValueDOM = DOM.querySelectorAll('.value');



setInterval(function() {

    updateClock(allValueDOM, calcDeadline(targetDate));

}, 1000);



}

export{renderClock}

