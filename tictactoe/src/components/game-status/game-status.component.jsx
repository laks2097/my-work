import React from 'react';
import '../game-status/game-status.styles.css';

// class GameStatus extends React.Component{
    
    const GameStatus = ({message})=>{
        return (
            <div className="game-status-bg">
                <p>{message}</p>
            </div>
        );
    } 
// }

export default GameStatus;