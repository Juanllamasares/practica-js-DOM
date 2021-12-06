export default function sortear(selector,btn){

    const getGanador = (selector)=>{
        const $players = document.querySelectorAll(selector);
        let aleatorio = Math.floor(Math.random()*($players.length));
        let ganador = $players[aleatorio];

        return `El ganador es ${ganador.textContent}`;

    };

    document.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let resultado = getGanador(selector);
            alert(resultado);
            console.log(resultado);
        }
    })

}