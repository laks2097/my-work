import React from 'react';

import '../moves/moves.styles.css';

const Moves = ({moveList}) => {
    
    return (
        <div className="moves-outer">
            <div className="moves-card">
                <h5>Move List</h5>
                <table className="moves-table">
                    <thead>
                        <tr>
                            <th>Move #</th>
                            <th>Player</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                    {moveList.map((item,index)=>{
                        
                        return (<tr>
                            <td>{index+1}</td>
                            <td>{item.player}</td>
                            <td>{item.position+1}</td>
                        </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default Moves;