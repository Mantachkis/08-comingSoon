import { renderClock } from './components/clock/clock.js';
import { progressBar } from './components/progres-bar/progressBar.js';
import { socials } from './components/socials/socials.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero_clock', '04-19 10:00:00');
socials('#socials_block', socialsData);
progressBar('.left-column > p', progressBarData);

// kas toks
// ivykio tipas
//ka daryt

const logoDOM = document.querySelector('.logo');

function handleLogoClick(){
    console.log('buvo paspaustas');
}

logoDOM.addEventListener('click',  handleLogoClick);
let count = 0;


const btnDOM=document.querySelector('.btn')
function countVisits(){
    count++;
   btnDOM.innerText = `click me (${count})`;
}
btnDOM.addEventListener('click', countVisits )


//scroll  socials
const socialsDOM=ducument.querySelector('.socials');
console.log([socialsDOM]);// html to array kad pamatyt reikiama info
const socialsHeight=socialsDOM.offsetHeight
const socialsTop=socialsDOM.offsetTop;
const windowTop=0;
const  windowHeight=0;

addEventListener('scroll', ()=>{
    if(socialsTop + socialsHeight <= scrollY +  innerHeight){

    }
    else{

    }

}) 

//scroll progresbar
