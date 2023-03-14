let s = 0;
const counter = document.getElementById("counter__id");
const start = () =>{
const stopId = setInterval(() => {
    counter.innerText = ++s;
}, 1000);

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

