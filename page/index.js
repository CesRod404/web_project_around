import * as CardClass from '../scripts/Card.js'
import {FormValidator as FormClass} from '../scripts/FormValidator.js'
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import { agregarTarjeta, api, popupConfirm } from '../scripts/utils.js';
import UserInfo from '../scripts/UserInfo.js';




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
  popup.setEventListeners();
  
}





//Tarjetas iniciales

document.addEventListener('DOMContentLoaded', () => {

 
  popupConfirm.setEventListeners();

  api.getInitialCards()

  .then(data=>{

    const sectionCards=new Section({data:data, renderer:(tarjeta)=>{

        const card= new CardClass.Card(tarjeta,".tarjeta-template",()=>handleCardClick(tarjeta.link,tarjeta.name),popupConfirm,api)
        
        const cardElement= card.generateCard();
        sectionCards.setItem(cardElement);
    }},'.elements');
    sectionCards.renderItems()

  })



})


//Creacion de validadores de formulario

const formNombre= document.querySelector('.modal__form-nombre')
const formularioNombreValidador= new FormClass(config, formNombre)
formularioNombreValidador.enableValidation();

const formTarjeta= document.querySelector('.modal__form-tarjeta')
const formularioTarjetaValidador= new FormClass(config, formTarjeta);

formularioTarjetaValidador.enableValidation()


const formAvatar=document.querySelector('.modal__form-avatar')
const formularioAvatarValidador= new FormClass(config, formAvatar);
formularioAvatarValidador.enableValidation()


//Creacion popups




///Popup cambiar avatar
const popupAvatar = new PopupWithForm('#modal-foto', (data) => {
  popupAvatar.setLoading(true,'Guardar');
  return api.updateAvatar({ avatar: data.avatar }) 
    .then((res) => {
      document.querySelector('.profile__avatar').src = res.avatar;
    })
    .catch(err => console.error("Error al actualizar avatar:", err))

    .finally(() => {
      popupAvatar.setLoading(false, "Guardar");
    });

});

popupAvatar.setEventListeners();

const botonAvatar = document.querySelector('.profile__avatar-button');
botonAvatar.addEventListener('click', () => popupAvatar.open());




///instancia usuario
const usuario=new UserInfo('.profile__info-name',".profile__info-subtitle");


///Popup para cambiar nombre
const popupNombre = new PopupWithForm('#modal-edicion', (data) => {
  popupNombre.setLoading(true,'Guardar');
  api.updateUserInfo({ name: data.nombre, about: data.acerca })
    .then((res) => {
      usuario.setUserInfo(res.name, res.about);
    })
    .catch(err => console.error("Error al actualizar perfil:", err))
    .finally(() => {
      popupNombre.setLoading(false, "Guardar");
    });
});

//Se añaden eventListeners
popupNombre.setEventListeners();

//Boton para cambiar nombre
let botonEditar=document.querySelector('.profile__info-button');
botonEditar.addEventListener('click',()=> popupNombre.open());


//Popup para agregar tarjetas
const popupTarjeta = new PopupWithForm('#modal-tarjeta', (data) => {
  popupTarjeta.setLoading(true, "Crear");
  return agregarTarjeta(data)
    .finally(() => {
      popupTarjeta.setLoading(false, "Crear");
    });
});


popupTarjeta.setEventListeners();
///Boton para agregar tarjeta
const botonAgregar=document.querySelector('.profile__addButton');
botonAgregar.addEventListener('click',()=> popupTarjeta.open())


//Popup para confirmar borrado



const avatar= document.querySelector('.profile__avatar');

//Poner nombre con API
document.addEventListener('DOMContentLoaded', () => {
  const autor = document.querySelector('.profile__info-name');
  const about= document.querySelector('.profile__info-subtitle');

  api.getUserInfo()
  .then(data => {
    autor.textContent=data.name; 
    about.textContent=data.about;
    avatar.src=data.avatar;
  })

  

  
  
});






