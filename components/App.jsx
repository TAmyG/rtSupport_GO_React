import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            users: [],
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
            </div>
        )        
    }
}

export default App;