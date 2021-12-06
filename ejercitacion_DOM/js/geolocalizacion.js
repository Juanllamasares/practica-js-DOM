export default function geolocalizacion(id){
    const $id = document.getElementById(id);
    //console.log(navigator.geolocation);
    const opciones = {
        enableHighAccuracy:true,
        timeOut:5000,
        maximumAge:0
    };

    const proceso = (posicion)=>{
        let coords = posicion.coords;

        //console.log(posicion);

        $id.innerHTML = `
            <p>Tu posicion es:</p>
            <ul>
                <li>Latitud:<b>${coords.latitude}</b></li>
                <li>Longitud:<b>${coords.longitude}</b></li>
                <li>Presicion:<b>${coords.accuracy}</b></li>
            </ul>
            <a href=https://www.google.com.ar/maps/@${coords.latitude},${coords.longitude},15z target="_blank" rel="noopener">Ver en google maps</a>`

    };

    const error = (err)=>{
        $id.insertAdjacentHTML("afterbegin",`<p><b>Sucedio el siguiente error:${err.code},${err.message}</b></p>`);
        //console.log(`Ocurrio el siguiente error: ${err}`);
    };

    navigator.geolocation.getCurrentPosition(proceso,error,opciones);
}