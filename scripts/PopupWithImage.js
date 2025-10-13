import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupContainer,link,name){
        super(popupContainer);
        this._containerLink=link;
        this._containerName=name;
    }

    open(){
        document.querySelector('.modal__imagen').src=this._containerLink;
        document.querySelector('.modal__texto').textContent=this._containerName;
        super.open();
        
    }
} 