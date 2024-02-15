import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import CreateBrand from '../components/Modals/CreateBrand';
import CreateDevice from '../components/Modals/CreateDevice';
import CreateType from '../components/Modals/CreateType';

const Admin = () => {

    const [showCreateType, setShowCreateType] = useState(true);

    return (
        <Container className='d-flex flex-column'>
            <Button variant={"outline-dark"} className='mt-4 p-2'>
                Add type
            </Button>
            <Button variant={"outline-dark"} className='mt-4 p-2'>
                Add brand
            </Button>
            <Button variant={"outline-dark"} className='mt-4 p-2'>
                Add device
            </Button>
            <CreateBrand/>
            <CreateDevice/>
            <CreateType show={showCreateType} onHide={() => setShowCreateType(false)} />
        </Container>
    );
}

export default Admin;
