const showPopup = document.querySelector(".popup");
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const imageModalWindow = document.querySelector('.popup_type_image');
const form = document.querySelector('.popup__form');

const editButton = document.querySelector('.profile__edit');
const addCardModalButton = document.querySelector('.profile__add');

const closeButton = editProfileModalWindow.querySelector('.popup__close');
const closeAddCardModalButton = addCardModalWindow.querySelector('.popup__close');
const imagePopupCloseButton = imageModalWindow.querySelector('.popup__image-close-btn');
// profile
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__about-me');
const inputName = document.querySelector('.popup__input_type_name');
const popupJob = document.querySelector('.popup__input_type-about');
const inputCardTitle = addCardModalWindow.querySelector('.popup__input_type_title');
const inputCardLink = addCardModalWindow.querySelector('.popup__input_type_url');
//grid
const cardLikeButton = document.querySelector('.grid__heart');
const addCardSubmitButton = addCardModalWindow.querySelector('.popup__submit');
const popupImage = document.querySelector(".popup_type_image");
const popupSrc = popupImage.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image-title");

const cardTitle = addCardModalWindow.querySelector('.popup__input_type_title');
const cardLink = addCardModalWindow.querySelector('.popup__input_type_url');


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


function addCard(data) {
    const cardTemplate = document.querySelector(".card-template").content.querySelector(".grid__card");
    const list = document.querySelector(".grid");
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".grid__pic");
    const cardTitle = cardElement.querySelector(".grid__name");
    const cardLikeButton = cardElement.querySelector(".grid__heart");
    const cardDeleteButton = cardElement.querySelector(".grid__delete");

    cardTitle.textContent = data.name;
    cardImage.src = data.link;

    function toggleLike() {
        cardLikeButton.classList.toggle('grid__heart_active');
    };


    cardLikeButton.addEventListener('click', () => {
        toggleLike();
    });

    cardDeleteButton.addEventListener('click', () => {
        cardElement.remove();
    });

    function togglePopup(modal) {
        modal.classList.toggle('popup_is-open');

        if (editProfileModalWindow.classList.contains('popup_is-open')) {
            inputName.value = profileName.textContent;
            popupJob.value = profileJob.textContent;
        }
    }

    // form submit handler
    function formSubmitHandler(evt) {
        evt.preventDefault();
        profileName.textContent = inputName.value;
        profileJob.textContent = popupJob.value;

        togglePopup(editProfileModalWindow);
    };

    form.addEventListener('submit', formSubmitHandler);
    editButton.addEventListener('click', () => {
        if (editProfileModalWindow.classList.contains('popup_is-open')) {
            inputName.value = profileName.textContent;
            popupJob.value = profileJob.textContent;
        }
        togglePopup(editProfileModalWindow);
    });

    closeButton.addEventListener('click', () => {
        editProfileModalWindow.classList.remove('popup_is-open')
        togglePopup(editProfileModalWindow);
    });

    addCardModalButton.addEventListener('click', () => {
        addCardModalWindow.classList.add('popup_is-open')
        togglePopup(addCardModalWindow);
    });

    closeAddCardModalButton.addEventListener('click', () => {
        addCardModalWindow.classList.remove('popup_is-open')
        togglePopup(addCardModalWindow)
    });

    //image
    /*cardImage.addEventListener('click', function() {
        openPopup(popupImage);
        popupSrc.src = item.link;
        popupTitle.textContent = item.name;
        popupSrc.alt = item.name;
    })*/
    cardImage.addEventListener('click', () => {
        const popupImage = imageModalWindow.querySelector('.popup__image');
        const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;

        togglePopup(imageModalWindow)
        imageModalWindow.classList.add('popup_is-open')
    })

    list.prepend(cardElement);
}


imagePopupCloseButton.addEventListener('click', () => {
    togglePopup(imageModalWindow)
});


initialCards.forEach(data => addCard(data));

addCardSubmitButton.addEventListener('click', (event) => {
        event.preventDefault();
        cardTitle.textContent = inputCardTitle.value;
        cardImage.src = inputCardLink.value;


        addCard({ name: inputCardTitle.value, link: inputCardLink.value });
        togglePopup(addCardModalWindow);
    })
    /*
        //Modal Popup//
    function showPopup() {
        showPopup.classList.remove('popup_is-open')
        inputName.value = profileName.textContent
        inputDesc.value = profileDesc.textContent
    };

    function closePopup() {
        showPopup.classList.add('popup_is-open')
    };

    function handleFormSubmit(evt) {
        evt.preventDefault();
        profileName.textContent = inputName.value;
        profileDesc.textContent = inputDesc.value;
        closePopup();
    };

    form.addEventListener('submit', handleFormSubmit);



    showButton.addEventListener('click', showPopup);
    closeButton.addEventListener('click', closePopup); */