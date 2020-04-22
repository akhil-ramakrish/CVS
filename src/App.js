import React, { Component } from 'react';
import './App.css';
import ErrorPage from './Error/Error.js';
import About from './About/About.js';
import Nav from "./Navbar/Nav.js";
import Home from "./Home/Home.js";
import Footer from './footer/Footer.js';
import GamePage from './GamePage/GamePage.js';
import ScrollToTop from './ScrollToTop.js';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



  function App (){
  

  return (

    
    <Router >
       <ScrollToTop>
       <div>
      <Nav/>
      
    <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/Home" exact component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/:id" component={GamePage}/>
     <Route path="*" component={ErrorPage}/>
     </Switch>
    
     
      </div>
      <Footer />
     
       </ScrollToTop>
       </Router>
    
  );
}


export default App;

