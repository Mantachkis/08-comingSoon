import{formatNumber} from './formatNumber.js'


function renderClock(selector){
    //validacija


    //logika

    const DOM = document.querySelector(selector);
    
    const time = [432, 9, 37, 39];
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





}

export{renderClock}

