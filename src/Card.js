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
            colorClass: {backgroundColor: 'pink'},
            titleSize: {fontSize: '30px'}
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

    setTitleSize(titleSize) {
        this.setState({ titleSize })
        console.log(titleSize);
    }

    render() {
        return(
            <div className="container">
                <CardLayout title={this.state.title} message={this.state.message} style={this.state.colorClass} titleFontSize={this.state.titleSize}/>
                <form className='card-form'>
                    <InputButton id="button1" value="red" style={({color: 'red'})} background={({backgroundColor: 'red'})} onPress={(e)=>{this.setColorClass(e)}}/>
                    <InputButton id="button2" value="pink" style={({color: 'pink'})} background={({backgroundColor: 'pink'})} onPress={(e)=>{this.setColorClass(e)}}/>
                    <InputButton id="button3" value="blue" style={({color: 'blue'})} background={({backgroundColor: 'blue'})} onPress={(e)=>{this.setColorClass(e)}}/>
                    <label htmlFor="title-size">Font Size:</label>
                    <input type="number" id="title-size" min="10" max="60" onChange={(e) => this.setTitleSize({fontSize:e.target.value+'px'})}/>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={(e)=>this.setTitle(e.target.value)} />
                    <label htmlFor="message">Message:</label>
                    <textarea type="textarea" id="message" onChange={(e)=>this.setMessage(e.target.value)}/>
                </form>
            </div>

                    

        )
    };
}