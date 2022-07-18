import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay,faHeart} from '@fortawesome/free-solid-svg-icons'
const Banner = () => {
    return (
        <Container className='banner'>
          <Row className="cont align-items-md-center">
            <Col md={6}>
              <h2>Kimetsu no Yaiba</h2>
              <p><span className='me-3'><i><img className='align-text-bottom' src={require('../../assets/star.png')} /></i>5</span>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
              <p>Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slay#er after his family was slaughtered and his younger sister Nezuko turned into a demon.</p>
              <p><a href="#" className='btn btn-primary'><FontAwesomeIcon icon={faPlay} className="me-2" />Watch Now!</a> <a href="#" className='btn btn-outline-secondary'><FontAwesomeIcon icon={faHeart} /></a></p>
            </Col>
          </Row>
          <Row className='tabs'>
            <Col sm={2} md={1}><p className='active m-0'><a href="#">Overview</a></p></Col>
            <Col sm={2} md={1}><p className='m-0'><a href="#">Episodes</a></p></Col>
            <Col sm={2} md={1}><p className='m-0'><a href="#">Details</a></p></Col>
          </Row>
        </Container>
    )
}

export default Banner;