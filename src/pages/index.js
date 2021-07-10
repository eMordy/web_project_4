import "./index.css";
import Api from "../components/Api";
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";
import { settings, showButton, editForm, addButton, addCardForm, nameInput, workInput, profileName, profileAbout, editProfileModalWindow, addCardModalWindow, imageModalWindow, cardTemplate, list, popupAvatar, profilePic, formAvatar, popupDeleteImg, profileImageOverlay } from "../utils/constants.js"
import PopupWithSubmit from "../components/PopupWithSubmit";
//popupChangeAvatar=popupAvatar, profileImage=profilePic, avatarForm=formAvatar, profileImageOverlay, popupDeleteImage=popupDeleteImg
const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addCardForm);
const editAvatarValidator = new FormValidator(settings, formAvatar);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
editAvatarValidator.enableValidation();


const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "d0e977b7-e6ef-4c48-940d-30398c6b7f34",
        "Content-Type": "application/json"
    }
});

//user info
const userInfo = new UserInfo({
    nameSelector: profileName,
    workSelector: profileAbout,
    avatar: profilePic
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(res => {
        const [userValues, initialCards] = res;
        console.log(userValues);
        console.log(initialCards);

        // Get userInfo from server and display on page
        userInfo.setUserInfo({ username: userValues.name, userjob: userValues.about });
        userInfo.changeAvatar({ link: userValues.avatar })
        userInfo.userId = userValues._id;




        //edit form 
        const editFormPopup = new PopupWithForm({ //136
            popupSelector: editProfileModalWindow,
            handleFormSubmit: (data) => {
                api.setUserInfo({ name: data.username, about: data.userjob })
                    .then(() => {
                        userInfo.setUserInfo({ username: data.username, userjob: data.userjob });
                        editFormPopup.close();
                    })
                    .catch((err) => {
                        console.log(err); // Log error to console
                    })
                    .finally(() => {
                        editFormPopup.renderLoading(false);
                    })
            }
        });
        editFormPopup.setEventListeners(); //152

        showButton.addEventListener("click", () => {
                const userData = userInfo.getUserInfo();
                nameInput.value = userData.userName;
                workInput.value = userData.userJob;
                editFormPopup.open();
                editFormValidator.resetValidation();
            }) //162

        function createCard(data) { //92
            const card = new Card({
                    data,
                    handleCardClick: ({
                        name,
                        link
                    }) => {
                        imagePopup.open({ name, link });
                    },
                    handleDeleteClick: (data) => {
                        deletePopupImg.open();
                        deletePopupImg.setSubmitAction(() => {
                            api.removeCard(data._id).then(() => {
                                    card.deleteImage();
                                    deletePopupImg.close();
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        })

                    },
                    handleAddLike: (data) => {
                        api.addLike(data._id)
                            .then(res => {
                                card.updateLikes(res.likes);
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    }, // Remove like from array
                    handleRemoveLike: (data) => {
                        api.removeLike(data._id)
                            .then(res => {
                                card.updateLikes(res.likes);
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    }, // pass userId
                    userId: userInfo.userId,
                },
                cardTemplate);
            return card.generateCard(); //132
        }


        const cardList = new Section({ //49
                items: initialCards,
                renderer: (data) => {
                    const cardElement = createCard(data);
                    cardList.addItems(cardElement);
                }
            },
            list);
        cardList.renderItems();

        // add card popup
        const addImagePopup = new PopupWithForm({ //61
            popupSelector: addCardModalWindow,
            handleFormSubmit: (data) => {
                api.addCard(data)
                    .then(cardData => {
                        console.log(cardData);
                        const cardElement = createCard(cardData);
                        cardList.addItems(cardElement);
                        addImagePopup.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        addImagePopup.renderLoading(false);
                    })
            }
        });
        addImagePopup.setEventListeners();

        addButton.addEventListener("click", () => {
            addImagePopup.open();
            addFormValidator.resetValidation();
        })
    })
    .catch((err) => {
        console.log(err);
    });

const deletePopupImg = new PopupWithSubmit({ //165
    popupSelector: popupDeleteImg
});
deletePopupImg.setEventListeners();

// //img popup
const imagePopup = new PopupWithImage(imageModalWindow); //171
imagePopup.setEventListeners();

// Form to change profile image and save data on server
const profileImgPopup = new PopupWithForm({ //174
    popupSelector: popupAvatar,
    handleFormSubmit: (data) => {
        api.setUserAvatar({ avatar: data.link })
            .then(() => {
                userInfo.changeAvatar(data);
                profileImgPopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                profileImgPopup.renderLoading(false);
            })
    }
})
profileImgPopup.setEventListeners();

profileImageOverlay.addEventListener("click", () => { //add193
    profileImgPopup.open();
    editAvatarValidator.resetValidation();
});