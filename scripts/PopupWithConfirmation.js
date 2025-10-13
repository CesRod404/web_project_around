import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popupContainer.querySelector('.modal__button-ad');
  }

  open(action) {
    this._handleConfirm = action; 
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', () => {
      if (this._handleConfirm) {
        this._handleConfirm();
      }
      this.close();
    });
  }
}