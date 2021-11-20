import React from 'react';
import Board from '../board/board.component';
import GameStatus from '../game-status/game-status.component';
import CustomButton from '../custom-button/custom-button.component';
import './game.styles.css';
import { isWinner } from '../../services/game-logic';
import Timer from '../timer/timer.component';
import ScoreBoard from '../score-board/score-board.component';
import Moves from '../moves/moves.component';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }
    getInitialState = () => {
        return {
            next: "O",
            cells: [null, null, null, null, null, null, null, null, null],
            message: "Moves: 0, Next: 'O'",
            moves: 0,
            games:0,
            owins:0,
            xwins:0,
            isReset:false,
            shouldContinue:true,
        };

    };
    handleClick = (id) => {
        // console.log(`Button ${id} is clicked;`);
        var cells = this.state.cells;

        if (cells[id] !== null) return;
        var changedValue = this.state.next;
        cells[id] = changedValue;

        var result = isWinner(cells);

        let message = "";
        let next = (changedValue === "O") ? "X" : "O";
        let moves = this.state.moves + 1;
        let games = this.state.games;
        let xwins = this.state.xwins;
        let owins = this.state.owins;
        let isReset = this.state.isReset;
        let shouldContinue = this.state.shouldContinue;

        if(shouldContinue === false) return;
        if (result.winner) {
            message = `Moves: ${moves}, ${result.winner} Wins`;
            games++;
            isReset = false;
            shouldContinue = false;
            if(result.winner === "X"){
                xwins++;
            }
            else if(result.winner === "O"){
                owins++;
            }
        } else if (result.gameOver) {
            message = `Game is a Draw`;
            isReset = false;
            games++;
        } else {
            message = `Moves: ${moves}, Next: '${next}'`;
        }
        

        this.setState({

            cells,
            next,
            message,
            moves,
            games,
            xwins,
            owins,
            isReset,
            shouldContinue,
        }
        );

    }
    handleReset = () => {
        // console.log("Reset Button clicked!");
        this.setState(
            {
                next: "O",
                cells: [null, null, null, null, null, null, null, null, null],
                message: "Moves: 0, Next: 'O'",
                moves: 0,
                isReset: true,
                shouldContinue:true
            }
        );
    }
    render() {       

        // let rows = [];
        // let cells = this.state.cells;
        
        return (
            <div className="app-container">
                <div className="score-move-section">
                    <Moves cells={this.state.cells}/>
                    <br/>
                    <ScoreBoard xWins={this.state.xwins} oWins={this.state.owins} totalGames={this.state.games}/>
                </div>
                <div className="game-bg">
                    <GameStatus message={this.state.message} moves={this.state.moves} />
                    <Board cellValues={this.state.cells} nextVal={this.state.next} actionFn={this.handleClick} />
                    <CustomButton title="RESET" onReset={this.handleReset} moves={this.state.moves} />
                    <br />

                </div>
                <div className="timer-clocks">
                    <Timer showManualControls={true} label="O" running={this.state.next === "O"} shouldReset={this.state.isReset} />
                    <Timer showManualControls={true} label="X" running={this.state.next === "X"} shouldReset={this.state.isReset} />
                </div>

            </div>
        );
    }
}

export default Game;