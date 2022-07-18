import React, {useState, useEffect} from 'react';
import {data, throwback} from './data/data';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Navbar from './components/navbar/navbar';
import Trending from './components/trending/trending';
import TrendingAnime from './components/trendingAnime/trendingAnime';
import Banner from './components/banner/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss'
import './App.css';

const App = () => {
    const trendingInitial = data;

    const [trending,
        setTrending] = useState(trendingInitial);
    const [throwbacks,
        setThrowBack] = useState(throwback)
    const [showAnime,
        setShowAnime] = useState(false);

    const [selected,
        setSelected] = useState(null);

    const selectTrendingHandler = (index) => {
        setShowAnime(true);
        setSelected(index);
    }

    const goBackHandler = () => {
        setShowAnime(false);
    }
    // useEffect(()=> {   selectTrendingHandler(); },[]);
    const trendingList = !showAnime
        ? trending.map((trend, index) => {
            return (<Trending
                key={trend.title}
                title={trend.title}
                category={trend.category}
                stars={trend.stars}
                episodes={trend.episodes}
                thumb={trend.thumb}
                click={() => selectTrendingHandler(index)}/>)
        })
        : <>
        <p><Button onClick={goBackHandler}>Back</Button></p>
            
            <TrendingAnime
                thumb={trending[selected].thumb}
                title={trending[selected].title}
                category={trending[selected].category}
                stars={trending[selected].stars}
                episodes={trending[selected].episodes}
                synopsis={trending[selected].synopsis}/>
        </>;
    const throwbackList = !showAnime
        ? <Row className='throwback'>
                <h2>Throwback Anime!</h2>
                {
                    throwbacks.map((throwb) => {
                        return (
                            <Col md={4}>
                                <img src={throwb.img} alt=""/>
                            </Col>

                        )
                    })
                }
            </Row>

        : '';
    return (
        <div className='app'>
            <div className="fluid_bg">
                <Container className='bg-wrap'>
                    <Navbar/>
                    <Banner/>
                </Container>
            </div>

            <Container fluid className='bg-trend'>
                <Container className='trending'>
                    <Row>
                        <Col>
                            <h2>Trending
                                <span>
                                    this week</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        {trendingList}
                    </Row>

                    {throwbackList}
                </Container>
            </Container>

        </div>

    );
}

export default App;
