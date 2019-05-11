//react+react bootstrap stuff, should be pretty pure component
import React from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import VisitButton from './visitButton.js';
import style from './shortCard.module.css';

const ShortCard = (props) => {
    const {id, company, employmentType, workCategory, jobTitle, location} = props.adinfo;
    console.log(location);
    return(
    <Container className={style.container}>
        <Row>
            <Col xs={8} id={id}>
                <div className={style.cardContent} key={id}>
                    <div className={style.companyBlock}>
                        <Image className={style.companyLogo} src={company.logo} alt={`Company logo for ${company.name}`}/>
                        <p className={style.companyName}>{company.name}</p>
                    </div>
                    <div>
                        <p>title {jobTitle}</p>
                        <p>category {workCategory}</p>
                        <p>type {employmentType}</p>
                        <p>location {location.text}</p>
                    </div>
                    <div>
                    <Link to={`/ads/${id}`}>Read more</Link>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    
    );
}

export default ShortCard;

/*
short:{
            id: id,
            company: {
              logo: rawData[object].company.logo,
              name: rawData[object].company.name,
              employmentType: rawData[object].employment_type,
              },
            workCategory: rawData[object].function,
            jobTitle: rawData[object].title
            }

*/