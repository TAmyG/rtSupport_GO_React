import React, {Component} from 'react';

class Message extends Component{
    render(){
        let {message} = this.props;        
        return(
            <li className ='message' >
                <div className = 'author'>
                    <strong>{message.author}</strong>
                    <i className = 'timestamp'>12-08-2017 9:00</i>
                </div>
                <div className = 'body'>{message.body}</div>
            </li>
        )
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
}
export default Message;