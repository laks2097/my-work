import React from 'react';
import './App.css';
import GameHeader from './components/game-header/game-header.component';
import Game from './components/game/game.component';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      title:"Tic Tac Toe",
    }
  }
  render(){
    return(
      <div>
        <GameHeader title={this.state.title} color="green"/>
        <div className="main-content">
          
          <Game/>
          
        </div>
      </div>
    );
  }
}

export default App;
