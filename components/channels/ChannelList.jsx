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
                                        setChannel = {this.props.setChannel}
                                        key = {i}
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
    setChannel: React.PropTypes.func.isRequired
}

export default ChannelList;