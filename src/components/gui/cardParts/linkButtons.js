import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import VisitButton from './../visitButton.js';

import style from './linkButtons.module.css';

const LinkButtons = (props) => {
    const { urls } = props;
    return (
        <Container className={style.container}>
            <Row>
                <Col>
                    <VisitButton intern={false} url={urls.adUrl} text={'Look at advert'}/>
                </Col>
                <Col>
                    <VisitButton intern={true} url={'/'} text={'Go back'}/> 
                </Col>
                <Col>
                    <VisitButton intern={false} url={urls.applyUrl} text={'Apply'}/>
                </Col>
            </Row>
        </Container>
    )
}

export default LinkButtons;
