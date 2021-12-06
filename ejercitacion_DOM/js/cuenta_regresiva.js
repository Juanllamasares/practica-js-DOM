export default function cuentaRegresiva(id,limitDate,mensaje) {
    const $cuentaRegresiva = document.getElementById(id),
    time = new Date(limitDate).getTime();

    let tiempoRegresivo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = time - now,
        dias = Math.floor(limitTime / (1000*60*60*24)),
        horas = Math.floor(limitTime % (1000*60*60*24)/(1000*60*60)),
        minutos = Math.floor(limitTime % (1000*60*60)/(1000*60)),
        segundos = Math.floor(limitTime % (1000*60)/(1000));

        $cuentaRegresiva.innerHTML = `<h3>Faltan: ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos </h3>`;

        if(limitTime < 0){
            clearInterval(tiempoRegresivo);
            $cuentaRegresiva.innerHTML = `<h3>${mensaje}</h3>`;
        }
    }, 1000);
}