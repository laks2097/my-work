import React from 'react';
import '../game-cells/game-cells.styles.css';
// class GameCell extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             turnValue:"_"
//         };
//     }
    
//     handleClick = () => {
//         console.log("Button is clicked!");
//         this.setState({turnValue:"O"});
//     }
//     render(){
//         return (
//             <button className="game-cell-bg" onClick={this.handleClick}>
//                {this.state.turnValue}
//             </button>
//         );
//     }
    
// };

const GameCell = function ({id,value,action,...othervalues}){

    const handleChange = function(){
        // var changedValue = props.value;
        // if(props.value === "_"){
        //     changedValue = "O";
        // }
        // else if(props.value === "O"){
        //     changedValue = "X";
        // }
        // else{
        //     changedValue = "O";
        // }

        action(id);
    }
    let style = {
        color: (value !== null) ? (value === "X") ? "red" : "blue" : "transparent",
        cursor:(value!== null) ? "not-allowed" : "pointer"
    };
    let Cellvalue = value || "_";
return (<button style={style} id={id} className="game-cell-bg" onClick={handleChange} >
               {Cellvalue}
</button>);
};

export default GameCell;