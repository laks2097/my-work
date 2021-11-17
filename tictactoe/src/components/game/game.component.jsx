import React from 'react';
import Board from '../board/board.component';
import GameStatus from '../game-status/game-status.component';
import CustomButton from '../custom-button/custom-button.component';
import './game.styles.css';

class Game extends React.Component{
    
    render(){
        return (
            <div className="game-bg">
                <GameStatus />
                <Board />
                <CustomButton title="RESET"/>
            </div>
        );
    } 
}

export default Game;