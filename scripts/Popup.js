export default class Popup{
    constructor(popupSelector){
        this._popupContainer=document.querySelector(popupSelector);
    }

    _handleEscClose(){
        document.addEventListener('keydown', (evt)=>{
            if(evt.key==='Escape'){
                this.close();
            }
        })

    }
    open(){
        this._popupContainer.classList.add('modal__abierto');
        this._handleEscClose();
    }

    close(){
        this._popupContainer.classList.remove('modal__abierto')
    }


    setEventListeners(){
        this._popupContainer.querySelector('.modal__button-close').addEventListener('click',()=>{
            this.close();
        })

        this._popupContainer.addEventListener('click', (evt)=>{
            if(evt.target=== this._popupContainer){
                this.close();
            }
        })

      

    }
}