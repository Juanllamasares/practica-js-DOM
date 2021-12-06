export default function detectarCamara(id){
    const $video = document.getElementById(id);

    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true,audio:false})
        .then((stream)=>{
            $video.srcObject = stream;
            $video.play();
        })
        .catch(err=> {
        $video.insertAdjacentHTML("beforebegin",`<p><b>Sucedio el siguiente error:${err}</b></p>`);
        console.log(`Sucedio el siguiente error:${err}`);
        });

    }
}