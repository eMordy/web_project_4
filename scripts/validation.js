const validateSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disable",
    inputErrorClass: "popup__input_error", //need to turn red
    errorClass: "popup__error_visible",
};

const showErrorMessage = (inputElement, formElement, errorMessage, validateSettings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(validateSettings.errorClass);
    inputElement.classList.add(validateSettings.inputErrorClass);

};

const hideErrorMessage = (inputElement, formElement, validateSettings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = " ";
    errorElement.classList.remove(validateSettings.errorClass);
    inputElement.classList.remove(validateSettings.inputErrorClass);

};

const checkInputValidity = (inputElement, formElement, validateSettings) => {
    if (!inputElement.validity.valid) {
        showErrorMessage(inputElement, formElement, inputElement.validationMessage, validateSettings);
    } else {
        hideErrorMessage(inputElement, formElement, validateSettings);
    }
};
const isValid = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
const toggleButtonState = (inputList, buttonElement, validateSettings) => {
    if (isValid(inputList)) {
        buttonElement.classList.add(validateSettings.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(validateSettings.inactiveButtonClass);
        buttonElement.disabled = false;

    }
};

const setEventListeners = (formElement, validateSettings) => {
    const inputList = Array.from(formElement.querySelectorAll(validateSettings.inputSelector));
    const buttonElement = formElement.querySelector(validateSettings.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, validateSettings);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(inputElement, formElement, validateSettings);
            toggleButtonState(inputList, buttonElement, validateSettings);
        });
    });

};

const enableValidation = (validateSettings) => {
    const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
        }); //po
        setEventListeners(formElement, validateSettings);
    });
};
enableValidation(validateSettings);