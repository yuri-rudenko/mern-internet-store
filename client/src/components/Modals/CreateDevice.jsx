import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({show, onHide}) => {

    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data))
    }, [])


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [info, setInfo] = useState([]);

    const addinfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    }

    const addDevice = () => {

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brand', brand._id)
        formData.append('type', brand._id)
        formData.append('info', JSON.stringify(info))

        formData.forEach((val, key) => console.log(key + ' : ' + val))

        createDevice(formData).then(data => onHide())
    }

    const selectFile = (e) => {
       setFile(e.target.files[0]);
    }

    return (
        <Modal
        size="lg"
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add new device
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Dropdown className='mt-1'>
                <Dropdown.Toggle>{type.name || 'Choose type'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type => (
                        <Dropdown.Item onClick={() => setType(type)} key={type._id}>{type.name}</Dropdown.Item>
                    ))}
            </Dropdown.Menu>
            </Dropdown>
                <Dropdown className='mt-3'>
                    <Dropdown.Toggle>{brand.name || 'Choose brand'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => (
                            <Dropdown.Item onClick={() => setBrand(brand)} key={brand._id}>{brand.name}</Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control 
            className='mt-3'
            placeholder='Enter name of your device'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <Form.Control 
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className='mt-3'
            placeholder='Enter price of your device'
            type='number'/>
            <Form.Control 
            className='mt-3'
            type='file'
            onChange={selectFile}/>
            <hr/>
            <Button
            variant='outline-dark'
            onClick={addinfo}>
                Add new characteristic</Button>
            {info.map(i => (
                <Row className='mt-4' key={i.number}>
                    <Col md={4}>
                        <Form.Control
                            value={i.title}
                            placeholder='Title'
                            onChange={(e) => changeInfo('title', e.target.value, i.number)} 
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control
                            value={i.description}
                            onChange={(e) => changeInfo('description', e.target.value, i.number)} 
                            placeholder='Description'
                        />
                    </Col>
                    <Col md={4}>
                        <Button
                        variant='outline-danger'
                        onClick={() => removeInfo(i.number)}>
                        Delete</Button>
                    </Col>
                </Row>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger'  onClick={onHide}>Close</Button>
          <Button variant='outline-success' onClick={addDevice}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
})

export default CreateDevice;
