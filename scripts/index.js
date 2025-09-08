import * as CardClass from './Card.js'
import {FormValidator as FormClass} from './FormValidator.js'
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import { guardar, agregarTarjeta } from './utils.js';
import UserInfo from './UserInfo.js';



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


const handleCardClick=(link,name)=>{
  const popup= new PopupWithImage('#modal-imagen',link,name);
  popup.open();
  
}


const usuario=new UserInfo('.profile__info-name',".profile__info-subtitle");



//Tarjetas iniciales
const sectionCards=new Section({data:initialCard, renderer:(tarjeta)=>{
  const card= new CardClass.Card(tarjeta,".tarjeta-template",()=>handleCardClick(tarjeta.link,tarjeta.name))
  const cardElement= card.generateCard();
  sectionCards.setItem(cardElement);
}},'.elements');

sectionCards.renderItems()


//Creacion de validadores de formulario

const formNombre= document.querySelector('.modal__form-nombre')
const formularioNombreValidador= new FormClass(config, formNombre)
formularioNombreValidador.enableValidation();

const formTarjeta= document.querySelector('.modal__form-tarjeta')
const formularioTarjetaValidador= new FormClass(config, formTarjeta);

formularioTarjetaValidador.enableValidation()

//Creacioin popups

///Popup para cambiar nombre
const popupNombre= new PopupWithForm('#modal-edicion',()=>guardar(usuario));
//Boton para cambiar nombre
let botonEditar=document.querySelector('.profile__info-button');
botonEditar.addEventListener('click',()=> popupNombre.open());


//Popup para agregar tarjetas
const popupTarjeta= new PopupWithForm('#modal-tarjeta',agregarTarjeta);
///Boton para agregar tarjeta
const botonAgregar=document.querySelector('.profile__addButton');
botonAgregar.addEventListener('click',()=> popupTarjeta.open())
