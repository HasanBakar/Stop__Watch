let s = 0;
const counter = document.getElementById("counter__id");
const start = () =>{
const counterColor = document.getElementById("counter__id");
const stopId = setInterval(() => {
    counter.innerText = ++s;
    const R = Math.round(Math.random() * 256);
    const G = Math.round(Math.random() * 256);
    const B = Math.round(Math.random() * 256);
    const A = parseFloat(Math.random().toFixed(2));
    counterColor.style.color =`rgba(${R}, ${G}, ${B}, ${A})`;
}, 1050);

document.getElementById("btn_stop_id").addEventListener('click', ()=>{
clearInterval(stopId)
})

document.getElementById("btn_reset_id").addEventListener('click', ()=>{
counter.innerHTML = `
<h1 id="counter__id">00</h1>
`;
s = 0;
})

}

