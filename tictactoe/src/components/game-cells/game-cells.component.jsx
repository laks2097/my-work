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

const GameCell = function (props){

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

        props.action(props.id);
    }
    let style;
    if(props.value === null){
        style = {
            color:"transparent"
        };
    }
    else{
        if(props.value === "X")
        {   style = {
                color:"red"
            };
        }
        else{
            style = {
                color: "blue"
            };
        }

    }
    let Cellvalue = props.value || "_";
return (<button style={style} id={props.id} className="game-cell-bg" onClick={handleChange}>
               {Cellvalue}
</button>);
};

export default GameCell;