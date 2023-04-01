let clock = document.getElementById('clock');

setInterval(() => {
    let h = new Date().toLocaleTimeString().toString().split(':');
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    clock.innerText = `${h[0]} : ${m} : ${s} ${h[2].slice(3)}`;
}, 1000);