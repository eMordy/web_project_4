const modalWindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__container");
const addCardModalWindow = document.querySelector(".popup_type_add-card");
const editProfileModalWindow = document.querySelector(".popup_type_edit-profile");

const imageModalWindow = document.querySelector(".popup_type_image");

const showButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popup__close");
const addButton = document.querySelector(".profile__add");
const closeAddCardButton = addCardModalWindow.querySelector(".popup__close");
const saveButton = document.querySelector(".popup__submit");
const nameInput = document.querySelector(".popup__input_type_name");
const workInput = document.querySelector(".popup__input_type-about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__about-me");

// edit pen popup
function toggleModalWindow(modal) {
    modal.classList.toggle('popup_closed');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = workInput.value;
    toggleModalWindow(editProfileModalWindow);
}
editForm.addEventListener('submit', formSubmitHandler);
showButton.addEventListener('click', () => {

    if (!editProfileModalWindow.classList.contains('popup_closed')) {
        nameInput.value = profileName.textContent
        workInput.value = profileAbout.textContent
    }
    toggleModalWindow(editProfileModalWindow);
});

closeButton.addEventListener('click', () => {
    toggleModalWindow(editProfileModalWindow);
});

addButton.addEventListener('click', () => {
    toggleModalWindow(addCardModalWindow)
})
closeAddCardButton.addEventListener('click', () => {
        toggleModalWindow(addCardModalWindow)

    })
    //cards

const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


const cardTemplate = document.querySelector(".card-template").content.querySelector(".grid__card");
const list = document.querySelector(".grid");

initialCards.forEach(data => {
        //  const cardTemplate = document.querySelector(".card-template").content.querySelector(".grid__card");
        const cardElement = cardTemplate.cloneNode(true);
        //const list = document.querySelector(".grid");
        const cardImage = cardElement.querySelector(".grid__pic");
        const cardTitle = cardElement.querySelector(".grid__name");
        const cardLikeButton = cardElement.querySelector(".grid__heart");
        const cardDeleteButton = cardElement.querySelector(".grid__delete");

        cardTitle.textContent = data.name;
        cardImage.src = data.link;
        // cardImage.style.backgroundImage = 'url(${data.link})';

        cardLikeButton.addEventListener('click', () => {
            cardLikeButton.classList.toggle('grid__heart_active');

        })
        cardDeleteButton.addEventListener('click', () => {
            cardElement.remove();

        })

        cardImage.addEventListener('click', () => {
            const popupImage = imageModalWindow.querySelector(".popup__image");
            const popupImageTitle = imageModalWindow.querySelector(".popup__image-title");

            popupImage.src = data.link;
            popupImageTitle.textContent = data.name;

            // test
            //  toggleModalWindow(imageModalWindow)
            //imageModalWindow.classList.add("popup_closed")
        })

        list.prepend(cardElement);
    })
    /*
        function toggleLike() {
            cardLikeButton.classList.toggle('grid__heart_active');
        };


        cardLikeButton.addEventListener('click', () => {
            toggleLike();
        });

        cardDeleteButton.addEventListener('click', () => {
            cardElement.remove();
        });*/

//Modal Popup// old mine
/*function showPopup() {
    modalWindow.classList.remove('popup_closed')
    nameInput.value = profileName.textContent
    workInput.value = profileAbout.textContent
};

function closePopup() {
    modalWindow.classList.add('popup_closed')
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = workInput.value;
    closePopup();
};

form.addEventListener('submit', handleFormSubmit);



showButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);*/