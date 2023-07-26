import { INIT_state } from '../../constant';
import { getType, hideModal, showModal } from '../action';

export default function createPostReducers(state = INIT_state.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                ...state,
                isShow: true
            };
        case getType(hideModal):
            return {
                ...state,
                isShow: false
            };
        default:
            return state;
    }
}
