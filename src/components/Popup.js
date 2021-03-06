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