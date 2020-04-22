import React  from 'react';
import Video from './Gamecard';
import './GamePage.css';
const gamePage = (props)=>{
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{fontSize:"45px"}}>{props.match.params.id}</h1>
            <div className="video-container">
           <h1 style={{fontSize:"30px"}}>Getting Started</h1>
             <Video source={props.location.state.video1}></Video>
          <h1 style={{fontSize:"30px"}}>Tips and Tricks</h1>
             <Video source={props.location.state.video2}></Video>
          <h1 style={{fontSize:"30px"}}>Game Sensitivity</h1>
             <Video source={props.location.state.video3}></Video>
             </div>
        </div>
    );
}

export default GamePage;