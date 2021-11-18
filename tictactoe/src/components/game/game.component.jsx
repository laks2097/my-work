import React from 'react';
import Board from '../board/board.component';
import GameStatus from '../game-status/game-status.component';
import CustomButton from '../custom-button/custom-button.component';
import './game.styles.css';

class Game extends React.Component{
    
    initialState = () => {
        return {
            next:"O",
            cells: [null,null,null,null,null,null,null,null,null],
            message:"Next Move is: 'O'",
            moves:0
        };
        
    };
    constructor(props){
        super(props);
        
        this.state = {
            next:"O",
            cells: [null,null,null,null,null,null,null,null,null],
            message:"Next Move is: 'O'",
            moves:0
        };
    }
    handleClick = (id)=>{
        // console.log(`Button ${id} is clicked;`);
        var prevArr = this.state.cells; 
        if(prevArr[id]!==null) return;
        var changedValue = this.state.next;
        prevArr[id] = changedValue;
        
        var nextVal = (changedValue === "O") ? "X" : "O";
        this.setState(({moves})=>({
            
                cells:prevArr, 
                next:nextVal,
                message:`Next Move is: '${nextVal}'`,
                moves:(moves+1)
            })
        );
    }
    handleReset = ()=>{
        // console.log("Reset Button clicked!");
        this.setState(
            this.initialState()
        ,()=>{console.log(this.state);});
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