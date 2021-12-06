export default function slider(){
    const $slides = document.querySelectorAll(".slider-slide"),
    $btnPrev = document.querySelector(".slider-btn .prev"),
    $btnNext = document.querySelector(".slider-btn .next");

    let i = 0;

    document.addEventListener("click", e=>{
        if(e.target === $btnPrev){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            
            if(i < 0){
                i = $slides.length-1;
            }

            $slides[i].classList.add("active");
        }

        if(e.target === $btnNext){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
            
            if(i >= $slides.length){
                i = 0;
            }

            $slides[i].classList.add("active");
        }
    });

}