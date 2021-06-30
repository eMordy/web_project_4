export default class Card {
    constructor({ data, handleCardClick }, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._image = this._element.querySelector(".grid__pic"); //check

    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".grid__card")
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector(".grid__heart").addEventListener("click", () =>
            this._likeButton());

        this._element.querySelector(".grid__delete").addEventListener("click", () =>
            this._deleteButton());

        this._image.addEventListener("click", () =>
            this._handleCardClick({ name: this._name, link: this._link }));
    }
    _likeButton() {
        const likeButton = this._element.querySelector(".grid__heart");
        likeButton.classList.toggle("grid__heart_active");
    }
    _deleteButton() {
            const deleteButton = this._element.querySelector(".grid__delete");
            deleteButton.closest(".grid__card").remove();
        }
        // _handleCardClick() {
        //     popupImage.src = this._link;
        //     popupImage.alt = this._name;
        //     popupImageTitle.textContent = this._name;
        //     openModalWindow(imageModalWindow); //open
        // }

    generateCard() {
        // this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".grid__name").textContent = this._name;
        this._image.alt = this._name;
        this._image.src = this._link;


        return this._element;
    }
}