import React from 'react';
import './timer.style.css';

class Timer extends React.Component {

    state = {
        ms:0,
    }
    
// Lakshay's Way of Timer code:
    // start = ()=>{
    //     this.setState({s:0,ms:0});
    //     clearInterval(this.id);
    //     clearInterval(this.id2);
    //     this.id = setInterval(()=>{
    //         let ms = this.state.ms+1;
    //         if(ms===10){
    //             ms = 1;
    //         }
    //         this.setState({ms});
    //     },100);

    //     this.id2 = setInterval(()=>{
    //         const s = this.state.s+1;
    //         this.setState({s});
    //     },1000);
    // }
    // stop = ()=>{
    //     if(this.id){
    //         clearInterval(this.id);
    //         this.id = null;
    //     }
    //     if(this.id2){
    //         clearInterval(this.id2);
    //         this.id2 = null;
    //     }
        
        
    // }
// Vivek's Way of Timer code:

    start = ()=>{
        if(!this.id){
            
            this.id = setInterval(()=>{
               if(this.props.running){
                    const ms = this.state.ms;
                    this.setState({ms: ms+100});
               }
                
            },100);
        }
    }
    stop = ()=>{
        if(this.id){
            clearInterval(this.id);
            this.id = null;
        }
    }


    componenentDidUnmount = () =>{
        this.stop();
    }
    componentDidMount = () =>{
       if(this.props.running)
            this.start();   
    }
    componentDidUpdate = (prevProps)=>{
        if(prevProps.running !== this.props.running){
            if(this.props.running){
                this.start();
            }
            else{
                this.stop();
            }
        }
    }

    render(){

        let seconds = Math.floor(this.state.ms / 1000);
        const ms = this.state.ms - seconds*1000;
        const hms = Math.floor(ms/100);
        if(seconds<10){
            seconds = "0"+seconds;
        }
        const btnContainerStyle = (this.props.showManualControls) ? {display: "block"} : {display: "none"};

        return (
            <div className="timer-container">
                <p className="player-label">Player: {this.props.label}</p>
                <p className="timer-text">{seconds}.{hms}</p>
                <div className="timer-button-container" style={btnContainerStyle}>
                    <button id="start-btn" className="timer-button-start" onClick={this.start}>Start</button>
                    <button id="stop-btn" className="timer-button-stop" onClick={this.stop}>Stop</button>
                </div>

            </div>
        );
        // An example of conditional rendering is shown below
        // return (
        //     <div className="timer-container">
        //         <p className="timer-text">{seconds}.{hms}</p>
        //          { this.props.showManualControls &&  <div className="timer-button-container" style={btnContainerStyle}>
        //             <button id="start-btn" className="timer-button-start" onClick={this.start}>Start</button>
        //             <button id="stop-btn" className="timer-button-stop" onClick={this.stop}>Stop</button>
        //         </div>
        //         }
        //     </div>
        // );
    }
}

export default Timer;