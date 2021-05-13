function calcDeadline(targetDate){

const clock = new Date();
const currentYear = clock.getFullYear();
const now = Date.now();

const currentTargetDate= `${currentYear} - ${targetDate}`;
const clockCurrent = new Date(currentTargetDate);
const currentYearInMiliseconds = clockCurrent.getTime();

if (currentYearInMiliseconds > now){


}
else{

    const nextTargetDate = `${currentYear + 1} - ${targetDate}`;
    const clockNext = new Date(currentTargetDate);
    const nextYearInMiliseconds = clockNext.getTime();

}


return ;


}

export {calcDeadline}