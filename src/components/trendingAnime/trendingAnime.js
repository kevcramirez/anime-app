import React from 'react';
import {Col, Row} from 'react-bootstrap';
const TrendingAnime = (props) => {
    // const episodes = props.index;
    const episodes = props
        .episodes
        .map(episode => {
            return (
              <Row key={episode.title} className="anime-card d-flex align-items-center">
                <Col md={7} className="anime-card-img">
                  <img src={episode.img} alt="" />
                </Col>
                <Col md={5} className="anime-card-desc">
                  <h4>{episode.title}</h4>
                  <p>{episode.desc}</p>
                </Col>
              </Row>
            )

        });
    console.log(props)
    return (
        <>
            <Col md={5}>
                <div
                    className="card-anime-selected"
                    onClick={props.click}
                    style={{
                    background: `linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.421875) 45.83%, #000000 100%), url(${props.thumb})`}}>
                    <div className="card-details">
                        <h3>{props.title}</h3>
                        <p className='d-flex justify-content-between align-items-center'>
                            <span>Category: {props.category}</span>
                            <span>{props.stars}
                                <i><img className='align-text-bottom' src={require('../../assets/star.png')}/></i>
                            </span>
                        </p>

                    </div>

                </div>
                <h3 className='mb-3'>{props.synopsis}</h3>

            </Col>
            <Col md={7}>
              <h3>Episodes</h3>
              
                {episodes}
            </Col>
        </>

    // null
    )
}

export default TrendingAnime;