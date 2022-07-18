import React from 'react';
import {Col, Button} from 'react-bootstrap';
const Trending = (props) => {
    return (
        <Col md={4}>
            <div
                className="card"
                onClick={props.click}
                style={{
                background: `linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.421875) 45.83%, #000000 100%), url(${props.thumb})`,
                // backgroundImage: `url(${props.thumb})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%'
            }}>
              <div className="card-details">
                <h3>{props.title}</h3>
                <p className='d-flex justify-content-between align-items-center'><span>Category: {props.category}</span> <span>{props.stars} <i><img className='align-text-bottom' src={require('../../assets/star.png')} /></i></span></p>

              </div>
                
            </div>

        </Col>
    )
}
export default Trending;