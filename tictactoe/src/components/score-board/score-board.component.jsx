import React from 'react';
import '../score-board/score-board.styles.css';

const ScoreBoard = ({xWins, oWins, totalGames}) =>{

    let draws = totalGames - (xWins + oWins) || 0;

    return (
        <div className="score-card-outer">
            <div className="score-card">
                <h5>Score Board</h5>
                <table className="score-table">
                    <thead>
                        <tr>
                            <th>Games</th>
                            <th>X Wins</th>
                            <th>O Wins</th>
                            <th>Draws</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{totalGames}</td>
                            <td>{xWins}</td>
                            <td>{oWins}</td>
                            <td>{draws}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ScoreBoard;