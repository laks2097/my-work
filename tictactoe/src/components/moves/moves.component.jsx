import React from 'react';

import '../moves/moves.styles.css';

const Moves = ({cells}) => {
    let i = 0;
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
                    {cells.map((item,index)=>{
                        i++;
                        return (<tr>
                            <td>{i}</td>
                            <td>{item}</td>
                            <td>{index}</td>
                        </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default Moves;