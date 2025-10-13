
import * as CardClass from './Card.js'

import Api  from './Api.js';

import PopupWithConfirmation from './PopupWithConfirmation.js';

export const contenedorTarjeta= document.querySelector('.elements');

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "d58b8fd0-d045-4306-ab1a-43b11416da2d",
    "Content-Type": "application/json"
  }
});

export const popupConfirm = new PopupWithConfirmation('#modal-ad');

export function agregarTarjeta(data) {
  const Datos = {
    name: data.titulo.trim(),
    link: data.imagen.trim()
  };

  return api.addCard(Datos) 
    .then(data => {
      const cardNew = new CardClass.Card(
        data,
        ".tarjeta-template",
        () => handleCardClick(data.link, data.name), popupConfirm, api);
      const cardElement = cardNew.generateCard();
      contenedorTarjeta.prepend(cardElement);
    })
    .catch(err => console.error("Error al crear tarjeta:", err));
}



export function borrarTarjeta(id){
  api.deleteCard(id);
  
}


