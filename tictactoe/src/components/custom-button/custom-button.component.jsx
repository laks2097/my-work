import React from 'react';
import '../custom-button/custom-button.styles.css';

const CustomButton = function({title,onReset}){
    return (
        <button className="custBtn" onClick={onReset}>{title}</button>
    );
}

export default CustomButton;