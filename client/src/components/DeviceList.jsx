import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {

    const {device} = useContext(Context);

    return (
        <Row className='d-flex'>
            {device.devices.map(device => (
                <DeviceItem key={device._id} device={device}/>
            ))}
        </Row>
    );
})

export default DeviceList;
