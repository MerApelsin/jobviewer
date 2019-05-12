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
    
    render(){
        const { getComplete, error, workAd } = this.state;
        return (
            <Container className={style.container}>
                {!getComplete &&
                    <Row>
                        <Col xs={1} className={style.spinnerCol}><Spinner/></Col>
                    </Row>}
                <Row>
                    {error !== '' && <p>{error}</p>}
                    {getComplete && error === '' &&
                    <Col>
                        <CompanyHeader headerDetails={workAd.company} title={workAd.workDetails.workTitle} />
                        <Details workDetails={workAd.workDetails}/>
                        <h4 className={style.companySection}>About the Company</h4>
                        <CompanyInfo aboutCompany={workAd.company} contact={workAd.contact}/>
                        <LinkButtons urls={workAd.urls}/>
                    </Col>}
                </Row>
            </Container>
        );
    }
    
}

export default FullCard;
