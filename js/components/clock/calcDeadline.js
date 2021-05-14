function calcDeadline(targetDate){  //gaunam data 04-19 10:00:00

const clock = new Date(); //susirandu laikrodi
const currentYear = clock.getFullYear();// susirandu metus 2021
const now = Date.now();//data milisekundem 162....

let fullTargetDate= `${currentYear}-${targetDate}`;    // 2021-04-19 10:00:00 prideda metus prie target date
                    

let targetClock = new Date(fullTargetDate);   //sukonstravo nauja laika pagal data
let timeInMiliseconds = targetClock.getTime();   // paskaiciavo kiek milisekundziu yra data

if (timeInMiliseconds < now){
    fullTargetDate = `${currentYear + 1}-${targetDate}`;   // skaiciuoja is naujo fulltarget date ir duoda kad bus 2022
    targetClock = new Date(fullTargetDate);
    timeInMiliseconds = targetClock.getTime();  //skaiciuoja kiek bus lygu 2022-04-19 10:00:00 milisekundemis

}

const timeLeftInMiliseconds = timeInMiliseconds - now;
let timeLeftInSeconds = Math.round(timeLeftInMiliseconds / 1000);

const days = Math.floor(timeLeftInSeconds / 60 / 60 / 24);
timeLeftInSeconds -= days * 60 * 60 * 24;

const hours = Math.floor(timeLeftInSeconds / 60 /60);
timeLeftInSeconds -= hours * 60 * 60;

const minutes = Math.floor(timeLeftInSeconds / 60)
timeLeftInSeconds -= minutes * 60;


return [days, hours, minutes, timeLeftInSeconds];
}

export {calcDeadline}