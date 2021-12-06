export default function dispositivoUsuario(id) {
    const $id = document.getElementById(id),
    isMobile = {
        android:()=>navigator.userAgent.match(/android/i),
        ios:()=>navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows:()=>navigator.userAgent.match(/windows phone/i),
        any: function(){return this.android()||this.ios()||this.windows()}
    },
    isDesktop = {
        linux:()=>navigator.userAgent.match(/linux/i),
        mac:()=>navigator.userAgent.match(/mac os/i),
        windows:()=>navigator.userAgent.match(/windows nt/i),
        any: function(){return this.linux()||this.mac()||this.windows()}
    },
    isBrowser = {
        chrome:()=>navigator.userAgent.match(/chrome/i),
        safari:()=>navigator.userAgent.match(/safari/i),
        firefox:()=>navigator.userAgent.match(/firefox/i),
        opera:()=>navigator.userAgent.match(/opera|opera mini/i),
        ie:()=>navigator.userAgent.match(/msie|iemobile/i),
        edge:()=>navigator.userAgent.match(/edge/i),
        any: function(){return this.chrome()||this.safari()||this.firefox()||this.opera()||this.ie()||this.edge()}
    };

    $id.innerHTML = `
    <ul>
        <li><b>User Agent</b>: ${navigator.userAgent}</li><br>
        <li><b>Sistema operativo</b>: ${isMobile.any()?isMobile.any():isDesktop.any()}</li><br>
        <li><b>Navegador</b>: ${isBrowser.any()}</li>
    `;
}