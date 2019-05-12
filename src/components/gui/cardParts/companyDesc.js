import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import logoPlaceholder from './../../images/logoPlaceholder.png'
import style from './companyDesc.module.css';

const CompanyDesc = (props) => {
    const { aboutCompany } = props;
    return (
        <Container className={style.container}>
            <Row>
                <Col>
                    <Image className={style.logo} src={aboutCompany.logo || logoPlaceholder}/>
                    <p className={style.subtitle}><strong>{aboutCompany.name}</strong></p>
                    {aboutCompany.industry && <p className={style.subtitle}><i>Company type: {aboutCompany.industry}</i></p>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={style.about}>
                        <div dangerouslySetInnerHTML={aboutCompany.desc}/>
                        <a href={aboutCompany.website}>{`Visit ${aboutCompany.name}'s site`}</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyDesc;