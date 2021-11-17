import React from 'react';
import '../game-status/game-status.styles.css';

class GameStatus extends React.Component{
    
    render(){
        return (
            <div className="game-status-bg">
                <p>Next Move: O</p>
            </div>
        );
    } 
}

export default GameStatus;