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
const closeImageButton = imageModalWindow.querySelector(".popup__close"); //something not good with imagemodal..
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
const list = document.querySelector(".grid");
const popupImage = imageModalWindow.querySelector(".popup__image");
const popupImageTitle = imageModalWindow.querySelector(".popup__image-title");

// open popup
const openModalWindow = modal => {
    modal.classList.add("popup_closed");
    document.addEventListener("keydown", handleEscUp);
};
//close popup
const closeModalWindow = (modal) => {
    modal.classList.remove("popup_closed");
    document.removeEventListener("keydown", handleEscUp);
};

// open edit popup
showButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    nameInput.value = profileName.textContent;
    workInput.value = profileAbout.textContent;
    // Submit button is initially enabled
    testButton.classList.remove("popup__submit_disable");

    openModalWindow(editProfileModalWindow);
});
//submit change edit popup
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = workInput.value;
    closeModalWindow(editProfileModalWindow);

};
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

initialCards.forEach((data) => {
    const card = createCard(data);
    list.append(card);
});

function createCard(data) {
    const cardTemplate = document.querySelector(".card-template").content.querySelector(".grid__card");
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".grid__pic");
    const cardTitle = cardElement.querySelector(".grid__name");
    const cardLikeButton = cardElement.querySelector(".grid__heart");
    const cardDeleteButton = cardElement.querySelector(".grid__delete");

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    cardLikeButton.addEventListener("click", () => {
        cardLikeButton.classList.toggle("grid__heart_active");
    });
    cardDeleteButton.addEventListener("click", () => {
        cardElement.remove();
    });

    cardImage.addEventListener("click", () => {
        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;
        openModalWindow(imageModalWindow);
    });
    return cardElement;
}

function resetAddCard() {
    addCardForm.reset();
}


addCardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const card = createCard({
        name: titleInput.value,
        link: linkInput.value,
    });
    list.prepend(card);
    //new
    subButton.disabled = true;
    subButton.classList.add("popup__submit_disable");
    resetAddCard();
    //     // titleInput.value = "";
    //     // linkInput.value = "";
    closeModalWindow(addCardModalWindow);
});

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

editForm.addEventListener("submit", formSubmitHandler);

addButton.addEventListener("click", () => {
    openModalWindow(addCardModalWindow);
});