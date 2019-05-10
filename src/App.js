import React from 'react';
import './App.css';
import DataHandler from './components/data/dataHandler.js';
import ShortCard from './components/gui/shortCard.js';

//main flow + callbacks + router?
class App extends React.Component {
  state = {
    hasFetched: false,
    status: '',
    shortAds: [],
  }

  async componentDidMount() {
        await DataHandler.fetchData(this.finishedFetch);
        this.setState({shortAds: DataHandler.getShortAds()}, () => {this.setState({hasFetched: true});});
    }
  
    finishedFetch = () => {
        this.setState({hasFetched: true});
    }

  render(){
      const shortAdCards = this.state.shortAds.map(ad => <ShortCard adinfo={ad}/>);
    return (
      <div className="App">
        <p>{(this.state.hasFetched).toString()}</p>
        {shortAdCards}
      </div>
    );
  }
}

export default App;
