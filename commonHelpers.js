import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as S,i as a}from"./assets/vendor-77e16229.js";const r=document.querySelector(".input-section input"),e=document.querySelector(".input-section button"),i=document.querySelector("span[data-days]"),c=document.querySelector("span[data-hours]"),d=document.querySelector("span[data-minutes]"),l=document.querySelector("span[data-seconds]");let o;e.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(s){e.disabled=!1;const n=s[0];if(n.getTime()<=Date.now())e.disabled=!0,a.warning({message:"Please choose a date in the future",position:"topCenter",color:"red"});else{let t=function(){a.info({message:"Timer is started",position:"topCenter"}),r.disabled=!0,e.disabled=!0,o&&clearInterval(o),o=setInterval(()=>{g(n)},1e3),e.removeEventListener("click",t)};e.addEventListener("click",t)}}};S(r,C);function g(s){const n=new Date().getTime(),t=s.getTime()-n;if(t<=0){clearInterval(o),i.textContent="00",c.textContent="00",d.textContent="00",l.textContent="00",r.disabled=!1,a.info({message:"Time is over!",position:"topCenter"});return}const u=Math.floor(t/(1e3*60*60*24)),m=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(t%(1e3*60*60)/(1e3*60)),f=Math.floor(t%(1e3*60)/1e3);i.textContent=String(u).padStart(2,"0"),c.textContent=String(m).padStart(2,"0"),d.textContent=String(p).padStart(2,"0"),l.textContent=String(f).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
