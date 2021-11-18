import React from 'react';
import '../board/board.styles.css';
import GameCell from '../game-cells/game-cells.component';

class Board extends React.Component{

    // constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     next:"O",
    //     //     cells: [null,null,null,null,null,null,null,null,null]
    //     // }
    // }
    // handleClick = (value,id)=>{
    //     console.log("Button is clicked;");
    //     var prevArr = this.state.cells; 
    //     if(prevArr[id]!==null) return;
    //     prevArr[id] = changedValue;
    //     var changedValue = this.state.next;
        
    //     var nextVal = (changedValue === "O") ? "X" : "O";
    //     this.setState({cells:prevArr, next:nextVal},()=>{console.log(this.state)});
    // }

    render(){
        
        return (
            <div className="game-board-bg">
                
                <GameCell id="0" value={this.props.cellValues[0]} action={this.props.actionFn} >1</GameCell>
                <GameCell id="1" value={this.props.cellValues[1]} action={this.props.actionFn} >2</GameCell>
                <GameCell id="2" value={this.props.cellValues[2]} action={this.props.actionFn} >3</GameCell>
                <GameCell id="3" value={this.props.cellValues[3]} action={this.props.actionFn} >4</GameCell>
                <GameCell id="4" value={this.props.cellValues[4]} action={this.props.actionFn} >5</GameCell>
                <GameCell id="5" value={this.props.cellValues[5]} action={this.props.actionFn} >6</GameCell>
                <GameCell id="6" value={this.props.cellValues[6]} action={this.props.actionFn} >7</GameCell>
                <GameCell id="7" value={this.props.cellValues[7]} action={this.props.actionFn} >8</GameCell>
                <GameCell id="8" value={this.props.cellValues[8]} action={this.props.actionFn} >9</GameCell>   
                
            </div>
        
        );
    }
}

export default Board;