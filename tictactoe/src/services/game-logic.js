export const isWinner = (cells)=>{

    var winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];

    let result={
        winner:null,   //no winner
        winningCombo:null,
        gameOver: false //game is not over
    };

    for(let winningCombo of winningCombos){
        let [f,s,t] = winningCombo;
        if(cells[f] && cells[f] === cells[s] && cells[f] === cells[t]){
            result.winner=cells[f];
            result.winningCombo=winningCombo;
            result.gameOver=true;
            return result;
        }

    }
    let moves = cells.filter(cell => { return (cell!==null)?1:0;}).length;
    result.gameOver = moves===9;
    return result;

}