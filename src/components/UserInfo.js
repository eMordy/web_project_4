export default class UserInfo {
    constructor({ nameSelector, workSelector }) {
        this._nameElement = nameSelector;
        this._workElement = workSelector;
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
}