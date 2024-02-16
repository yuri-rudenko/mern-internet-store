import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand, fetchBrands } from '../../http/deviceAPI';
import { Context } from '../..';

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const {device} = useContext(Context);

    const addBrand = async () => {
        await createBrand({name: value}).then(data => setValue(''))
        fetchBrands()
        .then(data => {
          device.setBrands(data)
          onHide()
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
            Add new brand
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={'Enter brand name'}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger'  onClick={onHide}>Close</Button>
          <Button variant='outline-success' onClick={addBrand}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateBrand;
