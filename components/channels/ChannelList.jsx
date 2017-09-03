import React, {Component} from 'react';
import Channel from './Channel.jsx';

class ChannelList extends Component{
    render(){
        let i = 0;
        const {channel} = this.props;
        return(
            <ul>
                {
                    this.props.channels.map(chan =>{
                        let cmp = <Channel 
                                        channel = {chan}
                                        //setChannel = {this.props.setChannel}
                                        //activeChannel = {this.props.activeChannel}
                                        {...this.props}
                                        key = {chan.id}
                                    />;
                        i++;
                        return cmp
                    })
                } 
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}

export default ChannelList;