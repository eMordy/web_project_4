export default class Popup {
    constructor(popupSelector) {
        // console.log(popupSelector)
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add("popup_closed");
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._popupElement.classList.remove("popup_closed");
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains("popup_closed") || evt.target.classList.contains("popup__close")) {
                this.close();
            }
        });
    }
}
// index.js rty
//const section = new Section({
// items: initialCards,
//     renderer: (items) => { //data ?
//         const card = new Card({
//             data: items,
//             handleCardClick: ({
//                 name,
//                 link
//             }) => {
//                 imagePopup.open(link, name); //46
//             }
//         }, '.card-template'); //48
//         list.addItem(card.createCard());
//     }
// }, '.card')

// // section.renderItems(initialCards); -- מאיפה הבאתי את זה

// const addImagePopup = new PopupWithForm({
//     popupSelector: '.popup_type_add-card', //addCardModalWindow
//     handleFormSubmit: (items) => { //data lenasot leshanot
//         const card = new Card({ //68
//             data: items, //data?
//             handleCardClick: (link, name) => {
//                 imagePopup.open(link, name); // livdoe knagpopuppp
//             }
//         }, '.card-template');
//         list.prependItem(card.createCard(items));
//     }
// });