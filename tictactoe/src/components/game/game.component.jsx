import React from 'react';
import Board from '../board/board.component';
import GameStatus from '../game-status/game-status.component';
import CustomButton from '../custom-button/custom-button.component';
import './game.styles.css';
import { isWinner } from '../../services/game-logic';

class Game extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            next:"O",
            cells: [null,null,null,null,null,null,null,null,null],
            message:"Next Move is: 'O'",
            moves:0
        };
    }
    initialState = () => {
        return {
            next:"O",
            cells: [null,null,null,null,null,null,null,null,null],
            message:"Next Move is: 'O'",
            moves:0
        };
        
    };
    handleClick = (id)=>{
        // console.log(`Button ${id} is clicked;`);
        var cells = this.state.cells; 
        
        if(cells[id]!==null) return;
        var changedValue = this.state.next;
        cells[id] = changedValue;
        
        var result = isWinner(cells);
        let message = "";
        let next = (changedValue === "O") ? "X" : "O";
        let moves = this.state.moves+1;
        if(result.winner){
            message=`${result.winner} Wins`;
        } else if(result.gameOver){
            message=`Game ends Stalemate`;
        } else{
            message= `Moves: ${moves}, Next: '${next}'`;
        }

        
        this.setState({
            
                cells, 
                next,
                message,
                moves
            }
        );
    }
    handleReset = ()=>{
        // console.log("Reset Button clicked!");
        this.setState(
            this.initialState()
        );
    }
    render(){
        return (
            <div className="game-bg">
                <GameStatus message={this.state.message} moves={this.state.moves}/>
                <Board cellValues = {this.state.cells} nextVal={this.state.next} actionFn={this.handleClick} />
                <CustomButton title="RESET" onReset={this.handleReset} moves={this.state.moves}/>
            </div>
        );
    } 
}

export default Game;