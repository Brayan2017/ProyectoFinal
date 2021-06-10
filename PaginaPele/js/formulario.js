var nombre  = document.getElementById('name');
var correo = document.getElementById('correo');
var numero = document.getElementById('numero');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarformulario(){
    console.log('El formulario ha sido enviado...');

    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
    mensajesError.push('Ingresa tu nombre')
    }

    if(correo.value === null || correo.value === ''){
        mensajesError.push('Ingresa tu correo')
    }
    
    if(numero.value === null || numero.value === ''){
        mensajesError.push('Ingresa tu numero')
    }

    error.innerHTML=  mensajesError.join(', ');

    return false;
}