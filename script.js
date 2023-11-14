//1ere partie: date et heure courante
let d=new Date();
document.getElementById('date').innerHTML=d.toLocaleDateString();
let h=new Date();
document.getElementById('heu').innerHTML=h.toLocaleTimeString();
//2eme partie:chronomètre
let heu=0,min=0,sec=0,dsec=0;
let timer;
let zero=0;
function chrono(){
    document.getElementById('heu').innerHTML=heu;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('dsec').innerHTML=dsec;
    dsec++;
    if(dsec==10){
        sec++;
        dsec=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        heu++;
        min=0;
    }
}
function play(){
    timer=setInterval(chrono,100);
}
function pause(){
   clearInterval(timer);
}
function reset(){
    document.getElementById('heu').innerHTML=zero;
    document.getElementById('min').innerHTML=zero;
    document.getElementById('sec').innerHTML=zero;
    document.getElementById('dsec').innerHTML=zero;
    heu=zero;
    min=zero;
    sec=zero;
    dsec=zero;
    clearInterval(timer);
}
document.getElementById('pl').addEventListener('click',play)
document.getElementById('ps').addEventListener('click',pause)
document.getElementById('rs').addEventListener('click',reset)