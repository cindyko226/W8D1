import React from 'react';
import {Link} from 'react-router-dom'; 

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(field){
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
          .then(() => this.props.history.push('/'));
    }
   
    render(){
        
        const link = this.props.formType === "Sign Up" ?
          (
            <Link to="/login"></Link>
          ) : (
            <Link to="/signup"></Link>
          );


        return(
            <div>
                <h2>{this.props.formType}</h2>

                <form onSubmit={this.handleSubmit}>
                  <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
                  <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                  <input type="submit" value="Submit"/>
                </form>

                {link}
                <ul>
                  {this.props.errors.session.map( error => console.log(error))}
                </ul>

            </div>
        )
    }

}

export default SessionForm;

