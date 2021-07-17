import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._form = this._popupElement.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
        this._submitButton = this._popupElement.querySelector(".popup__submit");
        this._buttonText = this._popupElement.querySelector(".popup__submit").textContent;
        this._inputList = this._popupElement.querySelectorAll(".popup__input");
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Saving...";
        } else {
            this._submitButton.textContent = this._buttonText;
        }
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleFormSubmit(this._getInputValues());

            this.close();
        })
    }
}