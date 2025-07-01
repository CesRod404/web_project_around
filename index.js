let botonEditar=document.querySelector('.profile__info__button');
let modal=document.querySelector('.modal');
let botonCerrar=document.querySelector('.modal__button__close');
let botonGuardar=document.querySelector('.modal__button');
let nombre=document.querySelector('#nombre')
let acerca=document.querySelector('#acerca')
let botonesMegusta=document.querySelectorAll('.element__container__like__img')

function meGusta(event){
    let boton = event.target;
    let estaActivo = boton.classList.toggle('activo');

    if (estaActivo) {
        boton.src = './images/MegustaActivo.svg';
    } else {
        boton.src = './images/MeGusta.svg';
    }
 
}

function cambiarColor(){
   
    if(nombre.value.trim() !=="" && acerca.value.trim() !==""){
        botonGuardar.classList.add('modal__button__activo')
    }else{
        botonGuardar.classList.remove('modal__button__activo')
        botonGuardar.setAttribute("disabled", true)
    }
}


nombre.addEventListener('input', cambiarColor)
acerca.addEventListener('input',cambiarColor)


function guardar(){
    let nombre=document.getElementById('nombre').value;
    let acercaDe=document.getElementById('acerca').value;

    let titulo=document.querySelector('.profile__info__name');
    let info=document.querySelector('.profile__info_subtitle');
    titulo.textContent= nombre;
    info.textContent= acercaDe;
    cerrarModal();


}




function abrirModal(){

    modal.classList.add('modal__abierto');
}


function cerrarModal(){
    modal.classList.remove('modal__abierto')
}


botonesMegusta.forEach(function(boton) {
    boton.addEventListener('click', meGusta);
});

botonEditar.addEventListener('click', abrirModal)
botonCerrar.addEventListener('click', cerrarModal)

botonGuardar.addEventListener('click', guardar)