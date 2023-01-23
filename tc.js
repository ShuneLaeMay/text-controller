const fonts=["Jokerman Regular","Latin Wide","Lithos Pro","Colonna MT Regular","Comic Sans MS","Ink Free Regular","Courier Regular"];
const text=document.querySelector("#text");
const output=document.querySelector("#output");
const count=document.querySelector("#count");
const color=document.querySelector("#color");
const fontSize=document.querySelector("#fontSize");
const fontFamily=document.querySelector("#fontFamily");

fonts.forEach((font)=>{
    // console.log(font);
    // console.log(new Option(font,font));
    fontFamily.append(new Option(font,font));

})

text.addEventListener("keyup", (event) =>{
    output.innerText=text.value;
    //console.log(event.target.value)
    count.innerText=text.value.length;
});

color.addEventListener("change",event=>{
    output.style.color=event.target.value;
});

fontSize.addEventListener("change",event=>{
    //console.log(fontSize.value);
    output.style.fontSize=event.target.value+"px";

});

fontFamily.addEventListener("change",event=>{
    output.style.fontFamily=event.target.value;
});



