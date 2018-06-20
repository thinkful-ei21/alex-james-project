import React from 'react';


export default function InputButton(props) {

    return <input type="button" id={props.id} value={props.value} style={props.style} onClick={(e)=>props.onPress(props.background)} />
}