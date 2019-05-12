import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DataHandler from './data/dataHandler.js';
import ShortCard from './gui/shortCard.js';
import style from './home.module.css';

//main flow + callbacks + router?
class Home extends React.Component {
  state = {
    hasFetched: false,
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
      const shortAdCards = this.state.shortAds.map((ad,index) => <ShortCard key={'ad'+index} adinfo={ad}/>);
    return (
      <div className={style.home}>
        {shortAdCards}
      </div>
    );
  }
}

export default Home;