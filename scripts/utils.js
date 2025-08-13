
import * as CardClass from './Card.js'
//Pestaña nuevo Lugar
let botonEditar=document.querySelector('.profile__info-button');
let botonCerrar=document.querySelector('.modal__button-close');
let botonCerrarTarjeta=document.querySelector('#modal__button-close-tarjeta')

let botonGuardar=document.querySelector('.modal__button-guardar');
const botonAgregar=document.querySelector('.profile__addButton');

let modal=document.querySelector('.modal');
const modalButton=document.querySelector('.modal__button-tarjeta');
let modalTarjeta=document.querySelector('#modal-tarjeta')

const ExitModals=Array.from(document.querySelectorAll('.modal'));

let titulo=document.querySelector('#titulo');
let imagen=document.querySelector('#imagen');

export const contenedorTarjeta= document.querySelector('.elements');

botonAgregar.addEventListener('click',()=> Abrirmodal(modalTarjeta))
botonCerrarTarjeta.addEventListener('click', ()=>cerrarModal(modalTarjeta))
CardClass.botonCerrarImagen.addEventListener('click',()=>cerrarModal(CardClass.modalImagen))

modalButton.addEventListener('click', ()=>{
    agregarTarjeta();
    cerrarModal(modalTarjeta);
})


//Pestaña cambiar nombre
botonEditar.addEventListener('click',()=> Abrirmodal(modal))
botonCerrar.addEventListener('click', ()=>cerrarModal(modal))
botonGuardar.addEventListener('click', guardar)

function guardar(){
    let nombre=document.getElementById('nombre').value;
    let acercaDe=document.getElementById('acerca').value;

    let titulo=document.querySelector('.profile__info-name');
    let info=document.querySelector('.profile__info-subtitle');
    titulo.textContent= nombre;
    info.textContent= acercaDe;
    cerrarModal(modal);

}

ExitModals.forEach((modalExit)=>{
    modalExit.addEventListener('click', (evt)=>{
        if(evt.target == modalExit){
            cerrarModal(modalExit)
        }
    })
})

const cerrarEsc= (modales)=>{
    document.addEventListener('keydown', (evt)=>{
        if(evt.key == 'Escape'){
            modales.forEach((ElementoModal)=>{
                cerrarModal(ElementoModal)
            })
        }
    })
}

cerrarEsc(ExitModals)

function Abrirmodal(modalElegido){
    modalElegido.classList.add('modal__abierto');
}


function cerrarModal(modalElegido){
    modalElegido.classList.remove('modal__abierto')
    

}



function agregarTarjeta(){
    let Datos={
        name:titulo.value,
        link:imagen.value,
        description:""
    }
    const cardNew= new CardClass.Card(Datos, ".tarjeta-template");
    const cardElement= cardNew.generateCard();
    contenedorTarjeta.prepend(cardElement)
}



