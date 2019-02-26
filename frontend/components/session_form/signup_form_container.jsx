import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return ({
        errors: state.errors,
        formType: "Sign Up"
    })
}

const mdp = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
}

export default connect(msp, mdp)(SessionForm)