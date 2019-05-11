import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import legologo from '../../../tempFiles/legoLogo.png';
import style from './companyDesc.module.css';

const CompanyDesc = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image style={{width: '120px'}} src={legologo}/>
                    <p>name - industry</p>
                    <p>disc</p>
                    <p>website</p>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyDesc;