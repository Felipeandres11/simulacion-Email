//VARIABLES 

const email = document.getElementById('email');

const asunto = document.getElementById('asunto');

const mensaje = document.getElementById('mensaje');

const btnEnviar = document.getElementById('enviar');

const resetBtn = document.getElementById('resetBtn')



// EVENT LISTENER 

eventListener();

function eventListener(){
    // Inicio de la aplicacion y deshabilitar submit 

    document.addEventListener('DOMContentLoaded', inicioAPP);

    //Campos del formulario 

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //BOTON DE ENVIAR EN EL SUBMIT

    btnEnviar.addEventListener('click', enviarEmail)


    resetBtn.addEventListener('click', resetFormulario);
}


//FUNCIONES

function inicioAPP(){
    //Deshabilitar el envio 
    btnEnviar.disabled = true;

}

//VALIDA QUE EL CAMPO TENGA ALGO ESCRITO 

function validarCampo() {

    // Se valida la longitud del texto y que no este vacio 

    validarLongitud(this);

    // Validar unicamente el email 
    if(this.type == 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== ' ' && mensaje.value !== ' ' ){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
        
    }
    
}

//VERIFICA LA LONGITUD DEL TEXTO EN LOS CAMPS
function enviarEmail(e){
    // AL PRESIONAR ENVIAR 

    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //GIF QUE ENVIA EMAIL 
    const enviado = document.createElement('img');

    enviado.src = 'img/mail.gif';
    
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar gif enviado 

    setTimeout(function () { spinnerGif.style.display = 'none';

    document.querySelector('#loaders').appendChild(enviado) 
    
    setTimeout(function(){
        enviado.remove();
        formularioEnviar.reset();
    },5000);

    },3000)

    e.preventDefault();
}


function validarLongitud(campo){
    console.log(campo.value.length)

    if(campo.value.length > 0 ){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error');
    }
}


function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1)
    {
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error');
    }
}

//RESETEAR EL FORMULARIO
function resetFormulario(e){
    e.preventDefault();
    formularioEnviar.reset();


}