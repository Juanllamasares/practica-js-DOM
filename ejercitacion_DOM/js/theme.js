export default function theme(btn,classDark) {
    const $btnTheme = document.querySelector(btn),
    $selector = document.querySelectorAll("[data-dark]");
    
    //console.log($selector);

    const lightMode = ()=>{
        $selector.forEach(el=>el.classList.remove(classDark));
        $btnTheme.textContent = moon;
        localStorage.setItem("theme","light");
    };

    const darkMode = ()=>{
        $selector.forEach(el=>el.classList.add(classDark));
        $btnTheme.textContent = sun;
        localStorage.setItem("theme","dark");
    };

    let sun = "☀️", moon = "🌙";

    document.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            //console.log($btnTheme.textContent);
            if($btnTheme.textContent === moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });

    document.addEventListener("DOMContentLoaded",(e)=>{
        if (localStorage.getItem("theme")=== null) localStorage.setItem("theme","light");
        if (localStorage.getItem("theme")=== "light") lightMode();
        if (localStorage.getItem("theme")=== "dark") darkMode();
    })
}