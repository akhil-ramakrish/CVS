import React, { Component } from 'react';
import CSGO from './CS-Game.jpg';
import DOTA from './DOTA-Game.jpg';
import PUBG from './PUBG-Game.jpg';
import LOL from './LOL-Game.jpg';
import OVERWATCH from './Overwatch-Game.jpg';
import SIEGE from './Siege-Game.jpg';
import './Games.css';
import {BrowserRouter as Router,Route ,Link} from 'react-router-dom';
class Game extends Component{
       
    render(){
    
  return(
    <div>
      <h1>TOP GAMES</h1>
    <div className="game-content"> <div className="flex-container">
          
          <div className="card">
      <img src={DOTA} alt="DOTA" className="pic"/>
      <Link to={{
        pathname:'/DOTA-2',
        state:{
          video1:"https://www.youtube.com/embed/9Szj-CloJiI",
          video2:"https://www.youtube.com/embed/u0rYxCVRrUM",
          video3:"https://www.youtube.com/embed/0qNh-wKkJGU"
        }
      }}>
      <button className="button button2">Learn More</button>
      </Link>
     <button className="button button1"><a style={{textDecoration:"none",color:"white"}} href="https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/"> Play</a></button>
    </div>

       <div className="card">
      <img src={CSGO} alt="CSGO" className="pic"/>
      <Link to={{
         pathname:'/CSGO',
         state:{
          video1:"https://www.youtube.com/embed/a1lK2CKKGzI",
          video2:"https://www.youtube.com/embed/-7lTNsgnjuo",
          video3:"https://www.youtube.com/embed/GidC3dWlVUA"
        }
      }}>
     <button className="button button2">Learn More</button>
     </Link>
     <button className="button button1"><a style={{textDecoration:"none",color:"white"}} href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"> Play</a></button>
       </div>
      
      <div className="card">
         <img src={PUBG} alt="PUBG" className="pic"/> 
         <Link to={{
           pathname:"/PUBG",
           state:{
             video1:"https://www.youtube.com/embed/JoadRyVIcTI",
             video2:"https://www.youtube.com/embed/N_C8u9UA4Zo",
             video3:"https://www.youtube.com/embed/MddquVCgYGY"
           }
         }}>
       <button className="button button2">Learn More</button> </Link>
        <button className="button button1"><a style={{textDecoration:"none",color:"white"}} href="https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/"> Play</a></button>
       </div>
       
     <div className="card">
      <img src={LOL} alt="LOL" className="pic"/>
      <Link to={{
        pathname:'/League OF Legends',
        state:{
          video1:"https://www.youtube.com/embed/0uyLRPmmYPk",
          video2:"https://www.youtube.com/embed/z6lNQVpTBgI",
          video3:"https://www.youtube.com/embed/TzfQvu98b_o"
        }
      }}>
     <button className="button button2">Learn More</button>
     </Link>
     <button className="button button1"><a style={{textDecoration:"none",color:"white"}} href="https://play.euw.leagueoflegends.com/en_GB"> Play</a></button>
       </div>
          
     <div className="card">
      <img src={OVERWATCH} alt="OVERWATCH" className="pic"/>
      <Link to={{
        pathname:'/OVERWATCH',
        state:{
          video1:"https://www.youtube.com/embed/q_lrilSEqOE",
          video2:"https://www.youtube.com/embed/q_lrilSEqOE",
          video3:"https://www.youtube.com/embed/IbHkbbdz0-I"
        }
      }}>
     <button className="button button2">Learn More</button>
     </Link>
     <button className="button button1"><a style={{textDecoration:"none",color:"white"}} href="https://us.shop.battle.net/en-us/product/overwatch?blzcmp=ow_buy_nav"> Play</a></button>
       </div>

       <div className="card">
      <img src={SIEGE} alt="SIEGE" className="pic"/>
      <Link to={{
        pathname:'/SIEGE',
        state:{
          video1:"https://www.youtube.com/embed/VTP3Iadjw38",
          video2:"https://www.youtube.com/embed/1tdlVFxUqgM",
          video3:"https://www.youtube.com/embed/R_DyCKnLlyA"
        }
      }}>
     <button className="button button2">Learn More</button>
     </Link>
     <button className="button button1"><a style={{textDecoration:"none",color:"white"}} href="https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/"> Play</a></button>
       </div>
       
</div>
</div>
       </div>
  );
}
}
export default Game;