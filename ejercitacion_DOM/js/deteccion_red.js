export default function estadoConexion(){
    //console.log(navigator.onLine);
    const isOnLine = ()=>{
        const $div = document.createElement("div");

        if(navigator.onLine){
            $div.textContent = "Conexion Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        document.body.insertAdjacentElement("afterbegin",$div);

        setTimeout(() => {
            document.body.removeChild($div)
        }, 2000);
    }

    window.addEventListener("online",(e)=>isOnLine());
    window.addEventListener("offline",(e)=>isOnLine());


}