const validateSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disable",
    inputErrorClass: "popup__input_error", //need to turn red
    errorClass: "popup__error_visible",
};

const showErrorMessage = (inputElement, formElement, errorMessage, { errorClass, inputErrorClass }) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    inputElement.classList.add(inputErrorClass);

};
//po
const hideErrorMessage = (inputElement, formElement, { errorClass, inputErrorClass }) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = " ";
    errorElement.classList.remove(errorClass);
    inputElement.classList.remove(inputErrorClass);

};

const checkInputValidity = (inputElement, formElement) => { // lo hayav lehosif?
    if (!inputElement.validity.valid) {
        showErrorMessage(inputElement, formElement, inputElement.validationMessage, {
            errorClass: "popup__error_visible",
            inputErrorClass: "popup__input_error",
        });
    } else {
        hideErrorMessage(inputElement, formElement, {
            errorClass: "popup__error_visible",
            inputErrorClass: "popup__input_error",
        });
    }
};
const isValid = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
// ad po avad now change btn
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => { //if .,., valSet not work
    if (isValid(inputList)) {
        buttonElement.classList.add(validateSettings.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(validateSettings.inactiveButtonClass);
        buttonElement.disabled = false;

    }
};

//po
const setEventListeners = (formElement, validateSettings) => {
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
//also gibuy worked
// const validateSettings = {
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__submit",
//     inactiveButtonClass: "popup__submit_disable",
//     inputErrorClass: "popup__input_error", //need to turn red
//     errorClass: "popup__error_visible",
// };

// const showErrorMessage = (inputElement, formElement, errorMessage, validateSettings) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//     errorElement.textContent = errorMessage;
//     errorElement.classList.add("popup__error_visible"); // לנסות לשנות חזרה לקלאס
//     inputElement.classList.add("popup__input_error");

// };
// //po
// const hideErrorMessage = (inputElement, formElement, validateSettings) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     errorElement.textContent = " ";
//     errorElement.classList.remove("popup__input_error");
//     inputElement.classList.remove("popup__error_visible");

// };

// const checkInputValidity = (inputElement, formElement, validateSettings) => { // lo hayav lehosif?
//     if (!inputElement.validity.valid) {
//         showErrorMessage(inputElement, formElement, inputElement.validationMessage, validateSettings);
//     } else {
//         hideErrorMessage(inputElement, formElement, validateSettings);
//     }
// };
// const isValid = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// };
// // po
// const toggleButtonState = (inputList, buttonElement, validateSettings) => {
//     if (isValid(inputList)) {
//         buttonElement.classList.add("popup__submit_disable");
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.classList.remove("popup__submit_disable");
//         buttonElement.disabled = false;

//     }
// };
// //po
// const setEventListeners = (formElement, validateSettings) => {
//     const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
//     const buttonElement = formElement.querySelector(".popup__submit");

//     toggleButtonState(inputList, buttonElement);

//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener("input", () => {
//             checkInputValidity(inputElement, formElement);
//             toggleButtonState(inputList, buttonElement);
//         });
//     });

// };

// const enableValidation = (validateSettings) => {
//     const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

//     formList.forEach((formElement) => {
//         formElement.addEventListener("submit", (e) => {
//             e.preventDefault();
//         }); //po
//         setEventListeners(formElement, validateSettings);
//     });
// };
// enableValidation(validateSettings);



// // gibuy also works first
// const validateSettings = {
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__submit",
//     inactiveButtonClass: "popup__submit_disable",
//     inputErrorClass: "popup__input_error", //need to turn red
//     errorClass: "popup__error_visible",
// };
// // if i add validateSettings its not red anymote


// const showErrorMessage = (inputElement, formElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(validateSettings.errorClass);
//     inputElement.classList.add(validateSettings.inputErrorClass);

// };
// //po
// const hideErrorMessage = (inputElement, formElement) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     errorElement.textContent = " ";
//     errorElement.classList.remove(validateSettings.errorClass);
//     inputElement.classList.remove(validateSettings.inputErrorClass);

// };

// const checkInputValidity = (inputElement, formElement) => {
//     if (!inputElement.validity.valid) {
//         showErrorMessage(inputElement, formElement, inputElement.validationMessage);
//     } else {
//         hideErrorMessage(inputElement, formElement, validateSettings);
//     }
// };
// const isValid = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// };
// // po
// const toggleButtonState = (inputList, buttonElement) => {
//     if (isValid(inputList)) {
//         buttonElement.classList.add(validateSettings.inactiveButtonClass);
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.classList.remove(validateSettings.inactiveButtonClass);
//         buttonElement.disabled = false;

//     }
// };
// //po
// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll(validateSettings.inputSelector));
//     const buttonElement = formElement.querySelector(validateSettings.submitButtonSelector);

//     toggleButtonState(inputList, buttonElement);

//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener("input", () => {
//             checkInputValidity(inputElement, formElement);
//             toggleButtonState(inputList, buttonElement);
//         });
//     });

// };

// const enableValidation = (validateSettings) => {
//     const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

//     formList.forEach((formElement) => {
//         formElement.addEventListener("submit", (e) => {
//             e.preventDefault();
//         }); //po
//         setEventListeners(formElement);
//     });
// };
// enableValidation(validateSettings);
// גיבוי עובד
// const validateSettings = {
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__submit",
//     inactiveButtonClass: "popup__submit_disable",
//     inputErrorClass: "popup__input_error", //need to turn red
//     errorClass: "popup__error_visible",
// };
// // if i add validateSettings its not red anymote


// const showErrorMessage = (inputElement, formElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(validateSettings.errorClass);
//     inputElement.classList.add(validateSettings.inputErrorClass);

// };
// //po
// const hideErrorMessage = (inputElement, formElement) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     errorElement.textContent = " ";
//     errorElement.classList.remove(validateSettings.errorClass);
//     inputElement.classList.remove(validateSettings.inputErrorClass);

// };

// const checkInputValidity = (inputElement, formElement) => {
//     if (!inputElement.validity.valid) {
//         showErrorMessage(inputElement, formElement, inputElement.validationMessage);
//     } else {
//         hideErrorMessage(inputElement, formElement, validateSettings);
//     }
// };
// const isValid = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// };
// // po
// const toggleButtonState = (inputList, buttonElement) => {
//     if (isValid(inputList)) {
//         buttonElement.classList.add(validateSettings.inactiveButtonClass);
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.classList.remove(validateSettings.inactiveButtonClass);
//         buttonElement.disabled = false;

//     }
// };
// //po
// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll(validateSettings.inputSelector));
//     const buttonElement = formElement.querySelector(validateSettings.submitButtonSelector);

//     toggleButtonState(inputList, buttonElement);

//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener("input", () => {
//             checkInputValidity(inputElement, formElement);
//             toggleButtonState(inputList, buttonElement);
//         });
//     });

// };

// const enableValidation = (validateSettings) => {
//     const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

//     formList.forEach((formElement) => {
//         formElement.addEventListener("submit", (e) => {
//             e.preventDefault();
//         }); //po
//         setEventListeners(formElement);
//     });
// };
// enableValidation(validateSettings);