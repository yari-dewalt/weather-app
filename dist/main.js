(()=>{"use strict";const t=document.getElementById("form"),e=document.getElementById("city");t.addEventListener("submit",(t=>{t.preventDefault(),async function(t){const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=d679f5647a6d4e16a6522939232510&q=${t}`,{mode:"cors"}),o=await e.json();console.log(o);const n=`${o.location.name}, ${o.location.region}`;console.log(n);const c=o.current.temp_f;console.log(c);const a=o.current.condition.text;console.log(a)}(e.value),e.value=""}))})();