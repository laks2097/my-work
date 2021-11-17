import React from 'react';
import '../custom-button/custom-button.styles.css';

const CustomButton = function(props){
    return (
        <button className="custBtn" onClick={props.handleClick}>{props.title}</button>
    );
}

export default CustomButton;