import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import avatarPlaceholder from './../../images/avatarPlaceholder.jpg';
import style from './companyContact.module.css'

const CompanyContact = (props) => {
    const { contact } = props;
  return (
    <Container fluid className={style.container}>
      <Row>
        <Col>
          <Image className={style.avatar} src={contact.photo || avatarPlaceholder}/>
          <p>{contact.name}</p>
          <p>Mail me at: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          {contact.phone && <p>Call me: {contact.phone}</p>}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanyContact
