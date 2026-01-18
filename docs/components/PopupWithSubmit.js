import Popup from "./Popup";
export default class PopupWithSubmit extends Popup {

    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._confirmDeleteButton = this._popupElement.querySelector(".popup__submit_type_delete");
        this._buttonText = this._popupElement.querySelector(".popup__submit").textContent;
    }

    setSubmitAction(action) {
        this._handleFormSubmit = action;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._confirmDeleteButton.textContent = "Deleting...";
        } else {
            this._confirmDeleteButton.textContent = this._buttonText;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmDeleteButton.addEventListener("click", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
            this.renderLoading(true);
        })
    }
}