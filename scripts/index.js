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

const saveButton = document.querySelector(".popup__submit");
//profile
const profileName = document.querySelector(".profile__info-name"); //title name
const profileAbout = document.querySelector(".profile__about-me"); //title des
//popup inpurt
//const modalWindow = document.querySelector(".popup"); no need?
const editForm = document.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input_type_name"); //input
const workInput = document.querySelector(".popup__input_type-about"); //input
const titleInput = addCardModalWindow.querySelector('.popup__input_type_title');
const linkInput = addCardModalWindow.querySelector('.popup__input_type-url');




// edit pen popup- toggles the state of the modal
function toggleModalWindow(modal) {
    modal.classList.toggle("popup_closed");

    if (editProfileModalWindow.classList.contains("popup_closed")) {
        nameInput.value = profileName.textContent;
        workInput.value = profileAbout.textContent;
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = workInput.value;
    toggleModalWindow(editProfileModalWindow);
};

editForm.addEventListener("submit", formSubmitHandler);
showButton.addEventListener("click", () => {
    if (editProfileModalWindow.classList.contains("popup_closed")) {
        nameInput.value = profileName.textContent;
        workInput.value = profileAbout.textContent;
    }
    toggleModalWindow(editProfileModalWindow);
});

//closeButton.addEventListener('click', toggleModalWindow); // 21:12 vid

closeButton.addEventListener("click", () => {
    toggleModalWindow(editProfileModalWindow);
});

addButton.addEventListener("click", () => {
    toggleModalWindow(addCardModalWindow);
});
closeAddCardButton.addEventListener("click", () => {
    toggleModalWindow(addCardModalWindow);
});

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
    }
];


initialCards.forEach(data => createCard(data))

function createCard(data) {
    const cardTemplate = document.querySelector(".card-template").content.querySelector(".grid__card");
    const list = document.querySelector(".grid");
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".grid__pic");
    const cardTitle = cardElement.querySelector(".grid__name");
    const cardLikeButton = cardElement.querySelector(".grid__heart");
    const cardDeleteButton = cardElement.querySelector(".grid__delete");

    cardTitle.textContent = data.name;
    cardImage.src = data.link;

    cardLikeButton.addEventListener("click", () => {
        cardLikeButton.classList.toggle("grid__heart_active");
    });
    cardDeleteButton.addEventListener("click", () => {
        cardElement.remove();
    });


    cardImage.addEventListener("click", () => {
        const popupImage = imageModalWindow.querySelector(".popup__image");
        const popupImageTitle = imageModalWindow.querySelector(".popup__image_title");

        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;

        toggleModalWindow(imageModalWindow)
            // test
            // imageModalWindow.classList.add("popup_closed")
            // toggleModalWindow(imageModalWindow);
    })

    list.prepend(cardElement);
}
closeImageButton.addEventListener('click', () => {
    toggleModalWindow(imageModalWindow)
});
// initialCards.forEach(data => createCard(data));
saveButton.addEventListener('click', (event) => {
    event.preventDefault();


    createCard({ name: titleInput.value, link: linkInput.value });

    toggleModalWindow(addCardModalWindow);
});
// first try
// //wrappers
// const addCardModalWindow = document.querySelector(".popup_type_add-card");
// const editProfileModalWindow = document.querySelector(".popup_type_edit-profile");
// const imageModalWindow = document.querySelector(".popup_type_image");
// //buttons
// const showButton = document.querySelector(".profile__edit"); //open edit
// const addButton = document.querySelector(".profile__add"); // big plus btn
// // const closeButton = document.querySelector(".popup__close"); //close edit
// const closeButton = editProfileModalWindow.querySelector(".popup__close"); //close edit
// const closeAddCardButton = addCardModalWindow.querySelector(".popup__close");
// //const saveButton = document.querySelector(".popup__submit"); no need?
// //profile
// const profileName = document.querySelector(".profile__info-name"); //title name
// const profileAbout = document.querySelector(".profile__about-me"); //title des
// //popup inpurt
// //const modalWindow = document.querySelector(".popup"); no need?
// //const editForm = document.querySelector(".popup__container"); mistake?
// const editForm = document.querySelector(".popup__form");

// const nameInput = document.querySelector(".popup__input_type_name"); //input
// const workInput = document.querySelector(".popup__input_type-about"); //input



// // edit pen popup- toggles the state of the modal
// function toggleModalWindow(modal) {
//     modal.classList.toggle("popup_closed");
// }

// function formSubmitHandler(evt) {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileAbout.textContent = workInput.value;
//     toggleModalWindow(editProfileModalWindow);
// }
// editForm.addEventListener("submit", formSubmitHandler);
// showButton.addEventListener("click", () => {
//     if (!editProfileModalWindow.classList.contains("popup_closed")) {
//         nameInput.value = profileName.textContent;
//         workInput.value = profileAbout.textContent;
//     }
//     toggleModalWindow(editProfileModalWindow);
// });

// //closeButton.addEventListener('click', toggleModalWindow); // 21:12 vid

// closeButton.addEventListener("click", () => {
//     toggleModalWindow(editProfileModalWindow);
// });

// addButton.addEventListener("click", () => {
//     toggleModalWindow(addCardModalWindow);
// });
// closeAddCardButton.addEventListener("click", () => {
//     toggleModalWindow(addCardModalWindow);
// });

// //cards

// const initialCards = [{
//         name: "Yosemite Valley",
//         link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
//     },
//     {
//         name: "Lake Louise",
//         link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
//     },
//     {
//         name: "Bald Mountains",
//         link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
//     },
//     {
//         name: "Latemar",
//         link: "https://code.s3.yandex.net/web-code/latemar.jpg",
//     },
//     {
//         name: "Vanoise National Park",
//         link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
//     },
//     {
//         name: "Lago di Braies",
//         link: "https://code.s3.yandex.net/web-code/lago.jpg",
//     },
// ];

// const cardTemplate = document.querySelector(".card-template").content.querySelector(".grid__card");
// const list = document.querySelector(".grid");

// initialCards.forEach(data => {
//     const cardElement = cardTemplate.cloneNode(true);
//     const cardImage = cardElement.querySelector(".grid__pic");
//     const cardTitle = cardElement.querySelector(".grid__name");
//     const cardLikeButton = cardElement.querySelector(".grid__heart");
//     const cardDeleteButton = cardElement.querySelector(".grid__delete");

//     cardTitle.textContent = data.name;
//     cardImage.src = data.link;

//     cardLikeButton.addEventListener("click", () => {
//         cardLikeButton.classList.toggle("grid__heart_active");
//     })
//     cardDeleteButton.addEventListener("click", () => {
//         cardElement.remove();
//     })


//     cardImage.addEventListener("click", () => {
//         const popupImage = imageModalWindow.querySelector(".popup__image");
//         const popupImageTitle = imageModalWindow.querySelector(".popup__image-title");
//         //new sergey 1:00

//         //old
//         popupImage.src = data.link;
//         popupImageTitle.textContent = data.name;

//         toggleModalWindow(imageModalWindow)
//             // test
//             // imageModalWindow.classList.add("popup_closed")
//             // toggleModalWindow(imageModalWindow);
//     })

//     list.prepend(cardElement);
//     //return cardElement;
//     // window.addEventListener("load", function() {
//     //     initialCards.forEach(data => {
//     //         addCard(data);
//     //         cardElement = addCard(data);
//     //         list.prepend(cardElement);
//     //     })
//     // });

// })