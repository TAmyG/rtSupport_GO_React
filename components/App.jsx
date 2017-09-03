import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: {}
        }
    }
    addChannel(name){
        let {channels} =  this.state;
        channels.push({id: channels.length, name});
        this.setState({channels});
        //TODO: send to server
    }
    setChannel(activeChannel){
        this.setState({activeChannel});
        //TODO: get channel messages from server
    }
    addUser(name){
        let {users} =  this.state;
        users.push({id: users.length, name});
        this.setState({users});
        //TODO: send to server
    }
    addMessage(body){
        let {messages, users} =  this.state;
        let createdAt =  new Date();
        let author = users.length > 0 ? users[0].name : 'Anonymous'
        messages.push({id: messages.length, body, createdAt, author});
        this.setState({messages});
        //TODO: send to server
    }
    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <ChannelSection 
                        //channels = {this.state.channels}
                        {...this.state}
                        addChannel = {this.addChannel.bind(this)}
                        setChannel = {this.setChannel.bind(this)}
                    />
                    <UserSection 
                        //channels = {this.state.channels}
                        {...this.state}
                        addUser = {this.addUser.bind(this)}
                    />                  
                </div>
                <MessageSection
                    {...this.state}
                    addMessage = {this.addMessage.bind(this)}
                 />
            </div>
        )        
    }
}

export default App;