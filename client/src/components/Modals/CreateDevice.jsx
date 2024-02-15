import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {

    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addinfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
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
                <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type => (
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    ))}
            </Dropdown.Menu>
            </Dropdown>
                <Dropdown className='mt-3'>
                    <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => (
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control 
            className='mt-3'
            placeholder='Enter name of your device'/>
            <Form.Control 
            className='mt-3'
            placeholder='Enter price of your device'
            type='number'/>
            <Form.Control 
            className='mt-3'
            type='file'/>
            <hr/>
            <Button
            variant='outline-dark'
            onClick={addinfo}>
                Add new characteristic</Button>
            {info.map(i => (
                <Row className='mt-4' key={i.number}>
                    <Col md={4}>
                        <Form.Control
                            placeholder='Title'
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control
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
          <Button variant='outline-success' onClick={onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateDevice;
