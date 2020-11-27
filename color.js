class Color {
    constructor(){
        // the buttone
this.color1 = document.getElementById("color1");
this.color1.addEventListener("click",()=>{
   this.playcolor("colorm1");
});
this.color2 = document.getElementById("color2");
this.color2.addEventListener("click",()=>{
    this.playcolor("colorm2");
});
this.color3 = document.getElementById("color3");
this.color3.addEventListener("click",()=>{
    this.playcolor("colorm3");
});
this.color4 = document.getElementById("color4");
this.color4.addEventListener("click",()=>{
    this.playcolor("colorm4");
});
this.color4 = document.getElementById("color5");
this.color4.addEventListener("click",()=>{
    this.playcolor("colorm5");
});
this.color4 = document.getElementById("color6");
this.color4.addEventListener("click",()=>{
    this.playcolor("colorm6");
});
this.color4 = document.getElementById("color7");
this.color4.addEventListener("click",()=>{
    this.playcolor("colorm7");
});
// the function
if(localStorage.getItem("color")==null){
    document.body.style.background="linear-gradient(to right , red , blue)";
    document.getElementById("header").style.background="linear-gradient(to right , red , blue)";
    document.getElementById("main_radio").style.background="whitesmoke";}
this.playcolor(localStorage.getItem("color"));
    }
playcolor(colorm){
if(colorm == "colorm1"){
document.body.style.background="linear-gradient(to right , red , blue)";
document.getElementById("header").style.background="linear-gradient(to right , red , blue)";
document.getElementById("main_radio").style.background="whitesmoke";
}
else if(colorm =="colorm2"){
    document.body.style.background="linear-gradient(to right, #c31432, #240b36)";
    document.getElementById("header").style.background="linear-gradient(to right, #c31432, #240b36)";
    document.getElementById("main_radio").style.background="whitesmoke";
}
else if(colorm == "colorm3"){
    document.body.style.background="linear-gradient(to right, #a8ff78, #78ffd6)";
    document.getElementById("header").style.background="linear-gradient(to right, #a8ff78, #78ffd6)";
    document.getElementById("main_radio").style.background="whitesmoke";
}
else if(colorm =="colorm4"){
    document.body.style.background="linear-gradient(to right, #8a2387, #e94057, #f27121)";
    document.getElementById("header").style.background="linear-gradient(to right, #8a2387, #e94057, #f27121)";
    document.getElementById("main_radio").style.background="whitesmoke";
}
else if(colorm =="colorm5"){
    document.body.style.background="linear-gradient(to right, #bdc3c7, #2c3e50)";
    document.getElementById("header").style.background="linear-gradient(to right, #bdc3c7, #2c3e50)";
    document.getElementById("main_radio").style.background="whitesmoke";
}
else if(colorm =="colorm6"){
    document.body.style.background="linear-gradient(to right, #0f0c29, #302b63, #24243e)";
    document.getElementById("header").style.background="linear-gradient(to right, #0f0c29, #302b63, #24243e)";
    document.getElementById("main_radio").style.background="whitesmoke";
}
else if(colorm =="colorm7"){
    document.body.style.background="linear-gradient(to right, #9796f0, #fbc7d4)";
    document.getElementById("header").style.background="linear-gradient(to right, #9796f0, #fbc7d4)";
    document.getElementById("main_radio").style.background="whitesmoke";
}
localStorage.setItem("color",colorm);
}

}
onload = new Color();