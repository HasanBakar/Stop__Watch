const back = document.getElementById("container__id");
setInterval(() => {
    const R = Math.round(Math.random() * 256);
const G = Math.round(Math.random() * 256);
const B = Math.round(Math.random() * 256);
const A = parseFloat(Math.random().toFixed(2));
    back.style.backgroundColor =`rgba(${R}, ${G}, ${B}, ${A})`;
    // console.log(R, G, B, A);
}, 1900);
