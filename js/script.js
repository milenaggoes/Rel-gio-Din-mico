const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    horas.textContent = String(hr).padStart(2, '0');
    minutos.textContent = String(min).padStart(2, '0');
    segundos.textContent = String(s).padStart(2, '0');

   
})