import React from 'react';
import "./Card.css"

    export default function CardLayout(props) {
        return (
            <div id="CardLayout" style={props.style}>
            <h1 
                fontSize={({fontSize: props.titleSize})}>{props.title}</h1>
            <section>{props.message}</section>
            </div>

        );
}