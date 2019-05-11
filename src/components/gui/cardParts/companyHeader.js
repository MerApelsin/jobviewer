import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import style from './companyHeader.module.css';
import legologo from '../../../tempFiles/legoLogo.png';
import cover from '../../../tempFiles/cover.jpg';


const CompanyHeader = (props) => {
    //const {} = props.adinfo;
    return (
        <Container className={style.container} style={{backgroundImage: `url(${cover})`}}>
            <Row style={{height: '100%'}}>
                <Col xs={3}>
                    <div className={style.logoBlock}>
                        <Image className={style.logo} src={legologo}/>
                        <p className={style.name}>Lego</p>
                    </div>
                </Col>
                <Col xs={9}>
                    <div className={style.title}>
                        <p className={style.titleText}>QA Tester</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyHeader;