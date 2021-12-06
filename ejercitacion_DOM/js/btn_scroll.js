export default function btnScroll(btn){
    const $btnScroll = document.querySelector(btn);

    window.addEventListener("scroll",(e)=>{
        let distanciaScroll = window.pageYOffset;
        
        //console.log(window.pageYOffset);
        if (distanciaScroll>600) {
            $btnScroll.classList.remove("hidden");
        }else{
            $btnScroll.classList.add("hidden")
        }
    });

    document.addEventListener("click",(e)=>{
        if (e.target.matches(btn)) {
            window.scrollTo({
                behavior:"smooth",
                top: 0
            })
        }
    })
}