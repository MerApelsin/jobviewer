import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import avatarPlaceholder from './../../../tempFiles/avatarPlaceholder.jpg'
import style from './companyContact.module.css';

const CompanyContact = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image style={{height: '150px'}} src={avatarPlaceholder}/>
                    <p>person name</p>
                    <p>email</p>
                    <p>phone if filled</p>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyContact;