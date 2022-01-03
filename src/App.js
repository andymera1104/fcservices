
import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Shingles from './pages/singles';
import Tile from './pages/tile';
import TileFloor from './pages/tileFloor';

/* import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; */
import Mailer from './components/mailer';
import Footer from './components/Footer';



function App() {

  /* const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
 */
  return (
    <Router>
      {/* <Sidebar isOpen= {isOpen} toggle={toggle}></Sidebar> */}
      {/* <Navbar toggle={toggle}></Navbar>    */}
      <Switch>
        <Route path="/" component={Home} exact/> 
       
        <Route path="/singles" component={Shingles} exact />
        <Route path="/tile" component={Tile} exact />
        <Route path="/tileFloor" component={TileFloor} exact />
      </Switch>  
      {/* <Mailer></Mailer> */}
      <Footer/>
    </Router>
  );
}

export default App;
