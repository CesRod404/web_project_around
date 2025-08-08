const config={
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}
  




const showInputError= (formElement, inputElement, errorMessage)=>{
    const errorElement= formElement.querySelector(`.${inputElement.id}-error`);
    //parte para el span
    inputElement.classList.add(config.inputErrorClass);
    if(errorElement){
        errorElement.textContent= errorMessage;
        errorElement.classList.add(config.errorClass);
    }
    
}


const hideInputError= (formElement, inputElement)=>{
    const errorElement= formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass)
    if(errorElement){
    errorElement.classList.remove(config.errorClass)
    errorElement.textContent="";
    }

}

const toggleButton=(formElement)=>{
    const inputList= Array.from(formElement.querySelectorAll(config.inputSelector))
    const submitButton= formElement.querySelector(config.submitButtonSelector);

    const allInputsValid= inputList.every((inputElement)=> {
        return inputElement.validity.valid ; 
    })

    if(allInputsValid){
        submitButton.classList.remove(config.inactiveButtonClass)
        submitButton.disabled= false;
    }else{
        submitButton.classList.add(config.inactiveButtonClass);
        submitButton.disabled=true;
    }
}


const isValid=  (formElement, inputElement)=>{
    if(!inputElement.validity.valid){
        showInputError(formElement,inputElement, inputElement.validationMessage);
        
    } else {
        hideInputError(formElement,inputElement);
    }
    toggleButton(formElement);

    
}

const setEventListeners = (formElement)=>{
    const inputList= Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement)=>{
        inputElement.addEventListener('input', () =>{
            isValid(formElement, inputElement);
        })
        
        
    })
}

const enableValidation=()=>{
    const formList= Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((formElement)=>{
        formElement.addEventListener('submit', (evt)=>{
            evt.preventDefault()
        })
        setEventListeners(formElement)
    
    });

    
};

enableValidation();