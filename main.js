var maindiv = document.querySelector(".the-main");
console.log(maindiv);
// maindiv.style.background="red";

var thetime;
var Hours;
var Minutes;
var Seconds;
var MilliSeconds;
var theDate;
console.log(Object.getOwnPropertyNames(Date.prototype));
console.log(thetime);

setInterval(()=>{
    thetime=new Date();
    console.log(thetime);
    theDate = thetime.toDateString();
    Hours   = thetime.getHours();
    Minutes = thetime.getMinutes();
    Seconds = thetime.getSeconds();
    MilliSeconds = Math.floor(thetime.getMilliseconds()/100);
    maindiv.innerHTML= `<h1>${Hours}<span>:</span>${Minutes}<span>:</span>${Seconds}<span>::</span>${MilliSeconds}</h1>
    <p style="color:black;font-size:2rem;">${theDate}</p>`
    let time = thetime.toLocaleTimeString(); // بيطلع الوقت بشكل منسق
    console.log(time);
},100)

