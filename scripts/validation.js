// validationSet({
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__button",
//     inactiveButtonClass: "popup__button_disabled",
//     inputErrorClass: "popup__input_error", //need to turn red
//     errorClass: "popup__error_visible",
// });

// function showErrorMessage(input, form, {
//     errorClass,
//     inputErrorClass,
//     ...rest
// }) {
//     const error = document.querySelector('#' + input.id + '-error'); //אצל ליזה זה רק ארור דקה 12:35
//     error.textContent = input.validationMessage;
//     error.classList.add(error);
//     input.classList.add(inputErrorClass);

// };

// function hideErrorMessage(input, form, {
//     errorClass,
//     inputErrorClass,
//     ...rest
// }) {
//     const error = document.querySelector('#' + input.id + '-error'); //אצל ליזה זה רק ארור דקה 12:35
//     error.textContent = " ";
//     error.classList.remove(error);
//     input.classList.remove(inputErrorClass);

// };

// function checkInputValidity(input, form, rest) {
//     if (input.validity.valid) {
//         hideErrorMessage(input, form, rest)
//     } else {
//         showErrorMessage(input, form, rest)
//     }
// }

// const isValid = inputList => {
//     return inputList.some(input => {
//         return input.validity.valid; // לו יש  !

//     });
// };



// const toggleButtonState = (inputList, button) => {
//     console.log(isValid(inputList));

//     // const isValid = inputs.every((input) => input.validity.valid)
//     if (isValid(inputList)) {
//         button.classList.remove(inactiveButtonClass); // צריך לעשות פייל
//     } else {
//         button.classList.add(inactiveButtonClass);

//     }
// }

// const setEventListeners = form => {
//     const inputList = Array.from(form.querySelectorAll(inputSelector));
//     const button = form.querySelector(inputSelector);
//     toggleButtonState(inputList, button);
//     //yesh 55
//     inputList.forEach(input => {
//         input.addEventListener('input', function() {
//             checkInputValidity(form, input);
//             toggleButtonState(inputList, button);
//         });
//     });
// };

// const enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll(formSelector));
//     formList.forEach(form => {
//         form.addEventListener('submit', function(evt) {
//             evt.preventDefault();
//         });

//         const fieldsetList = Array.from(form.querySelectorAll(submitButtonSelector));

//         fieldsetList.forEach(fieldset => {
//             setEventListeners(fieldset);
//         });
//     });
// };
// enableValidation();


// זה עבד

// function showErrorMessage(input, form, {
//     errorClass,
//     inputErrorClass,
//     ...rest
// }) {
//     const error = document.querySelector('#' + input.id + '-error'); //אצל ליזה זה רק ארור דקה 12:35
//     error.textContent = input.validationMessage;
//     error.classList.add(error);
//     input.classList.add(inputErrorClass);

// };

// function hideErrorMessage(input, form, {
//     errorClass,
//     inputErrorClass,
//     ...rest
// }) {
//     const error = document.querySelector('#' + input.id + '-error'); //אצל ליזה זה רק ארור דקה 12:35
//     error.textContent = " ";
//     error.classList.remove(error);
//     input.classList.remove(inputErrorClass);

// };

// function checkInputValidity(input, form, rest) {
//     if (input.validity.valid) {
//         hideErrorMessage(input, form, rest)
//     } else {
//         showErrorMessage(input, form, rest)
//     }
// }

// function toggleButtonState(inputs, button, { inactiveButtonClass, ...rest }) {
//     const isValid = inputs.every((input) => input.validity.valid)
//     if (isValid) {
//         button.classList.remove(inactiveButtonClass);
//     } else {
//         button.classList.add(inactiveButtonClass);

//     }
// }



// function enableValidation({ formSelector, inputSelector, submitButtonSelector, ...rest }) {
//     const forms = [...document.querySelectorAll(formSelector)];

//     forms.forEach((form) => {
//         form.addEventListener("submit", ((e) => {
//             e.preventDefault()
//         }))
//         const inputs = [...form.querySelectorAll(inputSelector)];
//         const button = form.querySelector(submitButtonSelector);

//         inputs.forEach((input) => {
//             input.addEventListener("input", () => {
//                 checkInputValidity(input, form, rest);
//                 toggleButtonState(inputs, button, rest);
//             })
//         })
//     })
// }
// //down
// enableValidation({
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__button",
//     inactiveButtonClass: "popup__button_disabled",
//     inputErrorClass: "popup__input_error", //need to turn red
//     errorClass: "popup__error_visible",
// });


// const showErrorMessage = (inputElement, formElement, errorMessage, config) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(config.errorClass);
//     inputElement.classList.add(config.inputErrorClass);

// };

// const hideErrorMessage = (inputElement, formElement, config) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     errorElement.textContent = " ";
//     errorElement.classList.remove(config.errorClass);
//     inputElement.classList.remove(config.inputErrorClass);

// };

// const checkInputValidity = (inputElement, formElement, config) => {
//     if (!inputElement.validity.valid) {
//         showErrorMessage(inputElement, formElement, inputElement.validationMessage, config)
//     } else {;
//         hideErrorMessage(inputElement, formElement, config)
//     }
// };
// const isValid = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// };

// const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
//     if (isValid(inputList)) {
//         buttonElement.classList.add(inactiveButtonClass);
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.classList.remove(inactiveButtonClass);
//         buttonElement.disabled = false;

//     }
// };

// const setEventListeners = (formElement, config) => {
//     const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//     const buttonElement = formElement.querySelector(config.submitButtonSelector);

//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener("input", () => {
//             checkInputValidity(inputElement, formElement, config);
//             toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
//         });
//     });

// };

// const enableValidation = (config) => {
//     const formList = Array.from(document.querySelectorAll(config.formSelector));

//     formList.forEach((formElement) => {
//         formElement.addEventListener("submit", (e) => {
//             e.preventDefault();
//         });
//         setEventListeners(formElement, config);
//     })
// };


// //down
// enableValidation({
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__submit",
//     inactiveButtonClass: "popup__submit_disable",
//     inputErrorClass: "popup__input_error", //need to turn red
//     errorClass: "popup__error_visible",
// });
const validateSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disable",
    inputErrorClass: "popup__input_error", //need to turn red
    errorClass: "popup__error_visible",
};

const showErrorMessage = (inputElement, formElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(validateSettings.errorClass);
    inputElement.classList.add(validateSettings.inputErrorClass);

};

const hideErrorMessage = (inputElement, formElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = " ";
    errorElement.classList.remove(validateSettings.errorClass);
    inputElement.classList.remove(validateSettings.inputErrorClass);

};

const checkInputValidity = (inputElement, formElement) => {
    if (!inputElement.validity.valid) {
        showErrorMessage(inputElement, formElement, inputElement.validationMessage);
    } else {;
        hideErrorMessage(inputElement, formElement);
    }
};
const isValid = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (isValid(inputList)) {
        buttonElement.classList.add(validateSettings.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(validateSettings.inactiveButtonClass);
        buttonElement.disabled = false;

    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validateSettings.inputSelector));
    const buttonElement = formElement.querySelector(validateSettings.submitButtonSelector);
    //test
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(inputElement, formElement);
            toggleButtonState(inputList, buttonElement);
        });
    });

};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
        });
        setEventListeners(formElement);
    });
};
enableValidation(validateSettings);