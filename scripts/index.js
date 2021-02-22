//Profile//
let editProfileWindow = document.querySelector(".popup");
let showButton = document.querySelector(".profile__edit");
let closeButton = document.querySelector(".popup__close");
let saveButton = document.querySelector(".popup__submit");
let nameInput = document.querySelector(".popup__input_type-name");
let workInput = document.querySelector(".popup__input_type-about");
let profileName = document.querySelector(".profile__info-name");
let profileAbout = document.querySelector(".profile__about-me");
let form = document.querySelector(".popup__container");

//Modal Popup//
function showPopup() {
    editProfileWindow.classList.remove('popup_closed')
    nameInput.value=profileName.textContent
    workInput.value=profileAbout.textContent
};
function closePopup(){
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

/*const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');

const popup = document.querySelector('.popup');/*
const form = document.querySelector('.popup__form'); find his*/
/*const form = document.querySelector('.form');
const inputName = document.querySelector('.form__input_name');
const inputJob = document.querySelector('.form__input_about');

const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__about-me');


function editButtonOpen() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    togglePopupWindow();
}
 
function togglePopupWindow() {
    popup.classList.toggle('popup_open');   
}

function editButtonClose() {
popup.classList.remove('popup_open');
}

editButton.addEventListener('click', editButtonOpen);

closeButton.addEventListener('click', editButtonClose);

function handleFormSubmit(e){
    e.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    togglePopupWindow();
}

form.addEventListener('submit', handleFormSubmit);
   



document.querySelectorAll('.cards__text-heart') . forEach(cards__text-heart => 
    cards__text-heart.addEventListener('click', () => cards__text-heart.classList.toggle('card__like_color_black'))
);
 
    
/*const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close');
const form = document.querySelector('.form');
const modal = document.querySelector('.popup');
const nameInput = document.querySelector('.form__input_name');
const aboutInput = document.querySelector('.form__input_about');
const profileName = document.querySelector('.profile__info-name');
const profileAbout = document.querySelector('.profile__about-me');
const submitButton = document.querySelector('.popup__submit-button'); 



form.addEventListener("submit",(event)=>{
    event.preventDefault();

profileName.textContent = nameInput.value;
profileAbout.textContent = aboutInput.value;

toggleModal()

})

function toggleModal(){
    modal.classList.toggle("popup_opened");
}

addButton.addEventListener('click', toggleModal)

closeButton.addEventListener('click', toggleModal)

/* const editButton = document.querySelector('.user-card__button');
const modal = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__input_type_name');
const favoriteInput = form.querySelector('.form__input_type_fav');
const userName = document.querySelector('.user-card__text_type_name');
const userFavorite = document.querySelector('.user-card__text_type_fav');

const toggleModal = () => {
    modal.classList.toggle('modal_visible');
}

editButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    userName.textContent = nameInput.value;
    userName.textContent = favoriteInput.value;

})
toggleModal(); */
