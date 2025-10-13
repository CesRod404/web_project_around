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

    setLoading(isLoading, defaultText = "Guardar") {
        const submitButton = this._popupContainer.querySelector('.modal__button');
        if (isLoading) {
            submitButton.textContent = "Cargando...";
        } else {
            submitButton.textContent = defaultText;
        }
    }



    setEventListeners(){
        super.setEventListeners();
        this._popupContainer.querySelector('.modal__forms').addEventListener('submit', (evt)=>{
            evt.preventDefault();
            const result =this._callBack(this._getInputValues());
            if(result instanceof Promise){
                result.then(()=> this.close())
                .catch(err => console.error("error en sumbmit",err))
            }else{
                this.close();
            }
        })
    }

    close(){
        super.close();
        this._popupContainer.querySelector('.modal__forms').reset();


    }
}