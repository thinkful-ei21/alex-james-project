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
            colorClass: {backgroundColor: 'pink'}
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
                <CardLayout title={this.state.title} message={this.state.message} style={this.state.colorClass}/>
                <form>
                    <InputButton id="button1" value="red" style={({color: 'red'})} background={({backgroundColor: 'red'})} onPress={(e)=>{this.setColorClass(e)}}/>
                    <InputButton id="button2" value="pink" style={({color: 'pink'})} background={({backgroundColor: 'pink'})} onPress={(e)=>{this.setColorClass(e)}}/>
                    <InputButton id="button3" value="blue" style={({color: 'blue'})} background={({backgroundColor: 'blue'})} onPress={(e)=>{this.setColorClass(e)}}/>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={(e)=>this.setTitle(e.target.value)} />
                    <label htmlFor="message">Message:</label>
                    <textarea type="textarea" id="message" onChange={(e)=>this.setMessage(e.target.value)}/>
                </form>
            </div>

                    

        )
    };
}