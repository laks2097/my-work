import React from 'react';
import '../custom-button/custom-button.styles.css';

const CustomButton = function({title,onReset,moves}){
    
    const styles = (moves>0) ? {
        visibility:"visible"
    }
    :
    {
        visibility:"hidden"
    }
    
    return (
        <button style={styles} className="custBtn" onClick={onReset}>{title}</button>
    )
}

export default CustomButton;