import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (oldState = {id: null}, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState = merge({}, oldState, {id: Object.keys(action.currentUser)[0]} )
            return newState;
        case LOGOUT_CURRENT_USER:
            newState = merge({}, oldState, {["id"]: null});
            return newState;
        default: 
          return oldState;
    }
}

export default SessionReducer;

// let newState = Object.assign({}, oldState)
//  newState["id"]:action.currentUser.id
// return newState