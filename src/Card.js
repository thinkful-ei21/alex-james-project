import React from 'react';

import CardLayout from './CardLayout';

export default class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: 'Birthday',
            message: '',
            colorClass: 'pink'
        }

    }
    setTitle(title){
        this.setState({title});
    }
    setMessage(message){
        this.setState({message});
    }
    setColorClass(colorClass){
        this.setState({colorClass});
    }

    render() {
        return(
            <div>
                
                <form>
                    <input type="button" id="button1" value="pink" style={({color:'pink'})} onClick="" />
                    <input type="button" id="button2" value="blue" style={({color:'blue'})} onClick="" />
                    <input type="button" id="button3" value="red" style={({color:'red'})} onClick="" />
                    <input type="text" id="title" onChange="" />
                    <input type="textarea" id="message" onChange=""/>
                </form>
            </div>

                    

        )
    };
}