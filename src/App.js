import React from 'react';
import './App.css';
import DataHandler from './components/data/dataHandler.js';

//main flow + callbacks + router?
class App extends React.Component {
  state = {
    hasFetched: false,
    status: ''
  }

  async componentDidMount() {
     let a = await DataHandler.fetchData();
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
