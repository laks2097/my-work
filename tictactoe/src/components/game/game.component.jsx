import React from 'react';
import Board from '../board/board.component';
import GameStatus from '../game-status/game-status.component';
import CustomButton from '../custom-button/custom-button.component';
import './game.styles.css';

class Game extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            next:"O",
            cells: [null,null,null,null,null,null,null,null,null],
            message:"Next Move is: 'O'"
        }
    }
    handleClick = (id)=>{
        console.log(`Button ${id} is clicked;`);
        var prevArr = this.state.cells; 
        if(prevArr[id]!==null) return;
        var changedValue = this.state.next;
        prevArr[id] = changedValue;
        
        var nextVal = (changedValue === "O") ? "X" : "O";
        this.setState({cells:prevArr, next:nextVal,message:`Next Move is: '${nextVal}'`},()=>{console.log(this.state)});
    }

    render(){
        return (
            <div className="game-bg">
                <GameStatus message={this.state.message} />
                <Board cellValues = {this.state.cells} nextVal={this.state.next} actionFn={this.handleClick}/>
                <CustomButton title="RESET"/>
            </div>
        );
    } 
}

export default Game;