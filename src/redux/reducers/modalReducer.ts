import { BaseAction } from './typed';
import { ModalStateInterface } from './typed';

const initialState: ModalStateInterface = {
  shouldOpen: false,
  modalType: '',
};

const modal = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        shouldOpen: true,
        modalType: action.data,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        shouldOpen: false,
        modalType: '',
      };
    default:
      return state;
  }
};

export default modal;
