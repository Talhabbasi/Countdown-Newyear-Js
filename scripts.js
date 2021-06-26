const newYearDate=('1 jan 2022')
const daysel=document.getElementById('days')
const hoursel=document.getElementById('hours')
const minele=document.getElementById('min')
const secele=document.getElementById('sec')
function timerSetter() {
    const yearTime=  new Date(newYearDate)
    const currenttime = new Date()


    const tototSeconds=Math.floor(yearTime-currenttime)/1000;

    const days=Math.floor(tototSeconds/3600/24)
    const hour=Math.floor(tototSeconds/3600)%24
    const min=Math.floor(tototSeconds/60)%60
    const sec=Math.floor(tototSeconds)%60


    
    console.log(days ,hour,min ,sec)
    
    daysel.innerHTML=days;
    hoursel.innerText=timeset(hour)
    minele.innerText=timeset(min)
    secele.innerText=timeset(sec)
}
function timeset(time) {
    return time < 10 ? `0${time}` : time
    
}
timerSetter();
setInterval(timerSetter,1000)