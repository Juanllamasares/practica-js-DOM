
let x = 0, y = 0;

export function moverBola(e,pelota,zonaEvento) {

    const $pelota = document.querySelector(pelota), 
    $zona = document.querySelector(zonaEvento);

    let limitePelota = $pelota.getBoundingClientRect(),
    limitezona = $zona.getBoundingClientRect();

    //console.log(e.keyCode);

    switch (e.keyCode) {
        case 37:
            e.preventDefault();

            if(limitePelota.left > limitezona.left)
            x--;
            break;
        case 38:
            e.preventDefault();

            if(limitePelota.top > limitezona.top)
            y--;
            break;
        case 39:
            e.preventDefault();

            if(limitePelota.right < limitezona.right)
            x++;
            break;
        case 40:
            e.preventDefault();

            if(limitePelota.bottom < limitezona.bottom)
            y++;
            break;
        default:
            break;
    }
    $pelota.style.transform = `translate(${x*10}px,${y*10}px)`
}


export function shortcuts(e) {
    
}