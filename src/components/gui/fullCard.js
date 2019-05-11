//react+react bootstrap stuff, should be pretty pure component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DataHandler from './../data/dataHandler.js';
import style from './fullCard.module.css';

import Spinner from './spinner.js';
import CompanyHeader from './cardParts/companyHeader.js';
import Details from './cardParts/details.js';
import CompanyInfo from './cardParts/companyInfo.js';
import LinkButtons from './cardParts/linkButtons.js';

class FullCard extends React.Component{
    state = {
        workAd: '',
        getComplete: false,
        error: ''
    }

    async componentDidMount(){   
        const { match: { params } } = this.props;
        const fullAd = await DataHandler.getFullAd(params.id);
        if(fullAd.error === undefined){
            this.setState({workAd: fullAd, getComplete: true});
        }
        else{
            this.setState({getComplete: true, error: fullAd.error});
        }
    }
    
    //const currentAd = DataHandler.getFullAd(params.id);
    render(){
        console.log(this.state);
        const { match: { params } } = this.props;
        const { getComplete, error, workAd } = this.state;
        return (
            <Container className={style.container}>
                <Row>
                    {error !== '' && <p>{error}</p>}
                    {!getComplete &&
                        <Col><Spinner/></Col>}
                    {getComplete && error === '' &&
                    <Col>
                        <p>Full card! {params.id}</p>
                        <CompanyHeader/>
                        <Details workDetails={workAd.workDetails}/>
                        <CompanyInfo/>
                        <LinkButtons/>
                    </Col>}
                </Row>
            </Container>
        );
    }
    
}

export default FullCard;
