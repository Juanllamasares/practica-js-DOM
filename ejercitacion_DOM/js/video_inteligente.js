export default function videoInteligente(){
    const $videos = document.querySelectorAll("video[data-smart-video]");

    const cb = (entradas)=>{
        entradas.forEach((entrada)=>{
            if(entrada.isIntersecting){
                //console.log(entrada);
                entrada.target.play();
            }else{
                entrada.target.pause();
            }

            window.addEventListener("visibilityChange",e => document.visibilityState==="visible"?entrada.play():entrada.pause);
        })
    }

    const observer = new IntersectionObserver(cb,{
        threshold: 0.5
    });

    $videos.forEach(el=>observer.observe(el));
}