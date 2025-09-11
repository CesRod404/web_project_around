
import * as CardClass from './Card.js'



export const contenedorTarjeta= document.querySelector('.elements');




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



