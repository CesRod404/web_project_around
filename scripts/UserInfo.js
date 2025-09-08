export default class UserInfo{
    constructor(userSelector,workSelector){
        this._userName= document.querySelector(userSelector);
        this._userWork= document.querySelector(workSelector);
    }

    getUserInfo(){
        return{
            name:this._userName.textContent,
            work:this._userWork.textContent

        }
    }

    setUserInfo(Name,Work){
        this._userName.textContent=Name;
        this._userWork.textContent=Work;
    }
}