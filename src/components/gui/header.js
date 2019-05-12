import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from './header.module.css';

const Header = () => (
    <Container fluid className={style.container}>
        <Row>
            <Col>
                <h4 className={style.title}>Jobviewer</h4>
            </Col>
        </Row>
    </Container>
)

export default Header;