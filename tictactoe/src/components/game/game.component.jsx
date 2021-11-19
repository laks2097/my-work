import React from 'react';
import Board from '../board/board.component';
import GameStatus from '../game-status/game-status.component';
import CustomButton from '../custom-button/custom-button.component';
import './game.styles.css';
import { isWinner } from '../../services/game-logic';
import Timer from '../timer/timer.component';

class Game extends React.Component{
    
    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }
    getInitialState = () => {
        return {
            next:"O",
            cells: [null,null,null,null,null,null,null,null,null],
            message:"Moves: 0, Next: 'O'",
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
            message=`Moves: ${moves}, ${result.winner} Wins`;
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
            this.getInitialState()
        );
    }
    render(){
        return (
            <div className="app-container">
                <div className="game-bg">
                    <GameStatus message={this.state.message} moves={this.state.moves}/>
                    <Board cellValues = {this.state.cells} nextVal={this.state.next} actionFn={this.handleClick} />
                    <CustomButton title="RESET" onReset={this.handleReset} moves={this.state.moves}/>
                    <br/>
                    
                </div>
                <div className="timer-clocks">
                    <Timer showManualControls={true} label="O" running = {this.state.next==="O"}/>
                    <Timer showManualControls={true} label="X" running = {this.state.next==="X"}/>
                </div>
                
            </div>
        );
    } 
}

export default Game;