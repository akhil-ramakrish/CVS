import React, { Component } from 'react';
import './About.css';
class About extends Component{
    render(){
        return(
<div className="content">
    <h1>Esports Discovery</h1>
     <div className="paragraph">
     <p style={{textAlign:"center"}}>E-Sports Discovery or simply E-Discovery is a site for people who are interested in Gaming but don't know where to start. 
    This site is for everyone who wants to know more about E-Sports and competitive gaming.Viewers can checkout Learn more so that their journey to the pro league can be much easier than others.</p>
     <p style={{textAlign:"center"}}>People who wanna follow Esports more closely can checkout live events section to get to know more about Esports events in a calendar year.</p>
    </div>
    </div>
        );
    }
}
export default About;
