import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import greyStar from '../assets/greyStar.png'

const DevicePage = () => {

    const device = {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699267344-opt.webp'}
    const description = [
        {id: 1, title: 'Memory', description: '5 GB'},
        {id: 2, title: 'Camera', description: '12 MP'},
        {id: 3, title: 'Proccessor', description: 'Pentium 3'},
        {id: 4, title: 'Display', description: '5.7"'},
        {id: 5, title: 'Charge', description: '4000 mA'},
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
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
                {description.map((info, index) => (
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
}

export default DevicePage;
