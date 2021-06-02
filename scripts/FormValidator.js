const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disable",
    inputErrorClass: "popup__input_error", //need to turn red
    errorClass: "popup__error_visible",
}
class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }
    _showErrorMessage(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }
    _hideErrorMessage(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = " ";
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showErrorMessage(inputElement, inputElement.validationMessage);
        } else {
            this._hideErrorMessage(inputElement);
        }
    }
    _isValid(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }


    toggleButtonState() {
        if (this._isValid(this._inputList)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;

        }
    }
    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });

        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
    }

    enableValidation() {
        this._setEventListeners();
    }
}

export { settings, FormValidator };

//test
// _enableSubmitButton(buttonElement) {
//     buttonElement.classList.remove(this._inactiveButtonClass);
//     buttonElement.removeAttribute("disabled");
// }

// _disableSubmitButton(buttonElement) {
//     buttonElement.classList.add(this._inactiveButtonClass);
//     buttonElement.setAttribute("disabled", true);
// }
// toggleButtonState(inputList, buttonElement) { // if work check second option
//     if (this._isValid(inputList)) {
//         this._disableSubmitButton(buttonElement);
//     } else {
//         this._enableSubmitButton(buttonElement);
//     }
// }

//const validateSettings = {
// formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__submit",
//     inactiveButtonClass: "popup__submit_disable",
//     inputErrorClass: "popup__input_error", //need to turn red
//     errorClass: "popup__error_visible",
// };