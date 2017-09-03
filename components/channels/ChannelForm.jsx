import React, {Component} from 'react';

class ChannelForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = '';
    }
    render(){
        const {channel} = this.props;
        return(
            <div className = 'form-group'>
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <input
                        className = 'form-control'
                        placeholder = 'Add channel'
                        type='text'
                        ref = 'channel'
                    />
                </form>
            </div>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm;