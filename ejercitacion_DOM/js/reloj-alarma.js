export function reloj(clock,btnPlay,btnStop){

    let temporizadorReloj;
    
    document.addEventListener("click",(e)=>{
        if(e.target.matches(btnPlay)){
            temporizadorReloj = setInterval(() => {
                let time = new Date().toLocaleTimeString();
                document.querySelector(clock).innerHTML=`<h3>${time}</h3>`;
            }, 0);

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(temporizadorReloj);
            document.querySelector(clock).innerHTML = null;
            document.querySelector(btnPlay).disabled = false;
        }
    })
};
export function alarma(alarmSound,btnPlay,btnStop){

    let temporizadorAlarma;
    const $alarma = document.createElement("audio");
    $alarma.src = alarmSound;

    document.addEventListener("click",(e)=>{
        if(e.target.matches(btnPlay)){
            temporizadorAlarma = setTimeout(() => {
                $alarma.play();
            }, 0);
            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearTimeout(temporizadorAlarma);
            $alarma.pause();
            $alarma.currentTime = 0;
            document.querySelector(btnPlay).disabled = false;
        }
    })
};