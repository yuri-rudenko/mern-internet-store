import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {

    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data => {
            device.setDevices(data.devices);
            device.setTotalCount(data.count);
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType._id, device.selectedBrand._id, device.page, 3).then(data => {
            device.setDevices(data.devices);
            device.setTotalCount(data.count);
        })
    }, [device.page, device.selectedType._id, device.selectedBrand._id])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9} style={{display: 'flex', flexDirection: 'column'}}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>

        </Container>
    );
})

export default Shop;
