import React from 'react';
import '../game-status/game-status.styles.css';

// class GameStatus extends React.Component{
    
    const GameStatus = ({message,moves})=>{
        return (
            <div className="game-status-bg">
                <p>Moves: {moves}, {message}</p>
            </div>
        );
    } 
// }

export default GameStatus;