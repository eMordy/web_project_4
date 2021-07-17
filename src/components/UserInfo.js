export default class UserInfo {
    constructor({ nameSelector, workSelector, avatar }) {
        this._nameElement = nameSelector;
        this._workElement = workSelector;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            userName: this._nameElement.textContent,
            work: this._workElement.textContent
        }
    }

    setUserInfo(data) {
        const { username, work } = data;
        this._nameElement.textContent = username;
        this._workElement.textContent = work;
    }
    changeAvatar(data) {
        const { link } = data;
        this._avatar.src = link;
    }
}