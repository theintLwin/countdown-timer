const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("seconds");


const desired = "1 Jan 2023";// start writing code from 20.5.2022        

function countdown(){
    const desiredDate = new Date(desired);
    const currentDate = new Date();
   
    const totalsec = (desiredDate - currentDate)/1000;

    const days = Math.floor(totalsec / 3600 / 24);
    const hours = Math.floor(totalsec / 3600) % 24;
    const mins = Math.floor(totalsec / 60 )%60;
    const sec = Math.floor(totalsec) % 60;
    console.log(`days-${days}  hours ${hours} minutes-${mins} seconds-${sec}  ${totalsec}`)
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);
   
}
 function formatTime(time){
     return time < 10 ? `0${time}` : time;
 };
//initial call
countdown();

setInterval(countdown, 1000);

