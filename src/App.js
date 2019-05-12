import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/home.js';
import FullCard from './components/gui/fullCard.js';
import Header from './components/gui/header.js';

//Root component, doesn't use module.css since it's only meant to be use once.
//Decides what component to render depending on (url) path match
class App extends React.Component {
  render(){
    return (
        <div className="Header">
            <Header/>
            <div className="App">  
                <Switch>
                    <Route exact path="/advert/:id" component={FullCard} />
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;
