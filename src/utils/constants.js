export const popupSet = document.querySelectorAll(".popup");
//wrappers 
export const addCardModalWindow = document.querySelector(".popup_type_add-card");
export const editProfileModalWindow = document.querySelector(".popup_type_edit-profile");
export const imageModalWindow = document.querySelector(".popup_type-image");
//buttons 
export const showButton = document.querySelector(".profile__edit"); //open edit 
export const addButton = document.querySelector(".profile__add"); // big plus btn 
export const closeButton = editProfileModalWindow.querySelector(".popup__close"); //close edit 
export const closeAddCardButton = addCardModalWindow.querySelector(".popup__close"); // close add 
// const closeImageButton = imageModalWindow.querySelector(".popup__close"); 
export const addSubmitButton = addCardModalWindow.querySelector(".popup__submit");
//test 
export const testButton = document.querySelector(".popup__submit");
export const subButton = document.querySelector(".popup__submit_add-card");

export const profileName = document.querySelector(".profile__info-name"); //title name 
export const profileAbout = document.querySelector(".profile__about-me"); //title des 
export const addCardForm = document.querySelector(".popup__form_type_add");
export const editForm = document.querySelector(".popup__form_type_edit");
export const nameInput = document.querySelector(".popup__input_type_name"); //input 
export const workInput = document.querySelector(".popup__input_type-about"); //input 
export const titleInput = addCardModalWindow.querySelector(".popup__input_type_title");
export const linkInput = addCardModalWindow.querySelector(".popup__input_type-url");
export const list = document.querySelector(".grid");
export const popupImage = imageModalWindow.querySelector(".popup__image");
export const popupImageTitle = imageModalWindow.querySelector(".popup__image-title");


// check

export const cardTemplate = "#card-template";
export const imageGrid = ".image-grid";
// check

//cards 
export const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
];

export const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disable",
    inputErrorClass: "popup__input_error", //need to turn red
    errorClass: "popup__error_visible",
}