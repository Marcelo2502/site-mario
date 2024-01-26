/*<script>
    const form = document.querySelector('.fale-conosco')
    const background = document.querySelector('.mascara-form')

    function showForm() {
        form.style.left = '50%'
        form.style.transform = 'translateX(-50%)'
        background.style.visibility = 'visible'
    }

    function hideForm() {
        form.style.left = '-330px'
        form.style.transform = 'translateX(0)'
        background.style.visibility = 'hidden'
    }
</script>*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}