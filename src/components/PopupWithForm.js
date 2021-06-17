import Popup from "./Popup";
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._form = this._popupElement.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll(".popup__input");
        this._formValues = {};

        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    close() {
        super.close();
        this._popupElement.querySelector(".popup__form").reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());

            this.close();
        })
    }
}