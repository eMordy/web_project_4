export default class Card {
    constructor({ data, handleCardClick, handleDeleteClick, handleAddLike, handleRemoveLike, userId }, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleAddLike = handleAddLike;
        this._handleRemoveLike = handleRemoveLike;
        this._element = this._getTemplate();
        this._image = this._element.querySelector(".grid__pic");
        this._likesCounter = this._element.querySelector(".grid__likes-count");
        this._likeButton = this._element.querySelector(".grid__heart");

    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".grid__card")
            .cloneNode(true);

        return cardElement;
    }

    _isImageLiked() {
        if (this._likes.some(like => like._id === this._userId)) {
            this._likeButton.classList.add("grid__heart_active");
        } else {
            this._likeButton.classList.remove("grid__heart_active");
        }
    }
    _likeCount() {
        this._likesCounter.textContent = this._likes.length;
    }

    _activeLike() {
        this._likeButton.classList.add("grid__heart_active");
        this._likesCounter.textContent = this._likes.length + 1;
    }


    _inactiveLike() {
        this._likeButton.classList.remove("grid__heart_active");
        this._likesCounter.textContent = this._likes.length - 1;
    }

    updateLikes(likes) {
        this._likes = likes;
    }

    // Remove delete button if card is not created by user
    showDeleteButton() {
        if (this._ownerId !== this._userId) {
            this._element.querySelector(".grid__delete").remove();
        }
    }

    // Delete image
    deleteImage() {
        const deleteButton = this._element.querySelector(".grid__delete");
        deleteButton.closest(".grid__card").remove();
    }


    generateCard() {
        this._setEventListeners();

        // Add data
        this._element.querySelector(".grid__name").textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this.showDeleteButton();
        this._likeCount();
        this._isImageLiked();

        return this._element;
    }

    _setEventListeners() {
        // If likes array contains like from user, remove like with handler
        this._likeButton.addEventListener('click', () => {
            if (this._likes.some(like => like._id === this._userId)) {
                this._handleRemoveLike(this);
                this._inactiveLike(this);
            } else { // Otherwise add like with handler
                this._handleAddLike(this);
                this._activeLike(this);
            }
        });

        this._element.querySelector(".grid__delete")
            .addEventListener('click', () => this._handleDeleteClick(this));

        this._image
            .addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));
    }

}