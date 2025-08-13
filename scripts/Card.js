

//Modales
export let modalImagen=document.querySelector('#modal-imagen')
export let botonCerrarImagen=document.querySelector('#modal__button-imagen');

export class Card {
    constructor(data, cardSelector){
        this._cardSelector=cardSelector;
        this._name=data.name;
        this._link=data.link;
        this._description=data.description;
    }

    _getTemplate(){
        const cardElement=document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

        return cardElement;
    }

    _deleteElement(){
        this._element.remove()
    }

    _handleOpenModal(){
        modalImagen.querySelector('.modal__imagen').src=this._link;
        modalImagen.querySelector('.modal__texto').textContent=this._name
        modalImagen.classList.add('modal__abierto');
    }

    _handleCloseModal(){
        modalImagen.querySelector('.modal__imagen').src="";
        modalImagen.classList.remove('modal__abierto')
    }

    _handleLike(){
        let estaActivo = this._botonLike.classList.toggle('activo');
        if (estaActivo) {
            this._botonLike.src = './images/MegustaActivo.svg';
        } else {
            this._botonLike.src = './images/MeGusta.svg';
        }
    }



    _setEventListeners(){
        this._botonLike = this._element.querySelector('.element__container-like-img');

        this._element.querySelector('.element__image').addEventListener('click', ()=>{
            this._handleOpenModal();
        });

        botonCerrarImagen.addEventListener('click',()=>{
            this._handleCloseModal();
        })

        this._element.querySelector('.element__delete-button').addEventListener('click', ()=>{
            this._deleteElement();
        })
        
        this._botonLike.addEventListener('click', ()=>{
            this._handleLike();
        })
        
  
    }

    

    generateCard(){
        this._element= this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__image').src=this._link;
        this._element.querySelector('.element__image').alt=this._description;
        this._element.querySelector('.element__container-text').textContent=this._name;

        return this._element;
            
    }


}

