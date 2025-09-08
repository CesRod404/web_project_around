
import * as CardClass from './Card.js'



export const contenedorTarjeta= document.querySelector('.elements');


export function guardar(usuario){
    const popup = document.querySelector('#modal-edicion');
    const nombre = popup.querySelector('#nombre').value;
    const acercaDe = popup.querySelector('#acerca').value;

    usuario.setUserInfo(nombre,acercaDe);

}


export function agregarTarjeta(){
    let titulo=document.querySelector('#titulo');
    let imagen=document.querySelector('#imagen');
    let Datos={
        name:titulo.value,
        link:imagen.value,
        description:""
    }
    const cardNew= new CardClass.Card(Datos, ".tarjeta-template");
    const cardElement= cardNew.generateCard();
    contenedorTarjeta.prepend(cardElement)
}



