export default function narrador(){
    const $narradorSelected = document.getElementById("select-narrador"),
    $textArea = document.getElementById("txt-narrado"),
    $btnNarrador = document.getElementById("btn-narrador"),
    narradores = new SpeechSynthesisUtterance();

    //console.log(narradores);

    let voces = [];

    document.addEventListener("DOMContentLoaded",(e)=>{
        //console.log(window.speechSynthesis);
        //console.log(window.speechSynthesis.getVoices());
        window.speechSynthesis.addEventListener("voiceschanged",(e)=>{
            //console.log(e);
            voces = window.speechSynthesis.getVoices();
            //console.log(voces);
            voces.forEach(voz=>{
                const $opcion = document.createElement("option");
                $opcion.value = voz.name;
                $opcion.textContent = `${voz.name}---->${voz.lang}`;
    
                $narradorSelected.appendChild($opcion);
            })
        });

    });


    document.addEventListener("change",(e)=>{
        if(e.target === $narradorSelected){
            narradores.voice = voces.find(voz => voz.name === e.target.value);
        }

        //console.log(narradores);
    });

    document.addEventListener("click",(e)=>{
        //alert("click");
        if(e.target === $btnNarrador){
            narradores.text = $textArea.value;
            window.speechSynthesis.speak(narradores);
        }
    });
}