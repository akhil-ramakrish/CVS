import React, {Component}  from 'react';
import Video from './Gamecard';
import './GamePage.css';

class GamePage extends Component{
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={{marginLeft:"15px",fontSize:"45px"}}>{this.props.match.params.id}</h1>
                <div className="video-container">
                <h2 className="heading">Getting Started</h2>
                 <Video source={this.props.location.state.video1}></Video>
                 <h2 className="heading">Tips and Tricks</h2>
                 <Video source={this.props.location.state.video2}></Video>
                 <h2 className="heading">Game Sensitivity</h2>
                 <Video source={this.props.location.state.video3}></Video>
                 </div>
            </div>
        );
    }
 
}

export default GamePage;