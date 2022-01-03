
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Shingles from './pages/singles';
import Tile from './pages/tile';
import TileFloor from './pages/tileFloor';

import Footer from './components/Footer';

import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {


  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact/> 
       
        <Route path="/singles" component={Shingles} exact />
        <Route path="/tile" component={Tile} exact />
        <Route path="/tileFloor" component={TileFloor} exact />
      </Switch>  

      <MessengerCustomerChat
          pageId="109854618241458"
          appId="2255011484672811"
        />

      <Footer/>

        
    </Router>
    
  );
}

export default App;
