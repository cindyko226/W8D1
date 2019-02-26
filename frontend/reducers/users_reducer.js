import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';


const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
          newState = merge({}, oldState, action.currentUser);
          return newState;
        default:
          return oldState;
    }
}

export default UsersReducer;