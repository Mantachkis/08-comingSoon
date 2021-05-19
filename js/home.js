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

const lodoDOM = document.querySelector('.logo');

function handleLogoClick(){
    console.log('buvo paspaustas');
}

logoDOM.addEventListener('click',  handleLogoClick);