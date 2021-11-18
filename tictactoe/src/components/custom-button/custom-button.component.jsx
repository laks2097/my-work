import React from 'react';
import '../custom-button/custom-button.styles.css';

const CustomButton = function({title,onReset,moves}){
    
    
    return  (moves>0) ?  (
        <button className="custBtn" onClick={onReset}>{title}</button>
    ) :  null;
}

export default CustomButton;