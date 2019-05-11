import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from './linkButtons.module.css';

const LinkButtons = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Look at ad</p>
                </Col>
                <Col>
                    <Link to='/'>Go back</Link>   
                </Col>
                <Col>
                    <p>apply</p>
                </Col>
            </Row>
        </Container>
    )
}

export default LinkButtons;