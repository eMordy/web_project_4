import { openModalWindow, popupImage, imageModalWindow, popupImageTitle } from "./index.js";



class Card {
    constructor(data, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;

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

        this._element.querySelector(".grid__pic").addEventListener("click", () =>
            this._cardImage());
    }
    _likeButton() {
        const likeButton = this._element.querySelector(".grid__heart");
        likeButton.classList.toggle("grid__heart_active");
    }
    _deleteButton() {
        const deleteButton = this._element.querySelector(".grid__delete");
        deleteButton.closest(".grid__card").remove();
    }
    _cardImage() {
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupImageTitle.textContent = this._name;
        openModalWindow(imageModalWindow);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".grid__pic").src = this._link;
        this._element.querySelector(".grid__name").textContent = this._name;
        this._element.querySelector(".grid__pic").alt = this._name;

        return this._element;
    }
}
export default Card;