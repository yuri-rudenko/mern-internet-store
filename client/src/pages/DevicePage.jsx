import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import greyStar from '../assets/greyStar.png'
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {

    const [device, setDevice] = useState({info: []});
    const {id} = useParams();


    useEffect(() => {
        fetchOneDevice(id)
        .then(data => {
        setDevice(data);
        if (!data.info) {
            data.info = [];
        }
    })
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 className='d-flex justify-content-center'>{device.name}</h2>
                        <div 
                        className='d-flex align-items-center justify-content-center'
                        style={{background: `url(${greyStar}) no-repeat center center`, width:200, height:200, backgroundSize: 'cover', fontSize: 64}}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}>
                        <h3>From: {device.price} $</h3>
                        <Button variant={'outline-dark'}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Description</h1>
                {device.deviceInfo && device.deviceInfo.map((info, index) => (
                    <Row key={info._id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
}

export default DevicePage;
