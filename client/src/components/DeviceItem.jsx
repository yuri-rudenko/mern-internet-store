import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import starImage from '../assets/star.png';
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {

    const navigate = useNavigate()

    return (
        <Col md={3} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card className='mt-3 p-1' style={{width: 150, cursor: 'pointer'}}>
                <Image width={140} height={140} src={device.img}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>
                        Samsung...
                    </div>
                    <div className='d-flex align-items-center'>
                        <div>
                            {device.rating}
                        </div>
                        <Image width={18} height={18} src={starImage}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
}

export default DeviceItem;
