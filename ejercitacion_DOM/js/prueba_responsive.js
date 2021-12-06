export default function responsiveTest(form) {
    const $form = document.getElementById(form);

    let tester;

    document.addEventListener("submit",(e)=>{
        if (e.target === $form)// es igual q poner e.target.matches($form)
        {
            e.preventDefault();

            tester = window.open($form.direccion.value,"tester",`innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);
        }

        document.addEventListener("click",(e)=>{
            if(e.target === ($form.cerrar))tester.close();
        })
    })
}