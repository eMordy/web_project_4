const validateSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disable",
    inputErrorClass: "popup__input_error", //need to turn red
    errorClass: "popup__error_visible",
};
// if i add validateSettings its not red anymote


const showErrorMessage = (inputElement, formElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(validateSettings.errorClass);
    inputElement.classList.add(validateSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
};
//po
const hideErrorMessage = (inputElement, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(validateSettings.errorClass);
    inputElement.classList.remove(validateSettings.inputErrorClass);
    errorElement.textContent = " ";

};

const checkInputValidity = (inputElement, formElement) => {
    if (!inputElement.validity.valid) {
        showErrorMessage(inputElement, formElement, inputElement.validationMessage);
    } else {
        hideErrorMessage(inputElement, formElement);
    }
};
const isValid = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
// po
const toggleButtonState = (inputList, buttonElement) => {
    if (isValid(inputList)) {
        buttonElement.classList.add(validateSettings.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(validateSettings.inactiveButtonClass);
        buttonElement.disabled = false;

    }
};
//po
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validateSettings.inputSelector));
    const buttonElement = formElement.querySelector(validateSettings.submitButtonSelector);

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(inputElement, formElement);
            toggleButtonState(inputList, buttonElement);
        });
    });

};


//work
const enableValidation = (validateSettings) => { // put inside brackets
    const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
        });
        setEventListeners(formElement, validateSettings); //put as second
    });
};
enableValidation(validateSettings); // left as it is