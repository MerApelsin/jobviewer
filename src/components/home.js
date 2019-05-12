import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DataHandler from './data/dataHandler.js';
import ShortCard from './gui/shortCard.js';
import Spinner from './gui/spinner.js';
import style from './home.module.css';


//the component that displays at root url, shows the shorter 'advert cards'.
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
        {!this.state.hasFetched && 
            <div className={style.spinner}><Spinner/></div>}
        {shortAdCards}
      </div>
    );
  }
}

export default Home;