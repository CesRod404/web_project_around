
export class FormValidator{
    constructor(data, elementoForm){
        this._form=data.formSelector;
        this._input=data.inputSelector;
        this._submitButton=data.submitButtonSelector;
        this._inactive=data.inactiveButtonClass;
        this._inputError=data.inputErrorClass;
        this._error=data.errorClass;
        this._elementoForm=elementoForm;
    }




    _showInputError(inputElement){
        const errorElement= this._elementoForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputError);
        const errorMessage=inputElement.validationMessage;
        if(errorElement){
            errorElement.textContent=errorMessage;
            errorElement.classList.add(this._error);
        }
    }


    _hideInputError(inputElement){
        const errorElement= this._elementoForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputError)
        if(errorElement){
            errorElement.classList.remove(this._error)
            errorElement.textContent="";
        }
    }

    _toggleButton(){
        const inputList= Array.from(this._elementoForm.querySelectorAll(this._input));
        const botonSubmit= this._elementoForm.querySelector('.modal__button')

        const allValid= inputList.every((inputElement)=>{
           return inputElement.validity.valid;
        })

        if (allValid){
            botonSubmit.classList.remove(this._inactive);
            botonSubmit.disabled=false;
        }else{
            botonSubmit.classList.add(this._inactive);
            botonSubmit.disabled=true;
        }
    }

    _isValid(inputElement){

        if(!inputElement.validity.valid){
            this._showInputError(inputElement);
        }else{
            this._hideInputError(inputElement);
        }
        this._toggleButton();
    }

    _setEventListeners(){
        const inputList= Array.from(this._elementoForm.querySelectorAll(this._input));
        inputList.forEach((inputElement)=>{
            inputElement.addEventListener('input', ()=>{
                this._isValid(inputElement);
            })
        })
    }

    enableValidation(){

        
        this._elementoForm.querySelector(this._form).addEventListener('submit', (evt)=>{
            evt.preventDefault();
        })
        this._setEventListeners()
    }


}




