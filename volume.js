class Volume1  {
    constructor(){
     this.audiofill12=document.getElementById("radio12")
        this.audiofill12.volume = 50/100;

        this.velume_radio=document.getElementById("volume25");
        this.velume_radio.addEventListener("change",()=>{
            this.audiofill12.volume = this.velume_radio.value/100 ;
        });
        
        this.velume_speed=document.getElementById("speed");
        this.velume_speed.playbackRate=1;
        this.velume_speed.addEventListener("change",()=>{
            this.audiofill12.playbackRate =this.velume_speed.value/100;
        });
    }
}
onload =new Volume1();
