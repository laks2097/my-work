import React from 'react';
import '../board/board.styles.css';
import GameCell from '../game-cells/game-cells.component';

// class Board extends React.Component{

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

    const Board = ({cellValues, actionFn,winningCombo})=>{
        
        
        return (
            <div className="game-board-bg">
                {
                    cellValues.map((cell,id)=>
                    (<GameCell 
                        key={id}  
                        id={id} 
                        value={cellValues[id]} 
                        action={actionFn} >
                            1
                        </GameCell>))
                }
               
                {/* <GameCell id="1" value={cellValues[1]} action={actionFn} >2</GameCell>
                <GameCell id="2" value={cellValues[2]} action={actionFn} >3</GameCell>
                <GameCell id="3" value={cellValues[3]} action={actionFn} >4</GameCell>
                <GameCell id="4" value={cellValues[4]} action={actionFn} >5</GameCell>
                <GameCell id="5" value={cellValues[5]} action={actionFn} >6</GameCell>
                <GameCell id="6" value={cellValues[6]} action={actionFn} >7</GameCell>
                <GameCell id="7" value={cellValues[7]} action={actionFn} >8</GameCell>
                <GameCell id="8" value={cellValues[8]} action={actionFn} >9</GameCell>    */}
                
            </div>
        
        );
    }
// }

export default Board;