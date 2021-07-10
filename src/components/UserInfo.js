export default class UserInfo {
    constructor({ nameSelector, workSelector, avatar }) {
        this._nameElement = nameSelector;
        this._workElement = workSelector;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            title: this._nameElement.textContent,
            work: this._workElement.textContent
        }
    }

    setUserInfo(data) {
        const { name, work } = data;
        this._nameElement.textContent = name;
        this._workElement.textContent = work;
    }
    changeAvatar(data) {
        const { link } = data;
        this.avatar.src = link;
    }
}