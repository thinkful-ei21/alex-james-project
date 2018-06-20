import React from 'react';
import './Card.css';
import CardLayout from './CardLayout';
import InputButton from './InputButton';

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
            <div className="card-form">
             
                <form>
                    <InputButton id="button1" value="red" style={({color: 'red'})} />
                    <InputButton id="button2" value="pink" style={({color: 'pink'})} />
                    <InputButton id="button3" value="blue" style={({color: 'blue'})}/>
                    <label for="title">Title:</label>
                    <input type="text" id="title" onChange="" />
                    <label for="message">Message:</label>
                    <textarea type="textarea" id="message" onChange=""/>
                </form>
            </div>

                    

        )
    };
}