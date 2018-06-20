import React from 'react';
import "./Card.css"

    export default function CardLayout(props) {
        console.log(props.titleFontSize);
        return (
            <div id="CardLayout" style={props.style}>
            <h1 
                style={props.titleFontSize}>{props.title}</h1>
            <section>{props.message}</section>
            </div>

        );
}