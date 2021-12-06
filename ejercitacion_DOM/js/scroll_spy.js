export default function scrollSpy(){
    const $sections = document.querySelectorAll("section[data-scroll-spy]")
    const cb = (entradas)=>{
        //console.log("entradas",entradas);
        entradas.forEach((entrada)=>{
            const id = entrada.target.getAttribute("id");
            if(entrada.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
    }
    const observer = new IntersectionObserver(cb,{
        threshold: 0.5
    })

    $sections.forEach(el=>observer.observe(el));
}