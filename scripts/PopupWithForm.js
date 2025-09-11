import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupContainer, callBackFunction){
        super(popupContainer);
        this._callBack=callBackFunction;
    }

    _getInputValues() {
        const inputList = Array.from(this._popupContainer.querySelectorAll('.modal__form-input'));
        const formValues = {};
        inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }


    setEventListeners(){
        super.setEventListeners();
        this._popupContainer.querySelector('.modal__forms').addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._callBack(this._getInputValues());
            this.close();
        })
    }

    close(){
        super.close();
        this._popupContainer.querySelector('.modal__forms').reset();


    }
}