import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType, fetchTypes } from '../../http/deviceAPI';
import { Context } from '../..';

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const {device} = useContext(Context);

    const addType = async () => {
        await createType({name: value}).then(data => setValue(''))
        fetchTypes().then(data => {
          device.setTypes(data)
        })
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
            Add new type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={'Enter type name'}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger'  onClick={onHide}>Close</Button>
          <Button variant='outline-success' onClick={addType}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateType;
