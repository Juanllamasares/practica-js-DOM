
import btnScroll from "./btn_scroll.js";
import cuentaRegresiva from "./cuenta_regresiva.js";
import estadoConexion from "./deteccion_red.js";
import detectarCamara from "./detectar_camara.js";
import dispositivoUsuario from "./detector_dispositivos.js";
import buscador from "./filtro_busqueda.js";
import geolocalizacion from "./geolocalizacion.js";
import hamburguerMenu from "./menu.js";
import narrador from "./narrador.js";
import responsiveMedia from "./obj_responsive.js";
import responsiveTest from "./prueba_responsive.js";
import { reloj,alarma } from "./reloj-alarma.js";
import scrollSpy from "./scroll_spy.js";
import slider from "./slider.js";
import sortear from "./sorteo.js";
import { moverBola, shortcuts } from "./teclado.js";
import theme from "./theme.js";
import validarFormulario from "./validar_formulario.js";
import videoInteligente from "./video_inteligente.js";


const doc = document;

doc.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");

    reloj("#reloj","#activar-reloj","#desactivar-reloj");

    alarma("/assets/alarma.mp3","#activar-alarma","#desactivar-alarma");

    cuentaRegresiva("cuenta-regresiva","October 13,2022 15:57:00","Feliz dia...");

    btnScroll(".btn-scroll");

    responsiveMedia("youtube","(min-width:1024px",`<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92" rel="noopener">Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveMedia("gmaps","(min-width:1024px",`<a href="https://goo.gl/maps/mF8BwoKzffskqFYi7" target="_blank" rel="noopener">Ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.6084331632887!2d-65.18212741087649!3d-31.94438668179224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd4bd3b644fcb%3A0xd46fec37c3ad6c0c!2sI.P.E.T.%20N%C2%B0%20260%20%22Industrial%20Ernesto%20Arnaldo%20Mart%C3%ADnez%22!5e0!3m2!1ses-419!2sar!4v1634233166738!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);

    responsiveTest("responsive-tester");

    dispositivoUsuario("detector");

    detectarCamara("camara");

    geolocalizacion("geo");

    buscador(".buscador",".card");

    sortear(".player","#btn-ganador");

    slider();

    scrollSpy();

    videoInteligente();

    validarFormulario();

});


doc.addEventListener("keydown",(e)=>{
    moverBola(e,".pelota",".zona-evento")
    shortcuts(e);
});

theme(".btn-theme","dark-mode");

estadoConexion();

narrador();