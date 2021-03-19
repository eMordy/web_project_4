//Profile//
let editProfileWindow = document.querySelector(".popup");
let showButton = document.querySelector(".profile__edit");
let closeButton = document.querySelector(".popup__close");
let saveButton = document.querySelector(".popup__submit");
let nameInput = document.querySelector(".popup__input_type_name");
let workInput = document.querySelector(".popup__input_type-about");
let profileName = document.querySelector(".profile__info-name");
let profileAbout = document.querySelector(".profile__about-me");
let form = document.querySelector(".popup__container");

//Modal Popup//
function showPopup() {
    editProfileWindow.classList.remove('popup_closed')
    nameInput.value = profileName.textContent
    workInput.value = profileAbout.textContent
};

function closePopup() {
    editProfileWindow.classList.add('popup_closed')
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = workInput.value;
    closePopup();
};

form.addEventListener('submit', handleFormSubmit);



showButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);