class Radio{

    constructor(){

var himain = document.getElementById("main_radio");
himain.style.height = screen.height +"px";

if(screen.width<500){
    himain.style.width = screen.width +"px";
}

var heightdiv = document.getElementById("dive1");
heightdiv.style.height = screen.height -300 +"px";

    }
}
onload = new Radio();

class Buttons {
 constructor(){
 this.audiofill = document.getElementById("radio12");
 this.textchannel =document.getElementById("channle");
 this.play_pause = document.getElementById("play");
 this.isplayed;
 this.play_pause.addEventListener("click",()=>{
 this.play_pause1();
 });

 this.channel_radio =[];

 this.channel_radio[0]= "راديو سوا الخليج";
 this.channel_radio[1]= "راديو الف الف السعودي";
 this.channel_radio[2]= "راديو القران الكريم ";
 this.channel_radio[3]= "راديو اغاني ايرانية"
 this.channel_radio[4]= "راديو العاصمة البريطانية";
 this.channel_radio[5]= "راديو الدور الانجليزي ";
 this.channel_radio[6]= "راديو لبنان";
 this.channel_radio[7]= "راديو مونتكار اللبناني";
 this.channel_radio[8]="WMCA The Mission 570 AM";
 this.channel_radio[9]="Onda Latina - Madrid ";
 this.channel_radio[10]="Cadena Dial - España";
 this.channel_radio[11]="XHFAJ Alfa 91.3 FM - México";
 this.channel_radio[12]="XEJP Stereo Joya FM - México";
 this.channelurl =[];

 this.channelurl[0]="http://n04.radiojar.com/mzw8z62r92quv?rj-ttl=5&rj-tok=AAABdNnKFL0ApQnO556wEFkb-Q";
 this.channelurl[1]="http://www.alifaliffm.com:8800/AlifAlif.mp3";
 this.channelurl[2]="http://www.quran-radio.org:8002/;stream.mp3";
 this.channelurl[3]="https://stream.radiojar.com/cp13r2cpn3quv";
 this.channelurl[4]="http://media-ice.musicradio.com/CapitalMP3";
 this.channelurl[5]="http://radio.talksport.com/stream";
 this.channelurl[6]="http://andromeda.shoutca.st:8192/;stream.mp3";
 this.channelurl[7]="http://icepe1.infomaniak.ch/mc-doualiya.mp3";
 this.channelurl[8]="http://17263.live.streamtheworld.com/WMCAAM.mp3";
 this.channelurl[9]="https://cervera.eldialdigital.com:21131/stream";
 this.channelurl[10]="http://playerservices.streamtheworld.com/api/livestream-redirect/CADENADIAL.mp3";
 this.channelurl[11]="http://playerservices.streamtheworld.com/api/livestream-redirect/XHFAJ_FM.mp3";
 this.channelurl[12]="http://playerservices.streamtheworld.com/api/livestream-redirect/XEJP_FM.mp3";
 this.server=0;

 this.setchannel();

 document.getElementById("next").addEventListener("click",()=>{
 if(this.server<this.channelurl.length-1){
 ++this.server;
 this.isplayed=false;
 }else{
     this.server=0;
 }
 localStorage.setItem("fvchannel" , this.server);
 this.setchannel();
});

document.getElementById("back").addEventListener("click",()=>{
if(this.server>0){
--this.server;
this.isplayed=false;
}else{
    this.server=this.channelurl.length-1;
}
localStorage.setItem("fvchannel" , this.server);
this.setchannel();
});

}
setchannel(){
    if(localStorage.getItem("fvchannel")!=null){
this.server=localStorage.getItem("fvchannel");
    }
    this.audiofill.src = this.channelurl[this.server];
    this.textchannel.innerHTML = this.channel_radio[this.server];
  this.play_pause1();
}
 play_pause1(){
 if(this.isplayed==false){
    this.audiofill.play();
    this.isplayed=true;
    this.play_pause.src ="img/pause.png";
 }else{
    this.play_pause.src ="img/play.png";
    this.audiofill.pause();
    this.isplayed=false;
 }
 }
    
 }
 onload = new Buttons();
//  الصوت

