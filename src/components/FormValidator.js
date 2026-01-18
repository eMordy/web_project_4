export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;

        this._inputList = Array.from(
            this._formElement.querySelectorAll(this._inputSelector)
        );

        this._button = this._formElement.querySelector(this._submitButtonSelector);
    }


    /*constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;
        // this._inputList = Array.from(formElement.querySelector(this._inputSelector));
        this._inputList = Array.from((this._inputSelector));

        // console.log(formElement)
        // this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
        // this._button = this._formElement.querySelector(this._submitButtonSelector);
        this._button = this._submitButtonSelector;
        console.log(formElement)

    } */
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


    // _toggleButtonState() {
    //     if (this._isValid(this._inputList)) {
    //         this._submitButton.classList.add(this._inactiveButtonClass);
    //         this._submitButton.disabled = true;
    //     } else {
    //         this._submitButton.classList.remove(this._inactiveButtonClass);
    //         this._submitButton.disabled = false;

    //     }
    // }
    /* _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._button.classList.add(this._inactiveButtonClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._inactiveButtonClass);
            this._button.disabled = false;
        }
    }*/
    _toggleButtonState() {
        if (this._isValid(this._inputList)) {
            this._button.classList.add(this._inactiveButtonClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._inactiveButtonClass);
            this._button.disabled = false;
        }
    }


    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideErrorMessage(inputElement)
        });
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
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