import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import CreateBrand from '../components/Modals/CreateBrand';
import CreateDevice from '../components/Modals/CreateDevice';
import CreateType from '../components/Modals/CreateType';

const Admin = () => {

    const [showCreateType, setShowCreateType] = useState(false);
    const [showCreateDevice, setShowCreateDevice] = useState(false);
    const [showCreateBrand, setShowCreateBrand] = useState(false);

    return (
        <Container className='d-flex flex-column'>
            <Button onClick={() => setShowCreateType(true)} variant={"outline-dark"} className='mt-4 p-2'>
                Add type
            </Button>
            <Button onClick={() => setShowCreateBrand(true)} variant={"outline-dark"} className='mt-4 p-2'>
                Add brand
            </Button>
            <Button onClick={() => setShowCreateDevice(true)} variant={"outline-dark"} className='mt-4 p-2'>
                Add device
            </Button>
            <CreateBrand show={showCreateBrand} onHide={() => setShowCreateBrand(false)}/>
            <CreateDevice show={showCreateDevice} onHide={() => setShowCreateDevice(false)}/>
            <CreateType show={showCreateType} onHide={() => setShowCreateType(false)} />
        </Container>
    );
}

export default Admin;
