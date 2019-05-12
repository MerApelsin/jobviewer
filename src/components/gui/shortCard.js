//react+react bootstrap stuff, should be pretty pure component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logoPlaceholder from './../images/logoPlaceholder.png';
import VisitButton from './visitButton.js';
import style from './shortCard.module.css';

const ShortCard = (props) => {
    const {id, company, employmentType, workCategory, jobTitle, location} = props.adinfo;
    return(
    <Container key={'id'+id} className={style.container}>
        <Row>
            <Col xs={2} id={id}>
                <div className={style.companyInfo}>
                    <Image className={style.companyLogo} src={company.logo || logoPlaceholder} alt={`Company logo for ${company.name}`}/>
                    <p>{company.name}</p>  
                </div>
            </Col>
            <Col xs={8}>
                <div className={style.shortDesc}>
                    <p className={style.title}>{jobTitle}</p>
                    <span className={style.info}>
                        <p><i>in</i> {workCategory}</p>
                        <p><i>Employment form:</i> {employmentType}</p>
                        <p><i>in</i> {location.text}</p>
                    </span>
                </div>
            </Col>
            <Col xs={2}>
                <div className={style.buttonArea}>
                    <VisitButton intern={true} url={`/ads/${id}`} text={'Read more'}/>
                </div>
            </Col>
        </Row>
    </Container>
    
    );
}

export default ShortCard;
