import React, { Component } from 'react';
import Blizzcon from './Blizzcon.jpg';
import DOTA from './DOTA.jpg';
import FORTNITE from './FORTNITE.jpg';
import LOL from './LOL.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import "./Events.css";

class Events extends Component{
    render(){
        const fontstyle={
            fontSize:"15px",
            color:"white",
            margin:"20px"
              };
    return( 
           <div className="New-container">
    <div className="cards">
    <img src={DOTA} alt="Avatar" className ="pic"/>
    <div className="content">
      <p className="text">The International Dota 2</p>
  <a href="https://egamersworld.com/dota2/event/the-international-2020-NyYFkrIVw" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}  style={fontstyle} /></a>
  
    </div>
  </div>
  
  
  <div className="cards">
    <img src={FORTNITE} alt="Avatar" className="pic"/>
    <div className="content">
      <p className="text">Fortnite World Cup</p>
    <a href="https://realsport101.com/fortnite/fortnite-world-cup-2020-start-date-venue-qualification-bugha-times-news-updates-chapter-2/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}  style={fontstyle} />
      </a>
  
  </div>
  </div>

  <div className="cards">
    <img src={Blizzcon} alt="Avatar" className="pic"/>
    <div className="content">
      <p className="text">Blizzcon 2020</p>
    <a href="https://blizzardwatch.com/2020/03/31/blizzcon-2020-date/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}  style={fontstyle} />
      </a>
  
  </div>
  </div>

  <div className="cards">
    <img src={LOL} alt="Avatar" className="pic"/>
    <div className="content">
      <p className="text">LOL - World Championship</p>
    <a href="https://dotesports.com/league-of-legends/news/how-the-coronavirus-could-affect-msi-and-worlds-2020" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}  style={fontstyle} />
      </a>
  
  </div>
  </div>

  </div>
    );
    
}  
}
    
    export default  Events;
