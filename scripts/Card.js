

export class Card {
    constructor(data, cardSelector,handleCardClick,popupConfirm,api){
        this._cardSelector=cardSelector;
        this._name=data.name;
        this._link=data.link;
        this._idCard=data._id;
        this._isLiked=data.isLiked;
        this._description=data.description;
        this._handleCardClick=handleCardClick;
        this._popupConfirm=popupConfirm;
        this._api= api;
    }

    _getTemplate(){
        const cardElement=document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

        return cardElement;
    }

    _deleteElement(){

        this._element.remove()
        this._element = null;

    }


    getID(){
        return this._idCard;
    }
    
    getLike(){
        return this._isLiked;
    }


    
    _handleLike() {
        const estaActivo = this._botonLike.classList.contains('activo');

        if (!estaActivo) {
            // Dar like
            this._api.putLike(this._idCard)
            .then(data => {
                this._isLiked = true;
                this._botonLike.classList.add('activo');
                this._botonLike.src = 'images/meGustaActivo.svg';
            })
            .catch(err => console.error("Error al dar like:", err));
        } else {
            // Quitar like
            this._api.deleteLike(this._idCard)
            .then(data => {
                this._isLiked = false;
                this._botonLike.classList.remove('activo');
                this._botonLike.src = 'images/MeGusta.svg';
            })
            .catch(err => console.error("Error al quitar like:", err));
        }
    }



        
    

    _handleDeleteClick() {
    this._popupConfirm.open(() => {
        this._api.deleteCard(this._idCard)
        .then(()=>{
            this._deleteElement();
        })
        
    });
}






    _setEventListeners(){
        this._botonLike = this._element.querySelector('.element__container-like-img');

        this._element.querySelector('.element__image').addEventListener('click', ()=>{
            this._handleCardClick();
        });


        this._element.querySelector('.element__delete-button').addEventListener('click', ()=>{
            this._handleDeleteClick();
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

        this._botonLike = this._element.querySelector('.element__container-like-img');
        if (this._isLiked) {
            this._botonLike.classList.add('activo');
            this._botonLike.src = 'images/meGustaActivo.svg';
        } else {
            this._botonLike.classList.remove('activo');
            this._botonLike.src = 'images/MeGusta.svg';

        }


        return this._element;
            
    }


}

