import * as CardClass from './Card.js'
import {FormValidator as FormClass} from './FormValidator.js'
import { contenedorTarjeta } from './utils.js';


const initialCard = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    description:"Imagen del Valle de Yosemite"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    description:"Imagen del Lago Louise"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    description:"Imagen de las montañas calvas"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    description:"Imagen de Latemar"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    description:"Imagen del Parque Nacional de la Vanoise"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    description:"Imagen del Lago di Braires"
  }
];

const config={
    formSelector: ".modal__forms",
    inputSelector: ".modal__form-input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "button__disabled",
    inputErrorClass: "modal__input-error",
    errorClass: "modal__error_visible"
}




//Tarjetas iniciales
initialCard.forEach((tarjeta)=>{
    const card= new CardClass.Card(tarjeta,".tarjeta-template")
    const cardElement= card.generateCard();
    contenedorTarjeta.append(cardElement);
})


//Creacion de validadores de formulario

const formNombre= document.querySelector('.modal__form-nombre')
const formularioNombreValidador= new FormClass(config, formNombre)
formularioNombreValidador.enableValidation();

const formTarjeta= document.querySelector('.modal__form-tarjeta')
const formularioTarjetaValidador= new FormClass(config, formTarjeta);

formularioTarjetaValidador.enableValidation()