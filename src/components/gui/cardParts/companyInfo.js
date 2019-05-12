import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import style from './companyInfo.module.css';
import CompanyDesc from './companyDesc.js';
import CompanyContact from './companyContact.js';
import BorderBottom from './borderBottom.js';

const CompanyInfo = (props) => {
    return(
        <Container className={style.container}>
            <Row>
                <Col xs={8}>
                    <CompanyDesc aboutCompany={props.aboutCompany}/>
                </Col>
                <Col xs={4}>
                    <CompanyContact contact={props.contact}/>
                </Col>
                <BorderBottom/>
            </Row>
        </Container>);
}

export default CompanyInfo;