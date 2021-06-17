import "./index.css";
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import { settings, showButton, editForm, addButton, addCardForm, nameInput, workInput, initialCards, profileName, profileAbout, editProfileModalWindow, addCardModalWindow, imageModalWindow, cardTemplate, list } from "../utils/constants.js";

const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// user info
const userInfo = new UserInfo({
    nameSelector: profileName,
    workSelector: profileAbout
});


function createCard(data) {
    const card = new Card({
        data,
        handleCardClick: ({
            name,
            link
        }) => {
            imagePopup.open({ name, link });
        }
    }, cardTemplate);
    return card.generateCard();
}


// edit form 
const editFormPopup = new PopupWithForm({
    popupSelector: editProfileModalWindow,
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }
});

editFormPopup.setEventListeners();
showButton.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.title;
    workInput.value = userData.work;
    editFormPopup.open();
    editFormValidator.resetValidation();
})


//img popup
const imagePopup = new PopupWithImage(imageModalWindow);
imagePopup.setEventListeners();

// add card popup
const addImagePopup = new PopupWithForm({
    popupSelector: addCardModalWindow,
    handleFormSubmit: (data) => {
        const cardElement = createCard(data);
        cardList.addItems(cardElement);
    }
});
addImagePopup.setEventListeners();
addButton.addEventListener("click", () => {
    addImagePopup.open();
    addFormValidator.resetValidation();
});

const cardList = new Section({
        items: initialCards,
        renderer: (data) => {
            const cardElement = createCard(data);
            cardList.addItems(cardElement);
        }
    },
    list);

cardList.renderItems();