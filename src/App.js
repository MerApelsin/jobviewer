import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/home.js';
import FullCard from './components/gui/fullCard.js';

//main flow + callbacks + router?
class App extends React.Component {
  render(){
      
    return (
      <div className="App">
        <Switch>
            <Route exact path="/ads/:id" component={FullCard} />
            <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
