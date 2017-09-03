import React, {Component} from 'react';

class UserForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.user;
        const userName = node.value;
        this.props.addUser(userName);
        node.value = '';
    }
    render(){
        return(
            <div className = 'form-group'>
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <input
                        className = 'form-control'
                        placeholder = 'Set your name'
                        type='text'
                        ref = 'user'
                    />
                </form>
            </div>
        )
    }
}

UserForm.propTypes = {
    addUser: React.PropTypes.func.isRequired
}

export default UserForm;