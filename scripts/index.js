import Card from "./Card.js";
import { settings, FormValidator } from "./FormValidator.js";

const popupSet = document.querySelectorAll(".popup");
//wrappers 
const addCardModalWindow = document.querySelector(".popup_type_add-card");
const editProfileModalWindow = document.querySelector(".popup_type_edit-profile");
const imageModalWindow = document.querySelector(".popup_type-image");
//buttons 
const showButton = document.querySelector(".profile__edit"); //open edit 
const addButton = document.querySelector(".profile__add"); // big plus btn 
const closeButton = editProfileModalWindow.querySelector(".popup__close"); //close edit 
const closeAddCardButton = addCardModalWindow.querySelector(".popup__close"); // close add 
// const closeImageButton = imageModalWindow.querySelector(".popup__close"); 
const addSubmitButton = addCardModalWindow.querySelector(".popup__submit");
//test 
const testButton = document.querySelector(".popup__submit");
const subButton = document.querySelector(".popup__submit_add-card");

const profileName = document.querySelector(".profile__info-name"); //title name 
const profileAbout = document.querySelector(".profile__about-me"); //title des 
const addCardForm = document.querySelector(".popup__form_type_add");
const editForm = document.querySelector(".popup__form_type_edit");
const nameInput = document.querySelector(".popup__input_type_name"); //input 
const workInput = document.querySelector(".popup__input_type-about"); //input 
const titleInput = addCardModalWindow.querySelector(".popup__input_type_title");
const linkInput = addCardModalWindow.querySelector(".popup__input_type-url");
const list = document.querySelector(".grid"); //99
const popupImage = imageModalWindow.querySelector(".popup__image");
const popupImageTitle = imageModalWindow.querySelector(".popup__image-title");


// //new
const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function openModalWindow(modal) {
    modal.classList.add("popup_closed");
    document.addEventListener("keydown", handleEscUp);
};

function closeModalWindow(modal) {
    modal.classList.remove("popup_closed");
    document.removeEventListener("keydown", handleEscUp);
};

function editProfile() {
    nameInput.value = profileName.textContent;
    workInput.value = profileAbout.textContent;

    openModalWindow(editProfileModalWindow);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = workInput.value;
    closeModalWindow(editProfileModalWindow);
}

//cards 
const initialCards = [{
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

function createCard(data) {
    const newCard = new Card(data, "#card-template");
    return newCard.generateCard();
}

initialCards.forEach((item) => {
    const cardElement = createCard(item);
    list.append(cardElement);
});


function resetAddCard() {
    addCardForm.reset();
}


function formSubmitImg(event) {
    event.preventDefault();

    const cardInput = {
        name: titleInput.value,
        link: linkInput.value,
    }

    const cardElement = createCard(cardInput);
    list.prepend(cardElement);

    resetAddCard();
    closeModalWindow(addCardModalWindow);
}

function addImage() {
    resetAddCard();
    addFormValidator.toggleButtonState()
    openModalWindow(addCardModalWindow);
}

// Close popup overlay 
popupSet.forEach(function(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_closed')) {
            closeModalWindow(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closeModalWindow(popup)
        }
    })
});
//esc 
function handleEscUp(evt) {
    if (evt.key === "Escape") {
        const closeddPopup = document.querySelector('.popup_closed')
        closeModalWindow(closeddPopup);
    }
};
//event listeners
editForm.addEventListener("submit", formSubmitHandler);
addCardForm.addEventListener("submit", formSubmitImg);
showButton.addEventListener("click", editProfile);
addButton.addEventListener("click", addImage);

export { openModalWindow, popupImage, imageModalWindow, popupImageTitle };