import React from 'react';
import '../board/board.styles.css';
import GameCell from '../game-cells/game-cells.component';

class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            next:"O",
            cells: [null,null,null,null,null,null,null,null,null]
        }
    }
    handleClick = (value,id)=>{
        console.log("Button is clicked;");
        var prevArr = this.state.cells; 
        if(prevArr[id]!==null) return;
        var changedValue = this.state.next;
        prevArr[id] = changedValue;
        
        var nextVal = (changedValue === "O") ? "X" : "O";
        this.setState({cells:prevArr, next:nextVal},()=>{console.log(this.state)});
    }

    render(){
        
        return (
            <div className="game-board-bg">
                
                <GameCell id="0" value={this.state.cells[0]} action={this.handleClick} >1</GameCell>
                <GameCell id="1" value={this.state.cells[1]} action={this.handleClick} >2</GameCell>
                <GameCell id="2" value={this.state.cells[2]} action={this.handleClick} >3</GameCell>
                <GameCell id="3" value={this.state.cells[3]} action={this.handleClick} >4</GameCell>
                <GameCell id="4" value={this.state.cells[4]} action={this.handleClick} >5</GameCell>
                <GameCell id="5" value={this.state.cells[5]} action={this.handleClick} >6</GameCell>
                <GameCell id="6" value={this.state.cells[6]} action={this.handleClick} >7</GameCell>
                <GameCell id="7" value={this.state.cells[7]} action={this.handleClick} >8</GameCell>
                <GameCell id="8" value={this.state.cells[8]} action={this.handleClick} >9</GameCell>   
                
            </div>
        
        );
    }
}

export default Board;